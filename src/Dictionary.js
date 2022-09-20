import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);

    let pexelApiKey =
      "563492ad6f917000010000016b4a6933745940d28ce56aad0e345fa3";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    axios
      .get(pexelApiUrl, {
        headers: { Authorization: `Bearer ${pexelApiKey}` },
      })
      .then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getValue(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <p>What do you want to look up?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={getValue}
              defaultValue={props.defaultKeyword}
              placeholder="Type a word here..."
            />
          </form>
        </section>
        <Result data={result} photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
