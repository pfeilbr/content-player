import React, {Component} from 'react'
import {style} from 'glamor'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends Component {

  performLogin = (e) => {
    e.preventDefault()
    this.props.login(this.username, this.password)
  }

  render() {
    const {user} = this.props
    return (
      <Paper {...style({maxWidth: '400px', margin: 'auto'})} zDepth={2}>
          <form {...style({padding: '4em'})}>
            <TextField type="text" hintText="Username (email)" fullWidth={true} onChange={e => this.username = e.target.value}/>
            <TextField type="password" hintText="Password" fullWidth={true} onChange={e => this.password = e.target.value}/>
            {user.error ? <em>{user.error.response.data}</em> : ''}
            <RaisedButton label="Login" primary={true} fullWidth={true} onClick={this.performLogin} />
          </form>
          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </Paper>
    )
  }
}

export default Login
