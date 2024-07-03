import React, { useState } from "react";
import { login } from "../CRUD";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function LoginPgae() {
  const [details, setDetails] = useState({
    email: "john@example.com",
    password: "password123",
  });

  const navigate = useNavigate(); // Initialize navigate

  const verify = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const res = await login(details);
      console.log(res);
      if (!res.token) {
        handleInvalidLogin();
      } else {
        localStorage.setItem("user", JSON.stringify(res));
        navigate("/TasksPage"); // Navigate to TasksPage after successful login
      }
    } catch (error) {
      console.error("Error logging in:", error);
      handleInvalidLogin(); // Handle invalid login in case of error
    }
  };

  const handleInvalidLogin = () => {
    // Implement your invalid login handling here
    alert("Invalid login credentials. Please try again.");
  };

  return (
    <>
      <p>LoginPage</p>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPgae;
