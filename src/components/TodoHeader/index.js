import React from "react";
import "./index.scss";

export default function TodoHeader() {
  return (
    <header className="TodoHeader">
      <div className="headerContent center">
        <h1>React/Redux Todolist</h1>
        <span>
          by <strong>Saulnier Bastien</strong>
        </span>
      </div>
    </header>
  );
}
