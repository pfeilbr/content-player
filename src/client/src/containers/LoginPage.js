import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Login from '../components/Login'

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Login {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.user}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
