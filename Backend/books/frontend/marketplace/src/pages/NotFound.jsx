import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Oops! The page you're looking for does not exist.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The requested URL was not found on this server.
      </Typography>
      <Button variant="contained" color="primary" onClick={goBack}>
        Go Back
      </Button>
    </Box>
  );
}

export default NotFound;
