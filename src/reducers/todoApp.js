import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";

const todoApp = combineReducers({
  filter,
  todos
});

export default todoApp;
