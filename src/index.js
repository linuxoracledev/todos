import React from "react"
import ReactDOM from "react-dom"

//Router
import { BrowserRouter as BRouter } from "react-router-dom"
//component file
import TodoContainer from "./components/TodoContainer"

//stylesheet
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <BRouter>
      <TodoContainer />
    </BRouter>
  </React.StrictMode>,
  document.getElementById("root")
);