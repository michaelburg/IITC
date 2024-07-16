import React from "react";
import { Container } from "@mui/material";
import NotePlaceholder from "../components/NotePlaceholder";
import TaskList from "../components/TaskList";
import { useTasks } from "../TasksContext";

const TasksPage: React.FC = () => {
  const { tasks } = useTasks();

  const pinnedTasks = tasks.filter((task) => task.isPinned);
  const unpinnedTasks = tasks.filter((task) => !task.isPinned);

  return (
    <Container maxWidth="md">
      <NotePlaceholder />
      {pinnedTasks.length > 0 && <TaskList tasks={pinnedTasks} label="Pinned" />}
      <TaskList tasks={unpinnedTasks} label="Other" />
    </Container>
  );
};

export default TasksPage;
