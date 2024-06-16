import React, { forwardRef } from "react";
import {
  Button,
  TextField,
  Checkbox,
  Tooltip,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

const TodoItem = forwardRef(
  (
    {
      task,
      toggleTaskCompletion,
      toggleTaskEditing,
      updateTaskTitle,
      saveTask,
      removeTask,
    },
    ref
  ) => {
    return (
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
            <ListItemText
              primary={task.title}
              onClick={() => toggleTaskEditing(task.id)}
              style={{
                cursor: "pointer",
                textDecoration: task.isComplete ? "line-through" : "none",
              }}
            />
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
    );
  }
);

export default TodoItem;
