import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import Routes from './routes'
import createStore from './stores/store'

const store = createStore()

const el = document.getElementById('main')

// tslint:disable-next-line:variable-name
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    el,
  )
}

render(Routes)

declare var module: any
if (module.hot) module.hot.accept('./routes', () => render(Routes))
