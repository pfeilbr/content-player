import React, {Component} from 'react'
import {Link} from 'react-router'

class AudioPlayer extends Component {

  play() {
    this.audio.src = 'https://devchat.cachefly.net/javascriptjabber/JSJ_01_mixdown.mp3#t=30,20'
    this.audio.play()
  }

  pause() {
    if (this.audio) {
      this.audio.pause()
    }
  }

  render() {
    return (
      <div>
        <audio ref={(e) => this.audio = e}></audio>
        <button onClick={() => this.play()}>play</button>
      </div>
    )
  }
}

export default AudioPlayer
