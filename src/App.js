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
        <header>
          <h1>My CV</h1>
        </header>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
