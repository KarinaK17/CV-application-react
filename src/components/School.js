import React from "react";

class School extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { schools } = this.props;
    return (
      <ul>
        {schools.map((school) => {
          if (school.editMode) {
            return (
              <li key={school.id}>
                <form onSubmit={this.props.submit}>
                  <div>
                    <label htmlFor="nameInput">Name of the institution: </label>
                    <input
                      onChange={(e) => this.props.name(e, school.id)}
                      value={school.name}
                      type="text"
                      id="nameInput"
                    />
                  </div>

                  <div>
                    <label htmlFor="degreeInput">Degree: </label>
                    <input
                      onChange={(e) => this.props.degree(e, school.id)}
                      value={school.degree}
                      type="text"
                      id="degreeInput"
                    />
                  </div>

                  <div>
                    <label htmlFor="startInput">Start date: </label>
                    <input
                      onChange={(e) => this.props.start(e, school.id)}
                      value={school.startDate}
                      type="date"
                      id="startInput"
                    />
                  </div>

                  <div>
                    <label htmlFor="endInput">Finish date:</label>
                    <input
                      onChange={(e) => this.props.end(e, school.id)}
                      value={school.endDate}
                      type="date"
                      id="endInput"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={() => this.props.changeMode(school.id)}
                  >
                    Submit
                  </button>
                </form>
              </li>
            );
          } else {
            return (
              <li key={school.id}>
                <div>
                  <div>
                    <p>Name of the institution: {school.name}</p>
                  </div>

                  <div>
                    <p>Degree: {school.degree}</p>
                  </div>

                  <div>
                    <p>Start date: {school.startDate}</p>
                  </div>

                  <div>
                    <p>End date: {school.endDate}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => this.props.edit(school.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => this.props.delete(school.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default School;
