import "./App.css";
import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>My CV</h1>

        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
