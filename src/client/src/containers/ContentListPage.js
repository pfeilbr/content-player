import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import ContentList from '../components/ContentList'

class ContentListPage extends Component {
  render() {
    return (
      <div>
        <ContentList {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {content: state.content}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentListPage)
