import React, { useState } from "react";
import { register } from "../CRUD";

function RegisterPage() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    register(details);
  };

  return (
    <>
      <p>RegisterPage</p>
      <form onSubmit={handleSubmit}>
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
          type="username"
          placeholder="Username"
          value={details.username}
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default RegisterPage;
