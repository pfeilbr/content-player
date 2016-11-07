import {push} from 'react-router-redux'
// import fetch from 'isomorphic-fetch'
import jsonp from 'jsonp'

export const loginRequest = (username, password) => ({type: 'LOGIN_REQUEST', username, password})
export const loginResponse = (resp) => ({
  type: 'LOGIN_RESPONSE',
  ...resp
})
export const login = (username, password) => dispatch => {
  dispatch(loginRequest(username, password))

  jsonp('https://itunes.apple.com/search?media=podcast&entity=podcast&term=javascript&limit=200', null, function (err, data) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(data);
    }
  });

  // fetch('https://itunes.apple.com/search?term=jack+johnson')
  //   .then(resp => console.log(resp))

  return new Promise((resolve, reject) => {
    resolve({username, password})
  }).then(json => {
    dispatch(loginResponse(json))
    dispatch(push('contentlist'))
  })
}

export const logoutRequest = () => ({type: 'LOGOUT_REQUEST'})
export const logoutResponse = (resp) => ({type: 'LOGOUT_RESPONSE'})
export const logout = () => dispatch => {
  dispatch(logoutRequest())
  return new Promise((resolve, reject) => {
    resolve()
  }).then(json => {
    dispatch(logoutResponse(json))
    dispatch(push('login'))
  })
}

export const addContent = (e) => dispatch => {
  dispatch({type: 'ADD_CONTENT'})
  dispatch(push('addcontent'))
}
