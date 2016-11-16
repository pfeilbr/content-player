import {push} from 'react-router-redux'
import axios from 'axios'

const axiosClient = () => {
  let instance = axios.create({
    baseURL: 'http://localhost:3001'
  })
  const token = localStorage.getItem('token')
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return instance
}

export const navigate = (pathname) => dispatch => {
  dispatch(push(pathname))
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const loginRequest = (username, password) => ({type: LOGIN_REQUEST, username, password})
export const loginResponse = (resp) => ({
  type: LOGIN_RESPONSE,
  ...resp
})
export const loginError = (err) => ({
  type: LOGIN_ERROR,
  error: err
})
export const login = (username, password) => dispatch => {
  dispatch(loginRequest(username, password))

  return axiosClient().post('/login', {username, password})
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      dispatch(loginResponse(res.data))
      dispatch(push('contentlist'))
    })
    .catch(err =>  {
      console.log(err)
      dispatch(loginError(err))
    })
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'
export const logoutRequest = () => ({type: LOGOUT_REQUEST})
export const logoutResponse = (resp) => ({type: LOGOUT_RESPONSE})
export const logout = () => dispatch => {
  dispatch(logoutRequest())
  return new Promise((resolve, reject) => {
    localStorage.removeItem('token')
    resolve()
  }).then(json => {
    dispatch(logoutResponse(json))
    dispatch(push('login'))
  })
}

export const NAV_TO_SEARCH = 'NAV_TO_SEARCH'
export const navigateToSearch = (e) => dispatch => {
  dispatch({type: NAV_TO_SEARCH})
  dispatch(push('search'))
}

export const SEARCH_FEED_REQUEST = 'SEARCH_FEED_REQUEST'
export const SEARCH_FEED_RESPONSE = 'SEARCH_FEED_RESPONSE'
export const SEARCH_FEED_ERROR = 'SEARCH_FEED_ERROR'
export const SEARCH_FEED_CLEAR = 'SEARCH_FEED_CLEAR'
export const searchFeedRequest = (term) => ({type: SEARCH_FEED_REQUEST, term})
export const searchFeedResponse = (resp) => ({type: SEARCH_FEED_RESPONSE, results: resp.results})
export const searchFeedError = (err) => ({type: SEARCH_FEED_ERROR, error: err})
export const searchFeedClear = () => ({type: SEARCH_FEED_CLEAR})
export const searchFeed = (term) => dispatch => {
  dispatch(searchFeedRequest(term))
  return axiosClient().get(`/feed/search?term=${term}`)
    .then(res => {
      dispatch(searchFeedResponse(res.data))
    })
    .catch(err =>  {
      dispatch(searchFeedError(err))
    })
}

export const FETCH_FEED_REQUEST = 'FETCH_FEED_REQUEST'
export const FETCH_FEED_RESPONSE = 'FETCH_FEED_RESPONSE'
export const FETCH_FEED_ERROR = 'FETCH_FEED_ERROR'
export const fetchFeedRequest = (feed) => ({type: FETCH_FEED_REQUEST, feed})
export const fetchFeedResponse = (resp) => ({type: FETCH_FEED_RESPONSE, results: resp})
export const fetchFeedError = (err) => ({type: FETCH_FEED_ERROR, error: err})
export const fetchFeed = (feed) => dispatch => {
  dispatch(fetchFeedRequest(feed))
  return axiosClient().get(`/feed/fetch?feed=${feed}`)
    .then(res => {
      dispatch(fetchFeedResponse(res.data))
    })
    .catch(err =>  {
      dispatch(fetchFeedError(err))
    })
}

export const VIEW_FEED = 'VIEW_FEED'
export const viewFeed = (feed) => dispatch => {
  dispatch({type: VIEW_FEED, feed})
  dispatch(fetchFeed(feed))
  dispatch(push({pathname: 'feed', query: {feed}}))
}
