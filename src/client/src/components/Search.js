import React, {Component} from 'react'
import {browserHistory} from 'react-router'

 // = ( {searchFeed, search} ) => {

class Search extends Component {

  handleSearch = (e) => {
    if (e.target.value.length > 0) {
      this.props.searchFeed(e.target.value)
    } else {
      this.props.searchFeedClear()
    }

  }

  render() {

    const {search} = this.props

    const resultItems = search.results.map(item => {
      return (<li key={item.trackId}>{item.trackName}</li>)
    })

    return (
      <div>
        <p>
          <a href="#" onClick={browserHistory.goBack}>back</a>
        </p>
        <h3>Add Content</h3>
        <p>
          <span>search: </span><input type="text" onChange={this.handleSearch}></input>
        </p>
        <p>
          <ul>
            {resultItems}
          </ul>
        </p>
      </div>
    )

  }

}

export default Search
