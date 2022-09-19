import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonym">
        {props.synonyms.map(function (synonym, index) {
          return <div key={index}>{synonym}</div>;
        })}
      </div>
    );
  }
}
