import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers';

type SagaOption = { };

const opt: SagaOption = {}

const logger = createLogger(opt);

export default function configureStore() {
  const store = compose(applyMiddleware(logger))(createStore)(rootReducer);
  return store;
}
