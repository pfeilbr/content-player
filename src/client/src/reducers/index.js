//import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const user = (state = {authenticated: false}, action) => {

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        username: action.username,
        password: action.password,
        isFetching: true,
        authenticated: false
      }
    case 'LOGIN_RESPONSE':
      return {
        ...state,
        username: action.username,
        sessionid: 123,
        isFetching: false,
        authenticated: true
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        isFetching: true,
        authenticated: false
      }
      case 'LOGOUT_RESPONSE':
        return {
          ...state,
          isFetching: false,
          authenticated: false,
          sessionid: null
        }

    default:
      return state
  }

}

const contentDefaultState = {
  items: [
    {
      id: 1,
      name: 'js jabber'
    },
    {
      id: 2,
      name: 'gotime'
    },
    {
      id: 3,
      name: 'ATP'
    }
  ]
}

const content = (state = contentDefaultState, action) => {
  return state
}

const rootReducer = combineReducers({
  user,
  content,
  routing
})

export default rootReducer
