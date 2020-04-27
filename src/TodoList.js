import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            markComplete={this.props.markComplete}
            removeTodo={this.props.removeTodo}
            activeFilter={this.props.activeFilter}
            editTodo={this.props.editTodo}
            edit={this.props.editable}
            addTodo={this.props.addTodo}
            editText={this.props.editText}
            cancelEdit={this.props.cancelEdit}
            todos={this.props.todos}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
