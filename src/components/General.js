import React, { Component } from "react";

const heading = {
  color: "red",
  backgroundColor: "blue",
};

const section = {
  backgroundColor: "grey",
  borderTop: "solid 2px black",
  borderBottom: "solid 2px black",
};

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
    console.log(event.target.value);
    console.log(this);
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
    // this.setState(
    //   {
    //     editMode: false,
    //   },
    //   () => {
    //     console.log(this.state.editMode, "sjdbhsj");
    //   }
    // );
    // console.log(this.state.editMode);
    alert(
      `${this.state.name} ${this.state.email} ${this.state.phone} ${this.state.editMode}`
    );
    event.preventDefault();
  };

  changeMode = () => {
    this.setState(
      {
        editMode: false,
      },
      () => {
        console.log(this.state.editMode, "sjdbhsj");
      }
    );
    console.log(this.state.editMode);
    alert(
      `${this.state.name} ${this.state.email} ${this.state.phone} ${this.state.editMode}`
    );
  };

  startEdit = () => {
    this.setState(
      {
        editMode: true,
      },
      () => {
        console.log(this.state.editMode, "sjdbhsj");
      }
    );
    console.log(this.state.editMode);
    alert(
      `${this.state.name} ${this.state.email} ${this.state.phone} ${this.state.editMode}`
    );
  };

  render() {
    if (this.state.editMode) {
      return (
        <div className="General">
          <h1 style={heading}> {this.state.name}</h1>
          <h2>{this.state.position}</h2>
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
            {/* <button type="button" onClick={this.startEdit}>
              Edit
            </button> */}
            <button type="submit" onClick={this.changeMode}>
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="General">
          <h1 style={heading}>{this.state.name}</h1>
          <h2>{this.state.position}</h2>
          <div style={section}>
            <div>
              <p>Full name: {this.state.name}</p>
            </div>

            <div>
              <p>Desired position: {this.state.position}</p>
            </div>

            <div>
              <p>E-mail: {this.state.email}</p>
            </div>

            <div>
              <p>Phone number: {this.state.phone}</p>
            </div>
            <button type="button" onClick={this.startEdit}>
              Edit
            </button>
            {/* <button type="submit" onClick={this.changeMode}>
              Submit
            </button> */}
          </div>
        </div>
      );
    }
  }
}

export default General;
