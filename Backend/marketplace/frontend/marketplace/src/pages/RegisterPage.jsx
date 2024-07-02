import React, { useState, useContext } from "react";
import { Button, Container, Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { register } from "../CRUD";
import { LoggedInUser } from "../App";

function RegisterPage() {
  const [userData, setUserData] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUser);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const verify = async () => {
    const res = await register(
      userData.username,
      userData.Password,
      userData.FirstName,
      userData.LastName
    );
    if (res.token === undefined) {
      handleInvalidRegister();
    } else {
      localStorage.setItem("user", JSON.stringify(res));
      setLoggedInUser(res);
      navigate("/MarketPlace");
    }
  };

  const handleInvalidRegister = () => {
    alert("Registration failed. Please try again.");
  };

  const handleLoginClick = () => {
    navigate("/LoginPage");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="User Name"
          name="username"
          value={userData.username || ""}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Password"
          type="password"
          name="Password"
          value={userData.Password || ""}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="First Name"
          name="FirstName"
          value={userData.FirstName || ""}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Last Name"
          name="LastName"
          value={userData.LastName || ""}
          onChange={handleInputChange}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={verify}
          sx={{ mt: 2 }}
        >
          Register
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          If you already have an account, click{" "}
          <Button variant="text" onClick={handleLoginClick}>
            here to login
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}

export default RegisterPage;
