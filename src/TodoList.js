import React from "react";
import { useSelector } from "react-redux";
import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
} from "./constants/filters";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => {
    switch (state.filter) {
      case FILTER_ALL:
        return state.todos;
      case FILTER_ACTIVE:
        return state.todos.filter((todo) => !todo.completed);
      case FILTER_COMPLETED:
        return state.todos.filter((todo) => todo.completed);
      default:
        return state.todos;
    }
  });
  console.log(todos);
  if (!todos.length) {
    return null;
  }
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem
          title={todo.title}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          editing={todo.editing}
        />
      ))}
    </ul>
  );
};

export default TodoList;
