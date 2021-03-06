import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { fetchUserEpic } from './redux-rxjs/epic'
import { users } from './redux-rxjs/reducer'
import App from './App'
import './main.css'

export const rootEpic = combineEpics(fetchUserEpic)
export const rootReducer = combineReducers({ users })

const epicMiddleware = createEpicMiddleware()
const store = createStore(rootReducer, applyMiddleware(epicMiddleware))
epicMiddleware.run(rootEpic)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
