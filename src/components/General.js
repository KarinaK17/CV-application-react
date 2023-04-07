import React, { useState } from "react";

function General() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    editMode: true,
  });

  const handleNameChange = (event) => {
    setState({ ...state, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setState({ ...state, email: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setState({ ...state, phone: event.target.value });
  };

  const handlePositionChange = (event) => {
    setState({ ...state, position: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const changeMode = () => {
    setState({ ...state, editMode: false });
  };

  const startEdit = () => {
    setState({ ...state, editMode: true });
  };

  if (state.editMode) {
    return (
      <div className="General">
        <h2> {state.name}</h2>
        <h3>{state.position}</h3>
        <form onSubmit={handleSubmit} id="edit-mode">
          <div>
            <label htmlFor="nameInput">Full name: </label>
            <input
              onChange={handleNameChange}
              value={state.name}
              type="text"
              id="nameInput"
            />
          </div>

          <div>
            <label htmlFor="desiredPositionInput">Desired position: </label>
            <input
              onChange={handlePositionChange}
              value={state.position}
              type="text"
              id="desiredPositionInput"
            />
          </div>

          <div>
            <label htmlFor="emailInput">E-mail: </label>
            <input
              onChange={handleEmailChange}
              value={state.email}
              type="email"
              id="emailInput"
            />
          </div>

          <div>
            <label htmlFor="phoneInput">Phone number:</label>
            <input
              onChange={handlePhoneChange}
              value={state.phone}
              type="tel"
              id="phoneInput"
            />
          </div>
          <button type="submit" onClick={changeMode}>
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="General">
        <h2>{state.name}</h2>
        <h3>{state.position}</h3>
        <div className="general-info">
          <div>
            <p>E-mail: {state.email}</p>
          </div>

          <div>
            <p>Phone number: {state.phone}</p>
          </div>
          <button type="button" onClick={startEdit}>
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default General;
