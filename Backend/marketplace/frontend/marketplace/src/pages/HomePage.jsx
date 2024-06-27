import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const GoLoginPage = () => {
    navigate("/LoginPage");
  };

  const GoRegisterPage = () => {
    navigate("/RegisterPage");
  };

  return (
    <>
      <button onClick={GoLoginPage}>Login</button>
      <button onClick={GoRegisterPage}>Register</button>
    </>
  );
}

export default HomePage;
