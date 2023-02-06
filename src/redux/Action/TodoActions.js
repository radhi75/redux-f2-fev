import {
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS,
  POST_TODO,
} from "../ActionTypes/TodoType";

export const get_todo = () => {
  return { type: GET_TODOS };
};
export const delete_todo = (id) => {
  return { type: DELETE_TODO, payload: id };
};
export const post_todo = (data) => {
  return { type: POST_TODO, payload: data };
};
export const edit_todo = (id, data) => {
  return { type: EDIT_TODO, payload: { id, data } };
};
