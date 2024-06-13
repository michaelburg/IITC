import React, { forwardRef } from "react";

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
      <li key={task.id}>
        <input
          type="checkbox"
          id={task.id}
          checked={task.isComplete}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        {!task.isEditing ? (
          <>
            <label htmlFor={task.id}>{task.title}</label>
            <button onClick={() => toggleTaskEditing(task.id)}>Edit</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="New task title"
              ref={ref}
              value={task.title}
              onChange={(e) => updateTaskTitle(e.target.value, task.id)}
            />
            <button
              onClick={() => saveTask(task.id)}
              disabled={task.title === ""}
            >
              Save
            </button>
          </>
        )}
        <button onClick={() => removeTask(task.id)}>Delete</button>
      </li>
    );
  }
);
export default TodoItem;
