import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getTasks, updateTask, createTask, deleteTask } from "./crud";
import { useNavigate } from "react-router-dom";
import { Task } from "./types";

interface TasksContextType {
  tasks: Task[];
  error: string | null;
  fetchTasks: () => Promise<void>;
  updateTaskContext: (updatedTask: Task) => Promise<void>;
  createTaskContext: (newTask: Task) => Promise<void>;
  deleteTaskContext: (taskToDelete: Task) => Promise<void>;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error: any) {
      if (error.message === "Unauthorized") {
        navigate("/LoginPage");
      } else {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateTaskContext = async (updatedTask: Task) => {
    try {
      await updateTask(updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        )
      );
    } catch (error: any) {
      if (error.message === "Unauthorized") {
        navigate("/LoginPage");
      } else {
        setError(error.message);
      }
    }
  };

  const createTaskContext = async (newTask: Task) => {
    try {
      const createdTask = await createTask(newTask);
      setTasks((prevTasks) => [...prevTasks, createdTask]);
    } catch (error: any) {
      if (error.message === "Unauthorized") {
        navigate("/LoginPage");
      } else {
        setError(error.message);
      }
    }
  };

  const deleteTaskContext = async (taskToDelete: Task) => {
    try {
      await deleteTask(taskToDelete);
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== taskToDelete._id)
      );
    } catch (error: any) {
      if (error.message === "Unauthorized") {
        navigate("/LoginPage");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        error,
        fetchTasks,
        updateTaskContext,
        createTaskContext,
        deleteTaskContext,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
