import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Search from '../components/Search'

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Search {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {search: state.search}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
