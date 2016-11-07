import React, {Component} from 'react'
//import { Link } from 'react-router'

class Login extends Component {

  performLogin = (e) => {
    e.preventDefault()
    this.props.login(this.username.value, this.password.value)
  }

  render() {
    return (
      <div className="login">
        <form>
          <p><input type="text" placeholder="Username (email)" ref={e => this.username = e}/></p>
          <p><input type="password" placeholder="Password" ref={e => this.password = e}/></p>
          <p>
            <button onClick={this.performLogin}>login</button>
          </p>
        </form>
      </div>
    )
  }
}

export default Login
