import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TodoList = ({ tasks }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        All tasks: {tasks.filter((task) => !task.isEditing).length} | Completed:{" "}
        {tasks.filter((task) => task.isComplete && !task.isEditing).length} |
        Not completed:{" "}
        {tasks.filter((task) => !task.isComplete && !task.isEditing).length}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={
              (tasks.filter((task) => task.isComplete && !task.isEditing)
                .length *
                100) /
              tasks.filter((task) => !task.isEditing).length
            }
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            (tasks.filter((task) => task.isComplete && !task.isEditing).length *
              100) /
              tasks.filter((task) => !task.isEditing).length
          )}%`}</Typography>
        </Box>
      </Box>
    </>
  );
};
export default TodoList;
