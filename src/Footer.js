import React from "react";
import Counter from "./Counter";
import ClearCompleted from "./ClearCompleted";
import Filters from "./Filters";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Counter todo={this.props.todos} />
        <Filters
          activFilter={this.props.activeFilter}
          showAll={this.props.showAll}
          showCompleted={this.props.showCompleted}
          showActive={this.props.showActive}
        />
        {this.props.todos.filter(todo => todo.completed === true).length >
          0 && <ClearCompleted clearTodo={this.props.clearTodo} />}
      </footer>
    );
  }
}

export default Footer;
