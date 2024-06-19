import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  menuItemClasses,
} from "@mui/material";
import React from "react";

function SideBarTodo() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <h1>Welcome to my shitty app</h1>
    </Drawer>
  );
}

export default SideBarTodo;
