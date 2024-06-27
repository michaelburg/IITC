import React, { useState } from "react";
import {
  Button,
  Input,
  Container,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const verify = () => {
    if (userData.UserName === "1" && userData.Password === "1") {
      navigate("/MarketPlace");
    }
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
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="User Name"
          name="UserName"
          value={userData.UserName || ""}
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
