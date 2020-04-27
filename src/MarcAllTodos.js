import React from "react";

class MarcAllTodos extends React.Component {
  render() {
    return (
      <div>
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          ref={input => {
            this.marcTodo = input;
          }}
          checked={this.props.checkAllComplete}
          onChange={() => this.props.marcAllTodos(this.marcTodo.checked)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}

export default MarcAllTodos;
