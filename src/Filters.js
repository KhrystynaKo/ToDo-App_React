import React from "react";

class Filters extends React.Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <button
            onClick={this.props.showAll}
            className={this.props.activFilter === "all" ? "selected" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={this.props.showActive}
            className={this.props.activFilter === "active" ? "selected" : ""}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={this.props.showCompleted}
            className={this.props.activFilter === "completed" ? "selected" : ""}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default Filters;
