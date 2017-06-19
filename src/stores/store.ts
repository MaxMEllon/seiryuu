import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

type SagaOption = object;

const opt: SagaOption = {}

const logger = createLogger(opt);

export default function configureStore() {
  const store = compose(applyMiddleware(logger))(createStore)(reducer);
  return store;
}
