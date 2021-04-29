import React from "react";
import { useDispatch } from "react-redux";
import { setTodoInactive, deleteTodo } from "../../actions/todos.actions";
import moment from "moment";
import "moment/locale/fr";
import "./index.scss";

export default function TodoLine({ data }) {
  const dispatch = useDispatch();
  const { id, title, description, isActive, createdAt, endedAt } = data;
  const { name, avatar } = data.employee;
  const createdAtFormated = moment(createdAt).locale("fr").format("lll");
  const endedAtFormated = moment(endedAt).locale("fr").format("lll");

  return (
    <li className={isActive ? null : "inactiveTodo"}>
      <div className="todoHead">
        <div className="todoTitleDate">
          <h3>{title}</h3>
          <span>
            {isActive ? createdAtFormated : `Ended : ${endedAtFormated}`}
          </span>
        </div>

        <div className="todoEmployee">
          <img className="employeeAvatar" src={avatar} alt={name} />
          <span>{name}</span>
          <button onClick={() => dispatch(deleteTodo(id))}>
            <img src="./img/trash.svg" alt="Supress Button" />
          </button>
        </div>
      </div>

      <p className="todoDescription">{description}</p>

      {isActive ? (
        <button onClick={() => dispatch(setTodoInactive(id))}>
          Set todo achieved
        </button>
      ) : null}
    </li>
  );
}
