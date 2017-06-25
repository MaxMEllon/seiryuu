import { ipcRenderer } from "electron";
import { eventChannel } from "redux-saga";
import { call, fork, put, take } from "redux-saga/effects";
import * as actions from "../actions";

function subscribeTimeLine(socket) {
  return eventChannel((emitter) => {
    socket.on("tweet", (e, args) => {
      const tweet = JSON.parse(args);
      emitter(tweet.text);
    });
    return () => { /* do nothing */ };
  });
}

function* flow() {
  ipcRenderer.send("boot", "ping");
  const channel = yield call(subscribeTimeLine, ipcRenderer);
  while (true) {
    const payload = yield take(channel);
    yield put(actions.recieveComment(payload));
  }
}

export default function* rootSaga() {
  yield fork(flow);
}
