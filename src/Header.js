import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions/todos";

const Header = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <header className='header'>
      <h1>todos</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          name='title'
          className='new-todo'
          placeholder='What needs to be done?'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
