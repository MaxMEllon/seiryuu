import { ipcRenderer } from 'electron'
import { END, eventChannel } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions'
import Config from '../models/Config'

function subscribeTimeLine(socket) {
  return eventChannel((emitter) => {
    socket.on('tweet', (e, args) => {
      const tweet = JSON.parse(args)
      emitter(tweet)
    })
    socket.on('quit', () => {
      localStorage.clear()
      emitter(END)
    })
    return () => socket.removeAllListeners(['tweet', 'quit'])
  })
}

function* commentStream() {
  ipcRenderer.send('boot', 'ping')
  const channel = yield call(subscribeTimeLine, ipcRenderer)
  while (true) {
    const payload = yield take(channel)
    yield put(actions.recieveComment(payload.text, payload.user.name))
  }
}

function subscribeConfig(socket) {
  return eventChannel((emitter) => {
    socket.on('config/update', (e, args) => {
      emitter(args)
    })
    socket.on('quit', () => {
      emitter(END)
    })
    return () => socket.removeAllListeners(['config/update'])
  })
}

function* configSyncSteram() {
  const channel = yield call(subscribeConfig, ipcRenderer)
  while (true) {
    const payload = yield take(channel)
    const newConfig: Config = Config.fromJSON(payload) as Config
    yield put(actions.syncConfigAll(newConfig))
  }
}

function* timeLineconfigStream() {
  while (true) {
    const action = yield take(actions.TIMELINE_TYPE_CHANGE_NAME)
    const config: Config = new Config(action.timelineType)
    localStorage.setItem('config', config.toJSON())
    const json = localStorage.getItem('config')
    ipcRenderer.send('config/modify', json)
  }
}

export default function* rootSaga() {
  yield fork(commentStream)
  yield fork(timeLineconfigStream)
  yield fork(configSyncSteram)
}
