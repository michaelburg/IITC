import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button sx={{ color: "white", flexGrow: 1 }}>
            <Link
              to="/HomePage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
          </Button>
          <Button sx={{ color: "white", flexGrow: 1 }}>
            <Link
              to="/TodoPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Todo
            </Link>
          </Button>
          <Button sx={{ color: "white", flexGrow: 1 }}>
            <Link
              to="/CreateTodoPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Create Todo
            </Link>
          </Button>

          <Button sx={{ color: "white", flexGrow: 1 }}>
            <Link
              to="/NotFoundPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              NotFoundPage
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
