import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import AudioPlayer from '../components/AudioPlayer'

class AudioPlayerPage extends Component {
  render() {
    return (
      <div>
        <AudioPlayer {...this.props}/>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayerPage)
