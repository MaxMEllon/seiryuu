import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './stores/store';
import CommentList from './components/CommentList'

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <CommentList />
  </Provider>,
  document.getElementById('main')
);
