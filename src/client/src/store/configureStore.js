import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import { routerMiddleware } from 'react-router-redux'
import {browserHistory} from 'react-router'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(browserHistory), thunk, /* api, */ createLogger()),
      DevTools.instrument()
    )
  )
  return store
}

export default configureStore
