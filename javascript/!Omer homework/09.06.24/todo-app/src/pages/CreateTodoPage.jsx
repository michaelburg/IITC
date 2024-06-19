import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const navigate = useNavigate();

  function handleTaskTitleChange(event) {
    setTaskTitle(event.target.value);
  }
  function handleTaskCategoryChange(event) {
    setTaskCategory(event.target.value);
  }

  async function saveTask() {
    if (taskTitle.trim() === "") {
      alert("Task title cannot be empty");
      return;
    }

    const newTask = {
      title: taskTitle,
      isComplete: false,
      category: taskCategory,
    };

    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        navigate(-1); // Navigate back to the previous page
      } else {
        console.error("Failed to save the task");
        alert("Failed to save the task");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving the task");
    }
  }

  return (
    <>
      <TextField
        label="New task title"
        variant="standard"
        value={taskTitle}
        onChange={handleTaskTitleChange}
      />
      <TextField
        label="New task category"
        variant="standard"
        value={taskCategory}
        onChange={handleTaskCategoryChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={saveTask}
        style={{ marginLeft: 8 }}
      >
        Save
      </Button>
    </>
  );
}

export default Create;
