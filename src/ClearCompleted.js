import React from "react";
import { useDispatch } from "react-redux";
import { clearCompleteTodos } from "./actions/todos";

const ClearCompleted = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(clearCompleteTodos())}
      className='clear-completed'
    >
      Clear completed
    </button>
  );
};

export default ClearCompleted;
