import { ipcRenderer } from 'electron'
import { END, eventChannel } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions'

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

function* flow() {
  ipcRenderer.send('boot', 'ping')
  const channel = yield call(subscribeTimeLine, ipcRenderer)
  while (true) {
    const payload = yield take(channel)
    yield put(actions.recieveComment(payload.text, payload.user.name))
  }
}

export default function* rootSaga() {
  yield fork(flow)
}
