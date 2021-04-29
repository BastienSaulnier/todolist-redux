import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";

import { employees } from "../../data/employees";
import { addTodo } from "../../actions/todos.actions";

export default function AddTdo() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.todos.todos.length + 1);
  const [title, setTitle] = useState("");
  const [employee, setEmployee] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event, id, title, employee, description) {
    setTitle("");
    setEmployee("");
    setDescription("");
    event.preventDefault();
    dispatch(addTodo(id, title, employee, description));
  }

  return (
    <div className="AddTodo center">
      <form
        id="addTodoForm"
        onSubmit={(event) =>
          handleSubmit(event, id, title, employee, description)
        }
      >
        <div className="formHead">
          <label htmlFor="title">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Todo title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <label htmlFor="employee">
            <select
              id="employee"
              name="employee"
              required
              value={employee}
              onChange={(event) => setEmployee(event.target.value)}
            >
              <option value="" disabled hidden>
                Who do you want to assign ?
              </option>
              {employees.map((employee, key) => {
                const { name } = employee;
                return (
                  <option key={key} value={JSON.stringify(employee)}>
                    {name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        <label htmlFor="description">
          <textarea
            id="description"
            name="description"
            placeholder="Describe your todo ..."
            rows="5"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <button type="submit" value="Add todo" form="addTodoForm">
          Add todo
        </button>
      </form>
    </div>
  );
}
