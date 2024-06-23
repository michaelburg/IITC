import React from "react";
import Picture from "./Picture";
import logo from "../img/logo.svg";
import hamburger from "../img/icon-hamburger.svg";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between px-5 py-5">
        <Picture srcPath={logo} />
        <Picture srcPath={hamburger} />
      </nav>
    </>
  );
}

export default NavBar;
