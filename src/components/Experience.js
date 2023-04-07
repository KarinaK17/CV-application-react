import React, { useState } from "react";
import uniqid from "uniqid";
import Job from "./Job";

function Experience() {
  const [state, setState] = useState({
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
        name: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
        editMode: true,
      },
    ],
  });

  const handleNameChange = (event, id) => {
    let j = state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, name: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, jobs: j });
  };

  const handlePositionChange = (event, id) => {
    let j = state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, position: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, jobs: j });
  };

  const handleStartChange = (event, id) => {
    let j = state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, startDate: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, jobs: j });
  };

  const handleEndChange = (event, id) => {
    let j = state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, endDate: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, jobs: j });
  };

  const handleTasksChange = (event, id) => {
    let j = state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, tasks: event.target.value };
      } else {
        return x;
      }
    });
    setState({ ...state, jobs: j });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const changeMode = (id) => {
    let j = state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, editMode: false };
      } else {
        return x;
      }
    });
    setState({ ...state, jobs: j });
  };

  const startEdit = (id) => {
    let j = state.jobs.map((x) => {
      if (x.id === id) {
        return { ...x, editMode: true };
      } else {
        return x;
      }
    });
    setState({ ...state, jobs: j });
  };

  const deleteJob = (id) => {
    let j = state.jobs.filter((x) => x.id !== id);
    setState({ ...state, jobs: j });
  };

  const addJob = () => {
    setState({
      jobs: state.jobs.concat(state.job),
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

  return (
    <div className="Experience">
      <div className="section-header">
        <h3>Experience</h3>
        <button onClick={addJob}>Add</button>
      </div>
      <Job
        jobs={state.jobs}
        name={handleNameChange}
        position={handlePositionChange}
        tasks={handleTasksChange}
        start={handleStartChange}
        end={handleEndChange}
        edit={startEdit}
        changeMode={changeMode}
        submit={handleSubmit}
        delete={deleteJob}
      />
    </div>
  );
}

export default Experience;
