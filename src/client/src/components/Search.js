import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'

class Search extends Component {

  handleSearch = (e) => {
    if (e.target.value.length > 0) {
      this.props.searchFeed(e.target.value)
    } else {
      this.props.searchFeedClear()
    }
  }

  render() {
    const {search, viewFeed} = this.props

    const resultItems = search.results.map(item => {
      return (
        <li key={item.trackId}><a onClick={(e) => {e.preventDefault(); viewFeed(item.feedUrl)}} href=''>{item.trackName}</a></li>
      )
    })

    const listItems = search.results.map(item => {
      return (
        <div>
          <ListItem
            onClick={(e) => {e.preventDefault(); viewFeed(item.feedUrl)} }
            leftAvatar={<Avatar src={item.artworkUrl30} />}
            primaryText={item.collectionName}
          />
          <Divider inset={true}/>
        </div>
      )
    })

    const list = (
      <List>
        {/* <Subheader>Results</Subheader> */}
        {listItems}
      </List>
    )

    return (
      <div>
          <TextField type="text" hintText="search" onChange={this.handleSearch}/>
          {list}
      </div>
    )

  }

}

export default Search
