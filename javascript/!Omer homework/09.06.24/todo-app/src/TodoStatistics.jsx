import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <>
      <p>
        All tasks: {tasks.filter((task) => !task.isEditing).length} | Completed:{" "}
        {tasks.filter((task) => task.isComplete && !task.isEditing).length} |
        Not completed:{" "}
        {tasks.filter((task) => !task.isComplete && !task.isEditing).length}
      </p>
      <progress
        value={
          (tasks.filter((task) => task.isComplete && !task.isEditing).length *
            100) /
          tasks.filter((task) => !task.isEditing).length
        }
        max="100"
      >
        {(tasks.filter((task) => task.isComplete && !task.isEditing).length *
          100) /
          tasks.filter((task) => !task.isEditing).length}
      </progress>
    </>
  );
};
export default TodoList;
