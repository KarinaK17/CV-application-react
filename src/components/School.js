import React from "react";

class School extends React.Component {
  render() {
    const { schools } = this.props;
    return (
      <ul>
        {schools.map((school) => {
          if (school.editMode) {
            return (
              <li key={school.id} id="edit-mode">
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
                      type="month"
                      id="startInput"
                    />
                  </div>

                  <div>
                    <label htmlFor="endInput">Finish date:</label>
                    <input
                      onChange={(e) => this.props.end(e, school.id)}
                      value={school.endDate}
                      type="month"
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
                    <p>
                      Name of the institution: <b>{school.name}</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      Degree: <b>{school.degree}</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      Start date: <b>{school.startDate}</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      End date: <b>{school.endDate}</b>
                    </p>
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
