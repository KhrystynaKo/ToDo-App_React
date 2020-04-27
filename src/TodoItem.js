import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo, editTodo, toggleTodo } from "./actions/todos";

const TodoItem = ({ title, id, editing, completed }) => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(title);

  return (
    <li className={completed ? "completed" : ""}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleTodo(id))}
        />
        {editing ? (
          <form
            onBlur={() => dispatch(editTodo(id))}
            id={id}
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(updateTodo(newTitle, id));
              dispatch(editTodo(id));
            }}
          >
            <input
              autoFocus
              onChange={(event) => setNewTitle(event.target.value)}
              id={id}
              className='editing'
              defaultValue={title}
            />
          </form>
        ) : (
          <label onDoubleClick={() => dispatch(editTodo(id))}>{title}</label>
        )}

        <button className='destroy' onClick={() => dispatch(removeTodo(id))} />
      </div>
    </li>
  );
};

export default TodoItem;
