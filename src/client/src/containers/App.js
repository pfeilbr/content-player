import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'

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
        {authenticated
          ? (
            <button onClick={logout}>logout</button>
          )
          : ''}
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
