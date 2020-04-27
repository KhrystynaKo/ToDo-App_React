import React from "react";

class ClearCompleted extends React.Component {
  render() {
    return (
      <button onClick={this.props.clearTodo} className="clear-completed">
        Clear completed
      </button>
    );
  }
}

export default ClearCompleted;
