import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { taskName, completed: false }]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;

  setTasks(updatedTasks);
};


  const editTask = (index, newTaskName) => {
         const updatedTasks = [...tasks];
         updatedTasks[index].taskName = newTaskName; 
        setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
        setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <TaskContext.Provider
      value={{tasks,addTask,removeTask,toggleTask,editTask,clearCompletedTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}
