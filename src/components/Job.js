import React from "react";

class Job extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { jobs } = this.props;
    return (
      <ul>
        {jobs.map((job) => {
          if (job.editMode) {
            return (
              <li key={job.id}>
                <form onSubmit={this.props.submit}>
                  <div>
                    <label htmlFor="nameInput">Name of the company: </label>
                    <input
                      onChange={(e) => this.props.name(e, job.id)}
                      value={job.name}
                      type="text"
                      id="nameInput"
                    />
                  </div>

                  <div>
                    <label htmlFor="positionInput">Position: </label>
                    <input
                      onChange={(e) => this.props.position(e, job.id)}
                      value={job.position}
                      type="text"
                      id="positionInput"
                    />
                  </div>

                  <div>
                    <label htmlFor="tasksInput">Tasks: </label>
                    <textarea
                      onChange={(e) => this.props.tasks(e, job.id)}
                      value={job.tasks}
                      id="tasksInput"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="startInput">Start date: </label>
                    <input
                      onChange={(e) => this.props.start(e, job.id)}
                      value={job.startDate}
                      type="date"
                      id="startInput"
                    />
                  </div>

                  <div>
                    <label htmlFor="endInput">Finish date:</label>
                    <input
                      onChange={(e) => this.props.end(e, job.id)}
                      value={job.endDate}
                      type="date"
                      id="endInput"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={() => this.props.changeMode(job.id)}
                  >
                    Submit
                  </button>
                </form>
              </li>
            );
          } else {
            return (
              <li key={job.id}>
                <div>
                  <div>
                    <p>Name of the institution: {job.name}</p>
                  </div>

                  <div>
                    <p>Position: {job.position}</p>
                  </div>

                  <div>
                    <p>Start date: {job.startDate}</p>
                  </div>

                  <div>
                    <p>End date: {job.endDate}</p>
                  </div>
                  <button type="button" onClick={() => this.props.edit(job.id)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => this.props.delete(job.id)}
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

export default Job;
