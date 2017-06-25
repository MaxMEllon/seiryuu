import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'

type LoggerOption = object

const opt: LoggerOption = {
  timestamp: true
}

const logger = createLogger(opt)

export default function configureStore () {
  const store = compose(applyMiddleware(logger))(createStore)(reducer)
  return store
}
