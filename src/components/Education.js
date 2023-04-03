import React, { Component } from "react";
import uniqid from "uniqid";
import School from "./School";

const section = {
  backgroundColor: "grey",
  borderBottom: "solid 2px black",
};

export class Education extends Component {
  constructor(props) {
    super();
    this.state = {
      school: {
        name: "",
        degree: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
        editMode: true,
      },
      schools: [],
    };
  }

  handleNameChange = (event, id) => {
    let s = this.state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, name: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      schools: s,
    });
  };

  handleDegreeChange = (event, id) => {
    let s = this.state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, degree: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      schools: s,
    });
  };

  handleStartChange = (event, id) => {
    let s = this.state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, startDate: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      schools: s,
    });
  };

  handleEndChange = (event, id) => {
    let s = this.state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, endDate: event.target.value };
      } else {
        return x;
      }
    });
    this.setState({
      schools: s,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  changeMode = (id) => {
    let s = this.state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, editMode: false };
      } else {
        return x;
      }
    });
    this.setState({
      schools: s,
    });
    alert("change mode");
  };

  startEdit = (id) => {
    let s = this.state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, editMode: true };
      } else {
        return x;
      }
    });
    this.setState({
      schools: s,
    });
    alert("change mode");
  };

  deleteSchool = (id) => {
    let s = this.state.schools.filter((x) => x.id !== id);
    this.setState({
      schools: s,
    });
  };

  addSchool = () => {
    this.setState({
      schools: this.state.schools.concat(this.state.school),
      school: {
        name: "",
        degree: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
        editMode: true,
      },
    });
  };

  render() {
    return (
      <div className="Education">
        <h3 style={section}>Education</h3>
        <button onClick={this.addSchool}>Add</button>
        <School
          schools={this.state.schools}
          name={this.handleNameChange}
          degree={this.handleDegreeChange}
          start={this.handleStartChange}
          end={this.handleEndChange}
          edit={this.startEdit}
          changeMode={this.changeMode}
          submit={this.handleSubmit}
          delete={this.deleteSchool}
        />
      </div>
    );
  }
}

export default Education;
