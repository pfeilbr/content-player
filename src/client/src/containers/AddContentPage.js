import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import AddContent from '../components/AddContent'

class AddContentPage extends Component {
  render() {
    return (
      <div>
        <AddContent {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddContentPage)
