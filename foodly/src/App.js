import React, { Component } from "react";
import Foods from "./components/foods";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Foods />
      </main>
    );
  }
}

export default App;
