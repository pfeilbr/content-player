import React from 'react'
import Debug from './Debug'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const Feed = ({feed: {results,isFetching}}) => {

  const item = results.length > 0 ? results[0] : {meta: {image: {}}}

  // const content = (
  //   <div>
  //     <h3><a target='_blank' href={item.meta.link}>{item.meta.title}</a></h3>
  //     <p>{item.meta.description}</p>
  //     <p>{items}</p>
  //   </div>
  // )

  const card = (
    <Card>
      <CardHeader
          title={item.meta.title}
          subtitle={item.meta.description}
          avatar={item.meta.image.url} />
    </Card>
  )

  const episodeListItems = results.map(item => (
      <div>
        <ListItem key={item.guid} primaryText={item.title} />
        <Divider />
      </div>
    )
  )

  const episodeList = (
    <List>
      <Subheader>Episodes</Subheader>
      {episodeListItems}
    </List>
  )

  const loading = (
    <div style={{textAlign: 'center'}}>
      <RefreshIndicator
          size={40}
          left={10}
          top={0}
          status="loading"
          style={{display: 'inline-block', position: 'relative'}}/>
    </div>
      )

  return (
    <div>
      {isFetching ? loading : [card, episodeList]}
      <Debug item={results} />
    </div>
  )
}

export default Feed
