import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import boardData from "./boardData";

boardData.getBoardData();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
