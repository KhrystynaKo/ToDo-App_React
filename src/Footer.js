import React from "react";
import Counter from "./Counter";
import ClearCompleted from "./ClearCompleted";
import Filters from "./Filters";
import { useSelector } from "react-redux";

const Footer = () => {
  const { filter, todos, todosCount, completedCount } = useSelector((state) => {
    return {
      filter: state.filter,
      todos: state.todos,
      todosCount: state.todos.length,
      completedCount: state.todos.reduce(
        (count, todo) => (todo.completed ? count + 1 : count),
        0
      ),
    };
  });

  if (!todos.length) {
    return null;
  }
  return (
    <footer className='footer'>
      <Counter todosLeft={todosCount - completedCount} />
      <Filters filter={filter} />
      {completedCount >= 1 && <ClearCompleted />}
    </footer>
  );
};

export default Footer;
