import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import rootSaga from '../sagas'

type LoggerOption = object

const opt: LoggerOption = {
  timestamp: true,
}

const logger: any = createLogger(opt)

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: any = []
  middlewares.push(sagaMiddleware)
  if (process.env.NODE_ENV !== 'production') middlewares.push(logger)
  const store = compose(applyMiddleware(...middlewares))(createStore)(reducer)
  sagaMiddleware.run(rootSaga)
  return store
}
