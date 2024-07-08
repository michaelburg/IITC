import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@shadcn/ui";

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
    <Navbar>
      <NavbarBrand onClick={GoHomePage} className="cursor-pointer">
        HomePage
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Button onClick={GoLoginPage}>Login</Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={GoRegisterPage}>Register</Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={GoTasksPage}>TasksPage</Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={GoAboutPage}>AboutPage</Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={logout}>LogOut</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default AppHeader;
