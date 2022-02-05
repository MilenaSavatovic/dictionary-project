import React, { useState } from 'react'
import './Dictionary.css'
import axios from 'axios'
import Results from './Results'
import Photos from './Photos'

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord)
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false)
  let [photos, setPhotos] = useState(null)

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos)
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse)

    let pexelsApiKey =
      '563492ad6f91700001000001e20b18de7a0047629cc714ddb7e70fb0'

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse)
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
            <input type="submit" className="submit-btn" />
          </form>
          <div className="hint">suggested words: wine, sea, sun..</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    )
  } else {
    load()
    return 'Loading'
  }
}
