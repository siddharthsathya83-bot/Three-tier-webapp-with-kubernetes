import React from "react";
import Tasks from "./Tasks";
import "./App.css";

class App extends Tasks {
  state = { tasks: [], currentTask: "", filter: "all" };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { tasks, filter } = this.state;

    const filtered = tasks.filter((t) =>
      filter === "all" ? true : filter === "done" ? t.completed : !t.completed
    );

    const remaining = tasks.filter((t) => !t.completed).length;

    return (
      <div className="App">
        <div className="container">

          <div className="header">
            <div className="header-icon">✅</div>
            <h1>My Tasks</h1>
            <p>Stay organised, get things done</p>
          </div>

          <div className="input-card">
            <form onSubmit={this.handleSubmit} className="input-row">
              <input
                type="text"
                value={this.state.currentTask}
                onChange={this.handleChange}
                placeholder="What needs to be done?"
                required
              />
              <button type="submit" className="add-btn">
                + Add task
              </button>
            </form>
          </div>

          <div className="filters">
            {["all", "active", "done"].map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                onClick={() => this.setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
            <span className="task-count">{remaining} remaining</span>
          </div>

          <div className="task-list">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📋</div>
                <p>No tasks here — add one above!</p>
              </div>
            ) : (
              filtered.map((task) => (
                <div
                  key={task._id}
                  className={`task-card ${task.completed ? "done" : ""}`}
                >
                  <button
                    className={`check-btn ${task.completed ? "checked" : ""}`}
                    onClick={() => this.handleUpdate(task._id)}
                  >
                    {task.completed && <span>✓</span>}
                  </button>
                  <div className={`task-text ${task.completed ? "line_through" : ""}`}>
                    {task.task}
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => this.handleDelete(task._id)}
                  >
                    🗑
                  </button>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    );
  }
}

export default App;