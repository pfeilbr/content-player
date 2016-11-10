import React, {Component, PropTypes} from 'react'
import {push} from 'react-router-redux'

class Nav extends Component {

  handleNavigate = (e, pathname) => {
    const {logout, navigate} = this.props
    e.preventDefault()

    if (pathname.includes('logout')) {
      logout()
    } else {
      navigate(pathname)
    }
  }

  render() {
    const {user, routing} = this.props
    const authenticated = !!user.token

    const items = ['contentlist', 'search', 'logout'].filter(pathname => {
      return authenticated
    }).map(pathname => {
      const active = routing.locationBeforeTransitions.pathname.includes(pathname)
      return (<a href='' style={active ? {'text-decoration': 'none'}: {}} onClick={e => this.handleNavigate(e, pathname)}>{pathname}</a>)
    })

    return (<div>
      {authenticated ? items : ''}
      {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
    </div>)
  }
}

export default Nav
