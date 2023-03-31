import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
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

  handleSubmit = (event) => {
    alert(`${this.state.name} ${this.state.email} ${this.state.phone}`);
    event.preventDefault();
  };

  render() {
    return (
      <div className="General">
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default General;
