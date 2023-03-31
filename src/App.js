import "./App.css";
import React, { Component } from "react";
import General from "./components/General";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.name}</h1>
        <h2>{this.props.position}</h2>
        <General />
      </div>
    );
  }
}

export default App;
