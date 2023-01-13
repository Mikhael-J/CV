import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Contente from "./Contente/Contente";

export function run() {
  render();
}

export default function App() {
  return (
    <React.Fragment>
      <Contente />
    </React.Fragment>
  );
}

export function render() {
  ReactDOM.render(<App />, document.getElementById("page"));
}
