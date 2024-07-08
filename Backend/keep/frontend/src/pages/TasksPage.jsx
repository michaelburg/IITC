import React, { useEffect } from "react";
import NoteForm from "../components/NoteForm";
import TaskList from "../components/TaskList";
import { useTasks } from "../TasksContext";

function TasksPage() {
  const { tasks, error, fetchTasks, updateTaskContext, createTaskContext } =
    useTasks();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleSaveNote = (newNote) => {
    createTaskContext(newNote);
  };

  return (
    <>
      <NoteForm onSave={handleSaveNote} />
      <TaskList tasks={tasks.filter((task) => task.isPinned)} />
      <TaskList tasks={tasks.filter((task) => !task.isPinned)} />
    </>
  );
}

export default TasksPage;
