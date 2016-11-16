import React from 'react'
import {Link} from 'react-router'

const ContentList = ({content, navigateToSearch}) => {
  const items = content.items.map(i => (
    <li key={i.id}>
      <Link to={`/view/${i.id}`}>{i.name}</Link> (<Link to={`/audioplayer/${i.id}`}>play</Link>)
    </li>
  ))
  return (
    <div>
      {items.length > 0 ? (<ul>{items}</ul>) : <span>No Content</span>}
    </div>
  )
}

export default ContentList
