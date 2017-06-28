import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './containers/App'
import Config from './containers/Config'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route path="/config" component={Config} />
        </Switch>
      </Router>
    )
  }
}
