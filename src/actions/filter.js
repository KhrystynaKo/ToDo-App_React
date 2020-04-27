import { SET_FILTER } from "../constants/actionTypes";

export const setfilterTodo = filter => {
  return {
    type: SET_FILTER,
    filter
  };
};
