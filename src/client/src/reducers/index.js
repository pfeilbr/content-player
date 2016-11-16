import * as Actions from '../actions'
import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'

const user = (state = {
  authenticated: false
}, action) => {

  switch (action.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        username: action.username,
        password: action.password,
        isFetching: true
      }
    case Actions.LOGIN_RESPONSE:
      return {
        ...state,
        username: action.user.username,
        token: action.token,
        isFetching: false,
        error: null
      }
    case Actions.LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    case Actions.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case Actions.LOGOUT_RESPONSE:
      return {
        ...state,
        token: null,
        isFetching: false
      }

    default:
      return state
  }

}

const contentDefaultState = {
  items: [
    // {
    //   id: 1,
    //   name: 'js jabber'
    // }, {
    //   id: 2,
    //   name: 'gotime'
    // }, {
    //   id: 3,
    //   name: 'ATP'
    // }
  ]
}

const content = (state = contentDefaultState, action) => {
  return state
}

const search = (state = {
  isFetching: false,
  results: []
}, action) => {
  switch (action.type) {
    case Actions.SEARCH_FEED_REQUEST:
      return {
        ...state,
        results: [],
        isFetching: true
      }
    case Actions.SEARCH_FEED_RESPONSE:
      return {
        ...state,
        results: action.results,
        isFetching: false
      }
    case Actions.SEARCH_FEED_ERROR:
      return {
        ...state,
        isFetching: false
      }
    case Actions.SEARCH_FEED_CLEAR:
      return {
        ...state,
        results: [],
        isFetching: false
      }

    default:
      return state
  }
}

const feed = (state = {
  isFetching: false,
  results: []
}, action) => {
  switch (action.type) {
    case Actions.FETCH_FEED_REQUEST:
      return {
        ...state,
        results: [],
        isFetching: true
      }
    case Actions.FETCH_FEED_RESPONSE:
      return {
        ...state,
        results: action.results,
        isFetching: false
      }
    case Actions.FETCH_FEED_ERROR:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({user, content, search, feed, routing})

export default rootReducer
