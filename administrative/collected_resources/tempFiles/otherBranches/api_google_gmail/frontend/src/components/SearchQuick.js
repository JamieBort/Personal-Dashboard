// This will be used in the general pages for doing a quick search in that general page.
// No options/parameters. Only search by a word or phrase. Nothing complicated.
// For quick, simple searches use the SearchDetailed.js component.

import React from "react";

export default function SearchQuick(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>Quick Search: </p>
      <input></input>
    </>
  );
}
