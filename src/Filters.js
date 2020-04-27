import React from "react";
import { useDispatch } from "react-redux";
import { setfilterTodo } from "./actions/filter";
import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
} from "./constants/filters";

const Filters = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <ul className='filters'>
      <li>
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(setfilterTodo(FILTER_ALL));
          }}
          className={filter === "all" ? "selected" : ""}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(setfilterTodo(FILTER_ACTIVE));
          }}
          className={filter === "active" ? "selected" : ""}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(setfilterTodo(FILTER_COMPLETED));
          }}
          className={filter === "completed" ? "selected" : ""}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default Filters;
