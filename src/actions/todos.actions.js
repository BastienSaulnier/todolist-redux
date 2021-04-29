import * as todosConsts from "../consts/todos.consts";

export const addTodo = (id, title, employee, description) => ({
  type: todosConsts.ADD_TODO,
  payload: {
    id: id,
    title: title,
    employee: employee,
    description: description,
    createdAt: new Date(),
  },
});

export const setTodoInactive = (id) => ({
  type: todosConsts.SET_TODO_INACTIVE,
  payload: { id: id, endedAt: new Date() },
});

export const deleteTodo = (id) => ({
  type: todosConsts.DELETE_TODO,
  payload: { id: id },
});
