import React, { useState, useEffect, useRef } from "react";
import { useTasks } from "../TasksContext";
import Modal from "react-modal";

import {
  TextField,
  Box,
  Checkbox,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "500px",
    maxHeight: "400px",
    fontFamily: "Google Sans, Roboto, Arial, sans-serif",
    fontSize: "16px",
  },
};

Modal.setAppElement("#root");

interface Todo {
  _id: string;
  title: string;
  isComplete: boolean;
}

interface Task {
  _id: string;
  title: string;
  body: string;
  isPinned: boolean;
  todoList: Todo[];
}

interface TaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  task?: Task;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onRequestClose, task }) => {
  const { updateTaskContext } = useTasks();
  const [title, setTitle] = useState(task?.title || "");
  const [body, setBody] = useState(task?.body || "");
  const [todoList, setTodoList] = useState<Todo[]>(task?.todoList || []);
  const [isExpanded, setIsExpanded] = useState(false);
  const todoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitle(task?.title || "");
    setBody(task?.body || "");
    setTodoList(task?.todoList || []);
  }, [task]);

  const handleSaveTask = () => {
    
    if (!task) return;
    
    const updatedTask = {
      ...task,
      title,
      body,
      todoList,
    };
    updateTaskContext(updatedTask);
    onRequestClose();
  };

  const handleAddTodo = () => {
    if (todoInputRef.current?.value.trim() === "") return;

    const newTodo = {
      _id: new Date().toISOString(),
      title: todoInputRef.current?.value || "",
      isComplete: false,
    };

    setTodoList([...todoList, newTodo]);
    todoInputRef.current!.value = "";
  };

  const handleToggleComplete = (todoId: string) => {
    const updatedTodoList = todoList.map((todo) =>
      todo._id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodoList(updatedTodoList);
  };

  const handleRemoveTodo = (todoId: string) => {
    const updatedTodoList = todoList.filter((todo) => todo._id !== todoId);
    setTodoList(updatedTodoList);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const incompleteTodos = todoList.filter((todo) => !todo.isComplete);
  const completeTodos = todoList.filter((todo) => todo.isComplete);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onAfterClose={handleSaveTask}
      style={customStyles}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField
            variant="standard"
            placeholder="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: "20px",
                fontWeight: 500,
                fontFamily: "Roboto, Arial, sans-serif",
              },
            }}
          />
          <IconButton onClick={onRequestClose}>
            <ClearIcon />
          </IconButton>
        </Box>
        <TextField
          variant="standard"
          placeholder="Take a note..."
          fullWidth
          multiline
          value={body}
          onChange={(e) => setBody(e.target.value)}
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Roboto, Arial, sans-serif",
            },
          }}
        />
        <Divider />
        {incompleteTodos.map((todo) => (
          <Box
            key={todo._id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 1,
            }}
          >
            <Checkbox
              checked={todo.isComplete}
              onChange={() => handleToggleComplete(todo._id)}
            />
            <TextField
              variant="standard"
              value={todo.title}
              InputProps={{
                disableUnderline: true,
              }}
              fullWidth
            />
            <IconButton onClick={() => handleRemoveTodo(todo._id)}>
              <ClearIcon />
            </IconButton>
          </Box>
        ))}
        {isExpanded &&
          completeTodos.map((todo) => (
            <Box
              key={todo._id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
              }}
            >
              <Checkbox
                checked={todo.isComplete}
                onChange={() => handleToggleComplete(todo._id)}
              />
              <TextField
                variant="standard"
                value={todo.title}
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
              />
              <IconButton onClick={() => handleRemoveTodo(todo._id)}>
                <ClearIcon />
              </IconButton>
            </Box>
          ))}
        {completeTodos.length > 0 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              {completeTodos.length} completed items
            </Typography>
            <IconButton onClick={handleExpandClick}>
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton onClick={handleAddTodo}>
            <AddIcon />
          </IconButton>
          <TextField
            placeholder="New todo"
            inputRef={todoInputRef}
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default TaskModal;
