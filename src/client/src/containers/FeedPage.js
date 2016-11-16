import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import Feed from '../components/Feed'

class FeedPage extends Component {
  render() {
    return (
      <div>
        <Feed {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {feed: state.feed}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
