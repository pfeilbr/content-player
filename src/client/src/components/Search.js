import React, {Component} from 'react'

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
      return (
        <li key={item.trackId}>{item.trackName}</li>
      )
    })

    return (
      <div>
        {/* <p>
          <a href="#" onClick={browserHistory.goBack}>back</a>
        </p> */}
        <p>
          <span>search:
          </span>
          <input type="text" onChange={this.handleSearch}></input>
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
