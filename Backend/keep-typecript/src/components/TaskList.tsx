import React from "react";
import TaskItem from "./TaskItem";
import { Grid, Typography } from "@mui/material";

interface Task {
  _id: string;
  title: string;
  body: string;
  isPinned: boolean;
  todoList: Array<{ _id: string; title: string; isComplete: boolean }>;
}

interface TaskListProps {
  tasks: Task[];
  label: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, label }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={1}>
        {tasks.map((task, index) => (
          <Grid item xs={12} sm={6} md={3} key={task._id}>
            <div style={{ marginBottom: index === tasks.length - 1 ? 0 : 8 }}>
              <TaskItem task={task} />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TaskList;
