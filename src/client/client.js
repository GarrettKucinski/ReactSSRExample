// Entry point for the client application
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
import reducers from './reducers'

const axiosInstance = axios.create({
  baseURL: '/api'
})
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
