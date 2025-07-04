import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContaxt';

export default function TaskItem({ task, index }) {
  const { removeTask, toggleTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.taskName);

  function handleEdit() {
    if (isEditing && newTask.trim()) {
      editTask(index, newTask);
    }
    setIsEditing(!isEditing);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input
          className="form-control me-2"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.taskName}
        </span>
      )}

      <div className="btn-group">
        <button className="btn btn-sm btn-success me-2" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          className={`btn btn-sm me-2 ${task.completed ? 'btn-success' : 'btn-outline-success'}`}
          onClick={() => toggleTask(index)}
        >
          {task.completed ? 'Done' : 'Mark Done'}
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => removeTask(index)}>
          Delete
        </button>
      </div>
    </li>
  );
}
