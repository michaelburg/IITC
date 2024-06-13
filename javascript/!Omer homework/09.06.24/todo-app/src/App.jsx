import { useState, useEffect, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoStatistics from "./TodoStatistics";
import Filter from "./Filter";

function generateId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getData(filter = "") {
  const apiUrl = `http://localhost:3000/tasks?title_like=${filter}`;
  try {
    const response = await fetch(apiUrl);
    return response.json();
  } catch {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const filterRef = {
    name: useRef(null),
    complete: useRef(false),
    all: useRef(true),
    uncomplete: useRef(false),
  };

  useEffect(() => {
    async function fetchTasks() {
      const tasksData = await getData();
      setTasks(tasksData);
    }
    fetchTasks();
  }, []);

  useEffect(() => {
    console.log("Updated tasks:", tasks);
  }, [tasks]);

  useEffect(() => {
    console.log("hello");
  }, []);

  function toggleTaskCompletion(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  }

  function removeTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleTaskEditing(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(updatedTasks);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }

  function updateTaskTitle(newTitle, id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  }

  function addNewTask() {
    const newTask = {
      id: generateId(10),
      title: "",
      isComplete: false,
      isEditing: true,
    };
    setTasks([...tasks, newTask]);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }

  function saveTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isEditing: false } : task
    );
    setTasks(updatedTasks);
  }

  async function filterTask() {
    let filters = filterRef.name.current.value || "";

    if (filterRef.complete.current.checked) {
      filters += "&isComplete=true";
    } else if (filterRef.uncomplete.current.checked) {
      filters += "&isComplete=false";
    }
    const tasksData = await getData(filters);
    setTasks(tasksData);
  }

  return (
    <>
      <h1>To-Do App</h1>
      {tasks.length === 0 && <p>No tasks found</p>}
      <button onClick={addNewTask}>Create new task</button>
      <TodoStatistics tasks={tasks} />
      <Filter filterTask={filterTask} ref={filterRef} />
      <TodoList
        tasks={tasks}
        ref={inputRef}
        toggleTaskCompletion={toggleTaskCompletion}
        toggleTaskEditing={toggleTaskEditing}
        updateTaskTitle={updateTaskTitle}
        saveTask={saveTask}
        removeTask={removeTask}
      />
    </>
  );
}

export default App;
