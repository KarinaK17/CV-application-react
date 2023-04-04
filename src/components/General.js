import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      position: "",
      editMode: true,
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  handlePositionChange = (event) => {
    this.setState({
      position: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  changeMode = () => {
    this.setState({
      editMode: false,
    });
  };

  startEdit = () => {
    this.setState({
      editMode: true,
    });
  };

  render() {
    if (this.state.editMode) {
      return (
        <div className="General">
          <h2> {this.state.name}</h2>
          <h3>{this.state.position}</h3>
          <form onSubmit={this.handleSubmit} id="edit-mode">
            <div>
              <label htmlFor="nameInput">Full name: </label>
              <input
                onChange={this.handleNameChange}
                value={this.state.name}
                type="text"
                id="nameInput"
              />
            </div>

            <div>
              <label htmlFor="desiredPositionInput">Desired position: </label>
              <input
                onChange={this.handlePositionChange}
                value={this.state.position}
                type="text"
                id="desiredPositionInput"
              />
            </div>

            <div>
              <label htmlFor="emailInput">E-mail: </label>
              <input
                onChange={this.handleEmailChange}
                value={this.state.email}
                type="email"
                id="emailInput"
              />
            </div>

            <div>
              <label htmlFor="phoneInput">Phone number:</label>
              <input
                onChange={this.handlePhoneChange}
                value={this.state.phone}
                type="tel"
                id="phoneInput"
              />
            </div>
            <button type="submit" onClick={this.changeMode}>
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="General">
          <h2>{this.state.name}</h2>
          <h3>{this.state.position}</h3>
          <div className="general-info">
            <div>
              <p>E-mail: {this.state.email}</p>
            </div>

            <div>
              <p>Phone number: {this.state.phone}</p>
            </div>
            <button type="button" onClick={this.startEdit}>
              Edit
            </button>
          </div>
        </div>
      );
    }
  }
}

export default General;
