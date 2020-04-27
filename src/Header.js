import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title.trim()) {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.title}
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}

export default Header;
