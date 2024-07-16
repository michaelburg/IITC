import React, { useState, ChangeEvent, FormEvent } from "react";
import { register } from "../crud";
import { useNavigate, Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

interface RegisterDetails {
  username: string;
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const [details, setDetails] = useState<RegisterDetails>({
    username: "michael",
    email: "michael@burg.com",
    password: "1234",
  });

  const navigate = useNavigate();

  const verify = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await register(details);
      if (!res.token) {
        handleInvalidRegister();
      } else {
        localStorage.setItem("token", JSON.stringify(res.token));
        navigate("/TasksPage");
      }
    } catch (error) {
      console.error("Error registering:", error);
      handleInvalidRegister();
    }
  };

  const handleInvalidRegister = () => {
    alert("Invalid register credentials. Please try again.");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={verify} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            fullWidth
            name="username"
            label="Username"
            id="username"
            value={details.username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={details.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={details.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
        <Link to="/LoginPage">Already have an account? Login here</Link>
      </Box>
    </Container>
  );
};

export default RegisterPage;
