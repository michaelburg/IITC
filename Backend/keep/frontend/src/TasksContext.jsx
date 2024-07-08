import React, { createContext, useContext, useState, useEffect } from "react";
import { getTasks, updateTask, createTask } from "./CRUD";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateTaskContext = async (updatedTask) => {
    try {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        )
      );
      await updateTask(updatedTask);
    } catch (error) {
      setError(error.message);
    }
  };

  const createTaskContext = async (newTask) => {
    try {
      const createdTask = await createTask(newTask);
      setTasks((prevTasks) => [...prevTasks, createdTask]);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <TasksContext.Provider
      value={{ tasks, error, fetchTasks, updateTaskContext, createTaskContext }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
