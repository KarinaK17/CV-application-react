import React, { useState } from "react";
import uniqid from "uniqid";
import School from "./School";

function Education() {
  const [state, setState] = useState({
    school: {
      name: "",
      degree: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
      editMode: true,
    },
    schools: [
      {
        name: "",
        degree: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
        editMode: true,
      },
    ],
  });

  const handleNameChange = (event, id) => {
    let s = state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, name: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, schools: s });
  };

  const handleDegreeChange = (event, id) => {
    let s = state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, degree: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, schools: s });
  };

  const handleStartChange = (event, id) => {
    let s = state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, startDate: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, schools: s });
  };

  const handleEndChange = (event, id) => {
    let s = state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, endDate: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, schools: s });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const changeMode = (id) => {
    let s = state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, editMode: false };
      } else {
        return x;
      }
    });
    setState({ ...state, schools: s });
  };

  const startEdit = (id) => {
    let s = state.schools.map((x) => {
      if (x.id === id) {
        return { ...x, editMode: true };
      } else {
        return x;
      }
    });
    setState({ ...state, schools: s });
  };

  const deleteSchool = (id) => {
    let s = state.schools.filter((x) => x.id !== id);
    setState({ ...state, schools: s });
  };

  const addSchool = () => {
    setState({
      schools: state.schools.concat(state.school),
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

  return (
    <div className="Education">
      <div className="section-header">
        <h3>Education</h3>
        <button onClick={addSchool}>Add</button>
      </div>
      <School
        schools={state.schools}
        name={handleNameChange}
        degree={handleDegreeChange}
        start={handleStartChange}
        end={handleEndChange}
        edit={startEdit}
        changeMode={changeMode}
        submit={handleSubmit}
        delete={deleteSchool}
      />
    </div>
  );
}

export default Education;
