import React from 'react'
import Synonyms from './Synonyms'

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className="text-capitalize">
                <strong>Definition:</strong>
                {definition.definition}
                <br />
                <strong>Example:</strong>
                <em>{definition.example}</em>
                <br />
              </p>

              <Synonyms synonyms={definition.synonyms} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
