import React from 'react'
import {browserHistory} from 'react-router'

const AddContent = () => {
  return (
    <div>
      <p>
        <a href="#" onClick={browserHistory.goBack}>back</a>
      </p>
      <h3>Add Content</h3>
    </div>
  )
}

export default AddContent
