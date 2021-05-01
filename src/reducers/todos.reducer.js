import * as todosConsts from "../consts/todos.consts";

const initialState = {
  todoPrimaryKey: 0,
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case todosConsts.ADD_TODO:
      const { title, employee, description, createdAt } = action.payload;
      return {
        ...state,
        todoPrimaryKey: state.todoPrimaryKey + 1,
        todos: [
          ...state.todos,
          {
            id: state.todoPrimaryKey + 1,
            title: title,
            employee: JSON.parse(employee),
            description: description,
            isActive: true,
            createdAt: createdAt,
            endedAt: null,
          },
        ],
      };

    case todosConsts.SET_TODO_INACTIVE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isActive: false, endedAt: action.payload.endedAt }
            : todo
        ),
      };

    case todosConsts.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default todos;
