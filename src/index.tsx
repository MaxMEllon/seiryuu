import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './stores/store';
import Comment from './components/comment'

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Comment content="hello" />
  </Provider>,
  document.getElementById('main')
);
