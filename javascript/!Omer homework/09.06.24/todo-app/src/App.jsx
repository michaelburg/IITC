import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoStatistics from "./TodoStatistics";
import Filter from "./Filter";
import AppBarComponent from "./appBar";
import { Button, Typography } from "@mui/material";

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
  const apiUrl = `http://localhost:3000/tasks?${filter}`;
  const response = await fetch(apiUrl);
  return response.json();
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const inputRef = useRef(null);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasksData = await getData();
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    fetchTasks();
  }, []);

  useEffect(() => {
    const uniqueCategories = [...new Set(tasks.map((task) => task.category))];
    const categoriesWithSelected = uniqueCategories.map((category) => ({
      id: category,
      selected: false,
    }));
    setCategories(categoriesWithSelected);
  }, [tasks]);

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

  async function filterTask() {
    let filters = [];
    if (filterText) {
      filters.push(`title_like=${filterText}`);
    }
    if (filterStatus === "Completed") {
      filters.push("isComplete=true");
    } else if (filterStatus === "Not Completed") {
      filters.push("isComplete=false");
    }
    const query = filters.join("&");
    try {
      const tasksData = await getData(query);
      setTasks(tasksData);
    } catch (error) {
      console.error("Error filtering tasks:", error);
    }
  }

  function categoryFilter(selectedCategory) {
    const updatedCategories = categories.map((category) =>
      category.id === selectedCategory
        ? { ...category, selected: !category.selected }
        : category
    );
    setCategories(updatedCategories);
  }

  function saveTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isEditing: false } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <AppBarComponent />
      <Typography variant="h4" gutterBottom>
        To-Do App
      </Typography>
      {tasks.length === 0 && <p>No tasks found</p>}
      <Button variant="contained" onClick={addNewTask}>
        Create new task
      </Button>
      <TodoStatistics tasks={tasks} />
      <Filter
        filterText={filterText}
        setFilterText={setFilterText}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterTask={filterTask}
        categories={categories}
        categoryFilter={categoryFilter}
      />
      <TodoList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        toggleTaskEditing={toggleTaskEditing}
        updateTaskTitle={updateTaskTitle}
        saveTask={saveTask}
        removeTask={removeTask}
        inputRef={inputRef}
      />
    </>
  );
}

export default App;
