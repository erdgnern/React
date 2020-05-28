// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: ["tag1", "tag2", "tag3"],
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
//         <button className="btn btn-secondary btn-sm">Increment</button>
//         <ul>
//           {this.state.tags.map((tag) => (
//             <li key={tag}> {tag} </li>
//           ))}
//         </ul>
//       </React.Fragment>
//     );
//   }

//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? <h2>Zero</h2> : count;
//   }
// }

// export default Counter;

/////////////////////////////////////////////////////////////////////

////////// Conditional Rendering////////////

// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: [],
//   };

//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

//     return (
//       <ul>
//         {this.state.tags.map((tag) => (
//           <li key={tag}> {tag}</li>
//         ))}
//       </ul>
//     );
//   }
//   render() {
//     return (
//       <React.Fragment>
//         {this.state.tags.length === 0 && "Please create a new tag!"}
//         {this.renderTags()}
//       </React.Fragment>
//     );
//   }
// }

// export default Counter;

////////////////////////////////////////////////////////

//////// Updating the State or Incrementing

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h2>Zero</h2> : count;
  }
}

export default Counter;
