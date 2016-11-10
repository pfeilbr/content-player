import React, {Component} from 'react'

class Login extends Component {

  performLogin = (e) => {
    e.preventDefault()
    this.props.login(this.username.value, this.password.value)
  }

  render() {
    const {user} = this.props
    return (
      <div className="login">
        <form>
          <p><input type="text" placeholder="Username (email)" ref={e => this.username = e}/></p>
          <p><input type="password" placeholder="Password" ref={e => this.password = e}/></p>
          {user.error ? <em>{user.error.response.data}</em> : ''}
          <p>
            <button onClick={this.performLogin}>login</button>
          </p>
        </form>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </div>
    )
  }
}

export default Login
