import React from 'react'

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
      </div>
    )
  } else {
    return null
  }
}
