import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  CircularProgress,
  Button,
  ListItem,
  Tooltip,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
} from "@mui/material";

async function getTask(id) {
  const response = await fetch(`http://localhost:3000/tasks/${id}`);
  return response.json();
}

async function deleteTask(id) {
  const response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}

const TodoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = await getTask(id);
        setTask(taskData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      const success = await deleteTask(id);
      if (success) {
        navigate(-1);
      } else {
        alert("Failed to delete the task");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error deleting the task");
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  if (!task) {
    return <Typography>No task found</Typography>;
  }

  return (
    <>
      <Typography variant="h4">Todo Details</Typography>
      <Typography variant="h6">ID: {task.id}</Typography>
      <Typography variant="h6">Title: {task.title}</Typography>
      <Typography variant="h6">Category: {task.category}</Typography>
      <Typography variant="h6">
        Completed: {task.isComplete ? "Yes" : "No"}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        onClick={handleDelete}
        style={{ marginLeft: 8 }}
      >
        Delete
      </Button>

      <ListItem key={task.id} divider>
        <Tooltip title={task.isComplete ? "Uncompleted" : "Completed"}>
          <Checkbox
            size="small"
            checked={task.isComplete}
            onChange={() => toggleTaskCompletion(task.id)}
          />
        </Tooltip>
        {!task.isEditing ? (
          <>
            <Link to={`/TodoDetailsPage/${task.id}`}>
              <ListItemText
                primary={task.title}
                onClick={() => toggleTaskEditing(task.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: task.isComplete ? "line-through" : "none",
                }}
              />
            </Link>
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                color="primary"
                onClick={() => toggleTaskEditing(task.id)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeTask(task.id)}
                style={{ marginLeft: 8 }}
              >
                Delete
              </Button>
            </ListItemSecondaryAction>
          </>
        ) : (
          <>
            <TextField
              id={`task-${task.id}`}
              label="New task title"
              variant="standard"
              inputRef={ref}
              value={task.title}
              onChange={(e) => updateTaskTitle(e.target.value, task.id)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => saveTask(task.id)}
              disabled={task.title === ""}
              style={{ marginLeft: 8 }}
            >
              Save
            </Button>
          </>
        )}
      </ListItem>
    </>
  );
};

export default TodoDetails;
