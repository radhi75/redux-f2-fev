import { createStore } from "redux";
import Todo from "./reducer/Todo";

const store = createStore(
  Todo /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
