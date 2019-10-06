import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
// import { hashHistory } from 'react-router'

import thunk from 'redux-thunk'

import rootReducer from '../reducers'

// const middleware = routerMiddleware(hashHistory)

const configureMainStore = function() {
  const store = createStore( rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f // Install DevTools
  ))

  return store
}

export default configureMainStore;