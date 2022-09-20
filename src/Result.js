import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./result.css";
import Photos from "./Photos";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <section>
          <h2>{props.data.word}</h2>
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
                <Photos photos={props.photos} />
              </div>
            );
          })}
        </section>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <section>
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
