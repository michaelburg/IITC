import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button sx={{ color: "white", flexGrow: 1 }}>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </a>
          </Button>
          <Button sx={{ color: "white", flexGrow: 1 }}>
            <a href="/about" style={{ textDecoration: "none", color: "white" }}>
              About
            </a>
          </Button>
          <Button sx={{ color: "white", flexGrow: 1 }}>
            <a href="/todo" style={{ textDecoration: "none", color: "white" }}>
              Todo
            </a>
          </Button>
          <Button sx={{ color: "white", flexGrow: 1 }}>
            <a
              href="/activity"
              style={{ textDecoration: "none", color: "white" }}
            >
              Activity
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
