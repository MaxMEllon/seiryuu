import { ipcRenderer } from 'electron'
import { eventChannel } from 'redux-saga'
import { call, fork, take } from 'redux-saga/effects'
import * as actions from '../actions'

function subscribeTimeLine (socket) {
  return eventChannel((emitter) => {
    socket.on('tweet', (e, args) => {
      const tweet = JSON.parse(args)
      emitter(actions.recieveComment(tweet.text))
    })
    return () => { /* do nothing */ }
  })
}

function* flow () {
  ipcRenderer.send('boot', 'ping')
  yield call(subscribeTimeLine, ipcRenderer)
  while (true) {
    yield take(actions.APPLICATION_STOP_NAME)
  }
}

export default function* rootSaga () {
  yield fork(flow)
}
