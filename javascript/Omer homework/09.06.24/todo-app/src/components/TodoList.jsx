import React from "react";
import TodoItem from "./TodoItem";
import { List } from "@mui/material";

const TodoList = ({
  tasks,
  toggleTaskCompletion,
  toggleTaskEditing,
  updateTaskTitle,
  saveTask,
  removeTask,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          toggleTaskEditing={toggleTaskEditing}
          updateTaskTitle={updateTaskTitle}
          saveTask={saveTask}
          removeTask={removeTask}
        />
      ))}
    </List>
  );
};

export default TodoList;
