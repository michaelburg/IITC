import React, { useState } from "react";
import { Box, Checkbox, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

function NoteForm({ onSave }) {
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    body: "",
    todoList: [],
    isPinned: false,
  });

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), title: "", completed: false };
    setNote((prevNote) => ({
      ...prevNote,
      todoList: [...prevNote.todoList, newTodo],
    }));
  };

  const handleTodoChange = (id, value) => {
    const updatedTodos = note.todoList.map((todo) =>
      todo.id === id ? { ...todo, title: value } : todo
    );
    setNote((prevNote) => ({
      ...prevNote,
      todoList: updatedTodos,
    }));
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = note.todoList.filter((todo) => todo.id !== id);
    setNote((prevNote) => ({
      ...prevNote,
      todoList: filteredTodos,
    }));
  };

  const handleBlur = () => {
    onSave(note); // Call onSave function to save the note
    setExpanded(false); // Close the form after saving
  };

  return (
    <Box
      sx={{
        minHeight: "28px",
        maxHeight: "600px",
        fontFamily: "Google Sans, Roboto, Arial, sans-serif",
        fontSize: "16px",
      }}
    >
      {!expanded ? (
        <TextField
          onClick={handleExpand}
          fullWidth
          variant="outlined"
          placeholder="Take a note..."
        />
      ) : (
        <>
          <TextField
            fullWidth
            name="title"
            value={note.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Title"
            margin="normal"
            InputProps={{
              sx: {
                fontSize: "22px", // Title font size
              },
            }}
          />
          <TextField
            fullWidth
            name="body"
            value={note.body}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Body"
            multiline
            rows={4}
            margin="normal"
          />

          {note.todoList.map((todo) => (
            <Box key={todo.id} display="flex" alignItems="center">
              <Checkbox checked={todo.completed} />
              <TextField
                fullWidth
                value={todo.title}
                onChange={(e) => handleTodoChange(todo.id, e.target.value)}
                onBlur={handleBlur}
                placeholder="Todo"
                margin="normal"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    "& fieldset": { border: "none" }, // Remove default border
                    "&:hover": {
                      borderTop: "1px solid #ccc",
                      borderBottom: "1px solid #ccc",
                    },
                  },
                }}
              />
              <IconButton
                aria-label="Delete Todo"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <ClearIcon />
              </IconButton>
            </Box>
          ))}

          <IconButton aria-label="Add Todo" onClick={handleAddTodo}>
            <AddIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
}

export default NoteForm;
