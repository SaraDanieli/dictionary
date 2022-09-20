import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResult(response.data[0]);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
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
          <h3>What do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={getValue}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Result data={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
