import React from "react";
import { useSelector } from "react-redux";
import { markAllTodos } from "./actions/todos";
import { useDispatch } from "react-redux";

const MarcAllTodos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => {
    return { todos: state.todos };
  });

  const isToggled = !(
    todos.length === todos.filter((item) => item.completed).length
  );

  return (
    <div>
      <input
        id='toggle-all'
        className='toggle-all'
        type='checkbox'
        onChange={() => dispatch(markAllTodos(isToggled))}
      />
      {todos.length >= 1 && (
        <label htmlFor='toggle-all'>Mark all as complete</label>
      )}
    </div>
  );
};

export default MarcAllTodos;
