import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  EDIT_TODO,
  CLEAR_COMPLETED_TODOS,
  MARK_ALL_TODO
} from "../constants/actionTypes";

export const addTodo = title => {
  return {
    type: ADD_TODO,
    title
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const editTodo = id => {
  return {
    type: EDIT_TODO,
    id
  };
};

export const updateTodo = (title, id) => {
  return {
    type: UPDATE_TODO,
    id,
    title
  };
};

export const clearCompleteTodos = () => {
  return {
    type: CLEAR_COMPLETED_TODOS
  };
};

export const markAllTodos = isToggled => {
  return {
    type: MARK_ALL_TODO,
    isToggled
  };
};
