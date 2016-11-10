import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import * as Actions from '../actions'
import Nav from '../components/Nav'

const NavCtrl = connect(
  state => state,
  (dispatch, ownProps) => bindActionCreators(Actions, dispatch)
)(Nav)

class App extends Component {

  static contextTypes = {
    store: PropTypes.object
  }

  render() {
    const {store} = this.context
    const authenticated = !!store.getState().user.token

    const {logout} = this.props

    return (
      <div className="App">
        <h2>Content Player</h2>
        <NavCtrl />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
