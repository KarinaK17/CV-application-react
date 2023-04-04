import React from "react";

class Job extends React.Component {
  render() {
    const { jobs } = this.props;
    return (
      <ul>
        {jobs.map((job) => {
          if (job.editMode) {
            return (
              <li key={job.id} id="edit-mode">
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
                      type="month"
                      id="startInput"
                    />
                  </div>

                  <div>
                    <label htmlFor="endInput">End date:</label>
                    <input
                      onChange={(e) => this.props.end(e, job.id)}
                      value={job.endDate}
                      type="month"
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
                    <p>
                      Name of the institution: <b>{job.name}</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      Position: <b>{job.position}</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      Tasks: <b>{job.tasks}</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      Start date: <b>{job.startDate}</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      End date: <b>{job.endDate}</b>
                    </p>
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
