import React from 'react'
import {style} from 'glamor'

const Debug = ({item}) => {

  const containerRule = style({
    marginTop: '10px',
    paddingTop: '5px',
    borderTop: '1px solid black'
  })

  return (
    <div {...containerRule}>
      <strong>Debug</strong>
      <pre>{item ? JSON.stringify(item, null, 2) : ''}</pre>
    </div>
  )
}

export default Debug
