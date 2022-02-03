import React from 'react'

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul className="list-unstyled">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>
          })}
        </ul>
      </div>
    )
  } else {
    return null
  }
}
