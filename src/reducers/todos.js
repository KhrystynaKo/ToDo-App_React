import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  CLEAR_COMPLETED_TODOS,
  MARK_ALL_TODO
} from "../constants/actionTypes";

const todoApp = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
          editing: false
        }
      ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      );
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              editing: !todo.editing
            }
          : todo
      );
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              title: action.title
            }
          : todo
      );

    case CLEAR_COMPLETED_TODOS:
      return state.filter(todo => !todo.completed);

    case MARK_ALL_TODO:
      return state.map(todo =>
        action.isToggled
          ? {
              ...todo,
              completed: true
            }
          : {
              ...todo,
              completed: false
            }
      );

    default:
      return state;
  }
};

export default todoApp;
