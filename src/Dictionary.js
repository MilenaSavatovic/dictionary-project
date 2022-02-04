import React, { useState } from 'react'
import './Dictionary.css'
import axios from 'axios'
import Results from './Results'

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord)
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false)

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse)
  }

  function HandleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleKeywordChange(event) {
    event.preventDefault()
    setKeyword(event.target.value)
  }

  function load() {
    setLoaded(true)
    search()
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={HandleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultWord}
            />
          </form>
          <div className="hint">suggested words: wine, sea, sun..</div>
        </section>
        <Results results={results} />
      </div>
    )
  } else {
    load()
    return 'Loading'
  }
}
