import React, { Component } from "react";
import uniqid from "uniqid";
import Job from "./Job";

const section = {
  backgroundColor: "grey",
  borderBottom: "solid 2px black",
};

export class Experience extends Component {
  constructor(props) {
    super();
    this.state = {
      job: {
        name: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
        editMode: true,
      },
      jobs: [
        {
          name: "Apple",
          position: "web-developer",
          tasks: "write code",
          startDate: "",
          endDate: "",
          id: uniqid(),
          editMode: true,
        },
      ],
    };
  }

  handleNameChange = (event, id) => {
    let j = this.state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, name: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      jobs: j,
    });
  };

  handlePositionChange = (event, id) => {
    let j = this.state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, position: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      jobs: j,
    });
  };

  handleStartChange = (event, id) => {
    let j = this.state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, startDate: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      jobs: j,
    });
  };

  handleEndChange = (event, id) => {
    let j = this.state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, endDate: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      jobs: j,
    });
  };

  handleTasksChange = (event, id) => {
    let j = this.state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, tasks: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      jobs: j,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  changeMode = (id) => {
    let j = this.state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, editMode: false };
      } else {
        return x;
      }
    });
    this.setState({
      jobs: j,
    });
    alert("change mode");
  };

  startEdit = (id) => {
    let j = this.state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, editMode: true };
      } else {
        return x;
      }
    });
    this.setState({
      jobs: j,
    });
    alert("change mode");
  };

  deleteJob = (id) => {
    let j = this.state.jobs.filter((x) => x.id !== id);
    this.setState({
      jobs: j,
    });
  };

  addJob = () => {
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        name: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
        editMode: true,
      },
    });
  };

  render() {
    return (
      <div className="Experience">
        <h3 style={section}>Experience</h3>
        <button onClick={this.addJob}>Add</button>
        <Job
          jobs={this.state.jobs}
          name={this.handleNameChange}
          position={this.handlePositionChange}
          tasks={this.handleTasksChange}
          start={this.handleStartChange}
          end={this.handleEndChange}
          edit={this.startEdit}
          changeMode={this.changeMode}
          submit={this.handleSubmit}
          delete={this.deleteJob}
        />
      </div>
    );
  }
}

export default Experience;
