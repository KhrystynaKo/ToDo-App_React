import React from "react";

class Counter extends React.Component {
  render() {
    const itemsLeft = this.props.todo.filter(todo => !todo.completed).length;
    return (
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        {itemsLeft === 1 ? " item " : " items "}
        left
      </span>
    );
  }
}

export default Counter;
