import {
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS,
  POST_TODO,
} from "../ActionTypes/TodoType";

const initialState = {
  todos: [
    {
      id: Math.random(),
      text: "learn redux",
      isComplit: false,
    },
    { id: Math.random(), text: "learn react", isComplit: true },
    { id: Math.random(), text: "learn Api", isComplit: false },
  ],
};

const Todo = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return { ...state };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== payload),
      };
    case POST_TODO:
      const newtodo = {
        id: Math.random(),
        text: payload,
        isComplit: false,
      };
      return { ...state, todos: [...state.todos, newtodo] };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload.id ? { ...el, text: payload.data } : el
        ),
      };
    default:
      return state;
  }
};
export default Todo;
