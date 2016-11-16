import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Nav from '../components/Nav'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const NavCtrl = connect(
  state => state,
  (dispatch, ownProps) => bindActionCreators(Actions, dispatch)
)(Nav)

class App extends Component {

  static contextTypes = {
    store: PropTypes.object
  }

  render() {

    const {user, navigateToSearch, logout} = this.props

    const MoreButton = (props) => (
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><MoreVertIcon color='white' /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Search" onClick={navigateToSearch}/>
        <MenuItem primaryText="Sign out" onClick={logout}/>
      </IconMenu>
    )

    const addButton = (
      <IconButton><MoreVertIcon color='white'/></IconButton>
    )

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Content Player"
            showMenuIconButton={false}
            iconElementRight={user.token ? <MoreButton /> : null}
          />
          <div style={{marginBottom: '20px'}}/>
          {this.props.children}
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
