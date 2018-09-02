import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
import TodoList from "./todoList";

ReactDOM.render(<TodoList />, document.getElementById("root"));
registerServiceWorker();
