import React, { Component } from "react";

class Tounter extends Component {
  state = {
    count: 1,
  };

  styles = {
    fontSize: 5,
    fontWeight: "bold",
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <React.Fragment>
        <button className="btn btn-danger btn-sm">
          Increment
          <span styles={this.styles} className={classes}>
            {this.formatCount()}{" "}
          </span>
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 1 ? <h6>One</h6> : count;
  }
}

export default Tounter;
