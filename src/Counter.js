import React from "react";

const Counter = ({ todosLeft }) => {
  return (
    <span className='todo-count'>
      <strong>{todosLeft}</strong>
      {todosLeft === 1 ? " item " : " items "}
      left
    </span>
  );
};

export default Counter;
