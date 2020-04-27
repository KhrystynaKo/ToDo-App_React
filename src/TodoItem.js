import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      title: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title) {
      this.setState({ title: "" });
      this.props.editText(this.props.todo.id, this.state.title);

      if (this.props.todo.editable) {
        this.props.todo.editable = false;
        this.setState({ title: event.target.value });
      }
    }
  }

  render() {
    const classes = [];

    if (this.props.todo.completed) {
      classes.push("completed");
    }

    if (this.props.activeFilter === "active") {
      this.props.todo.completed ? classes.push("hidden") : classes.push("");
    }

    if (this.props.activeFilter === "completed") {
      this.props.todo.completed ? classes.push("") : classes.push("hidden");
    }

    return (
      <li
        onDoubleClick={this.props.editTodo.bind(this, this.props.todo.id)}
        className={classes.join(" ")}
      >
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={this.props.todo.completed}
            onChange={this.props.markComplete.bind(this, this.props.todo.id)}
          />
          {this.props.todo.editable === true ? (
            <form onSubmit={this.handleSubmit} onBlur={this.props.cancelEdit}>
              <input
                autoFocus
                onChange={this.onChange}
                id={this.props.todo.id}
                className='editing'
                defaultValue={this.props.todo.title}
              />
            </form>
          ) : (
            <label>{this.props.todo.title}</label>
          )}

          <button
            className='destroy'
            onClick={this.props.removeTodo.bind(this, this.props.todo.id)}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
