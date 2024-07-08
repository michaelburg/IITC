import React, { useState } from "react";
import { register } from "../CRUD";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function RegisterPage() {
  const [details, setDetails] = useState({
    username: "michael",
    email: "michael@burg.com",
    password: "1234",
  });

  const navigate = useNavigate(); // Initialize navigate

  const verify = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const res = await register(details);
      if (!res.token) {
        handleInvalidRegister();
      } else {
        localStorage.setItem("token", JSON.stringify(res.token));
        navigate("/TasksPage"); // Navigate to TasksPage after successful login
      }
    } catch (error) {
      console.error("Error registering:", error);
      handleInvalidRegister(); // Handle invalid login in case of error
    }
  };

  const handleInvalidRegister = () => {
    // Implement your invalid login handling here
    alert("Invalid register credentials. Please try again.");
  };

  return (
    <>
      <p>RegisterPage</p>
      <form onSubmit={verify}>
        <input
          type="text"
          placeholder="Email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          value={details.username}
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default RegisterPage;
