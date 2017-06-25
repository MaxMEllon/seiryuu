import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './containers/App'
import Config from './containers/Config'
import createStore from './stores/store'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/config" component={Config} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('main'),
)
