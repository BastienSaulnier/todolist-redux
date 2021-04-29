import React from "react";
import TodoHeader from "../../components/TodoHeader";
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import "./index.scss";

export default function Layout() {
  return (
    <div className="Layout">
      <TodoHeader />
      <AddTodo />
      <TodoList />
    </div>
  );
}
