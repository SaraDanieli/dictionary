import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function getValue(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={getValue} />
      </form>
    </div>
  );
}
