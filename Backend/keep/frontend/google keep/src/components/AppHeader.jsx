import React from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <button onClick={GoLoginPage}>Login</button>
      <button onClick={GoRegisterPage}>Register</button>
      <button onClick={GoTasksPage}>TasksPage</button>
      <button onClick={GoAboutPage}>AboutPage</button>
      <button onClick={GoHomePage}>HomePage</button>
      <button onClick={logout}>LogOut</button>
    </>
  );
}

export default AppHeader;
