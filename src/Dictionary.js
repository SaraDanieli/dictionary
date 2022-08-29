import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(keyword);
  }

  function getValue(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={getValue} />
      </form>
    </div>
  );
}