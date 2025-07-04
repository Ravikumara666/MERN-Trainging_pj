import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContaxt';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks, clearCompletedTasks } = useContext(TaskContext);

  return (
    <div className="container">
      <ul className="list-group mb-3">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ul>
      
      {tasks.some(task => task.completed) && (
        <div className="text-center">
          <button className="btn btn-danger" onClick={clearCompletedTasks}>
            Clear Completed Tasks
          </button>
        </div>
      )}
    </div>
  );
}
