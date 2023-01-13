import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

export function run() {
  render();
}

export default function App() {
  return (
    <React.Fragment>
      <h1>test</h1>
    </React.Fragment>
  );
}

export function render() {
  ReactDOM.render(<App />, document.getElementById("page"));
}
