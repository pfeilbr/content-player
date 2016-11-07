import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import App from './containers/App'
import LoginPage from './containers/LoginPage'
import ContentListPage from './containers/ContentListPage'
import AddContentPage from './containers/AddContentPage'
import AudioPlayerPage from './containers/AudioPlayerPage'

export default(store) => {

  const loginCheck = (nextState, replace, callback) => {
    if ((nextState.location.pathname !== '/login') && (!store.getState().user.authenticated)) {
      replace('/login')
    }
    callback()
  }

  return (
    <Route path="/" component={App} onEnter={loginCheck}>
      <IndexRedirect to="contentlist"/>
      <Route path="login" component={LoginPage}/>
      <Route path="contentlist" component={ContentListPage}/>
      <Route path="addcontent" component={AddContentPage}/>
      <Route path="audioplayer/:id" component={AudioPlayerPage}/>
    </Route>
  )

}