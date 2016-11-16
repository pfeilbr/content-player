import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Nav from '../components/Nav'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import MoreVert from 'material-ui/svg-icons/navigation/more-vert'

const NavCtrl = connect(
  state => state,
  (dispatch, ownProps) => bindActionCreators(Actions, dispatch)
)(Nav)

class App extends Component {

  static contextTypes = {
    store: PropTypes.object
  }

  render() {

    const addButton = (
      // <IconButton><FontIcon className="material-icons" style={{marginRight: 24}}>more</FontIcon></IconButton>
      <IconButton><MoreVert color='white'/></IconButton>
    )

    return (
      <MuiThemeProvider>
        <div>
        <AppBar
          title="Content Player"
          showMenuIconButton={false}
          iconElementRight={addButton}
        />
        <div className="App">
          <NavCtrl />
          {this.props.children}
        </div>
      </div>
    </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
