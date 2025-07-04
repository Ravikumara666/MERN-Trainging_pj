import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskContext } from '../context/TaskContaxt';

export default function TaskInput() {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState("");

  function handleOnsubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <div className="container my-4">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-success text-white text-center fs-4">
          Task Manager
        </div>
        <div className="card-body bg-light">
          <form onSubmit={handleOnsubmit} className="row g-2 align-items-center justify-content-center">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Add the task..."
                value={task}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 text-md-start text-center">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
