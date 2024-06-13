import React from "react";
import TodoItem from "./TodoItem";

const TodoList = React.forwardRef(
  (
    {
      tasks,
      toggleTaskCompletion,
      toggleTaskEditing,
      updateTaskTitle,
      saveTask,
      removeTask,
    },
    ref
  ) => {
    return (
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            ref={ref}
            toggleTaskCompletion={toggleTaskCompletion}
            toggleTaskEditing={toggleTaskEditing}
            updateTaskTitle={updateTaskTitle}
            saveTask={saveTask}
            removeTask={removeTask}
          />
        ))}
      </ul>
    );
  }
);
export default TodoList;
