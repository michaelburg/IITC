import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

function AppHeader() {
  const navigate = useNavigate();

  const GoLoginPage = () => {
    navigate("/LoginPage");
  };

  const GoRegisterPage = () => {
    navigate("/RegisterPage");
  };

  const GoAboutPage = () => {
    navigate("/AboutPage");
  };

  const GoTasksPage = () => {
    navigate("/TasksPage");
  };

  const GoHomePage = () => {
    navigate("/");
  };

  const logout = () => {};

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer", flexGrow: 1 }}
            onClick={GoHomePage}
          >
            HomePage
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button color="inherit" onClick={GoLoginPage}>
              Login
            </Button>
            <Button color="inherit" onClick={GoRegisterPage}>
              Register
            </Button>
            <Button color="inherit" onClick={GoTasksPage}>
              TasksPage
            </Button>
            <Button color="inherit" onClick={GoAboutPage}>
              AboutPage
            </Button>
            <IconButton color="inherit" onClick={logout}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeader;
