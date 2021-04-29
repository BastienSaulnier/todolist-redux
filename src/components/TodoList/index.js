import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

import TodoLine from "../TodoLine/index";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const activeTodos = todos.filter((todo) => {
    return todo.isActive;
  });
  const inactiveTodos = todos.filter((todo) => {
    return !todo.isActive;
  });
  const activeTodosCount = activeTodos.length;
  const inactiveTodosCount = inactiveTodos.length;

  return (
    <div className="TodosLists center">
      <h2>{activeTodosCount} Active Todos</h2>

      <ul className="activeTodosList">
        {activeTodos.map((activeTodo, key) => {
          return <TodoLine key={key} data={activeTodo} />;
        })}
      </ul>

      <h2>{inactiveTodosCount} Inactive Todos</h2>

      <ul className="inactiveTodosList">
        {inactiveTodos.map((inactiveTodo, key) => {
          return <TodoLine key={key} data={inactiveTodo} />;
        })}
      </ul>
    </div>
  );
}
