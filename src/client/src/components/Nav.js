import React, {Component} from 'react'
import './Nav.css'

const styles = {
  active: {
    'text-decoration': 'none'
  }
}

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
      return (<a href='' className='Nav-link' style={active ? styles.active: {}} onClick={e => this.handleNavigate(e, pathname)}>{pathname}</a>)
    })

    return (<div>
      {authenticated ? items : ''}
      {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
    </div>)
  }
}

export default Nav
