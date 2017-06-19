import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

const logger = createLogger({});

export default function configureStore() {
  const store = compose(applyMiddleware(logger))(createStore)({});
  return store;
}
