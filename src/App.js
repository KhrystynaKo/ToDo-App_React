import React from "react";
import "./styles.css";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
import MarcAllTodos from "./MarcAllTodos";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filter: "all",
      markAllComplete: false
    };

    this.markComplete = this.markComplete.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.clearTodo = this.clearTodo.bind(this);
    this.marcAllTodos = this.marcAllTodos.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
    this.showActive = this.showActive.bind(this);
    this.showAll = this.showAll.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.editText = this.editText.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  markComplete(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todos: updateTodos };
    });
  }

  removeTodo(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.filter(todo => todo.id !== id);
      return { todos: updateTodos };
    });
  }

  addTodo(title) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
          editable: false
        }
      ]);
      return { todos: updateTodos };
    });
  }

  clearTodo() {
    this.setState(prevState => {
      const updateTodos = prevState.todos.filter(todo => !todo.completed);
      return { todos: updateTodos };
    });
  }

  marcAllTodos(checked) {
    this.setState(prevState => {
      prevState.todos.map(todo => {
        todo.completed = checked;
        return todo;
      });
      return { markAllComplete: checked };
    });
  }
  showActive() {
    this.setState(prevState => {
      const updateTodos = (prevState.filter = "active");
      return { filter: updateTodos };
    });
  }
  showCompleted() {
    this.setState(prevState => {
      const updateTodos = (prevState.filter = "completed");
      return { filter: updateTodos };
    });
  }
  showAll() {
    this.setState(prevState => {
      const updateTodos = (prevState.filter = "all");
      return { filter: updateTodos };
    });
  }
  editTodo(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.editable = !todo.editable;
        }
        return todo;
      });
      return { editable: updateTodos };
    });
  }
  editText(id, title) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      });
      return { todos: updateTodos };
    });
  }
  cancelEdit() {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.editable === true) {
          todo.editable = !todo.editable;
        }
        return todo;
      });
      return { editable: updateTodos };
    });
  }

  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <section className="main">
          {this.state.todos.length > 0 && (
            <MarcAllTodos
              checkAllComplete={this.state.markAllComplete}
              marcAllTodos={this.marcAllTodos}
            />
          )}
          <TodoList
            todos={this.state.todos}
            markComplete={this.markComplete}
            removeTodo={this.removeTodo}
            activeFilter={this.state.filter}
            editTodo={this.editTodo}
            addTodo={this.addTodo}
            editText={this.editText}
            cancelEdit={this.cancelEdit}
          />
        </section>
        {this.state.todos.length > 0 && (
          <Footer
            todos={this.state.todos}
            clearTodo={this.clearTodo}
            showCompleted={this.showCompleted}
            showActive={this.showActive}
            showAll={this.showAll}
            activeFilter={this.state.filter}
          />
        )}
      </section>
    );
  }
}

export default App;
