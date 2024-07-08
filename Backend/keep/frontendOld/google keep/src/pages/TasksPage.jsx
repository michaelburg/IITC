import React, { useState, useEffect } from "react";
import { getTasks } from "../CRUD";

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTasks();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}

export default TasksPage;
