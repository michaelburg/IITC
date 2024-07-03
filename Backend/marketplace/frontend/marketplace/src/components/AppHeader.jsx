import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUser } from "../App";

function AppHeader() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUser);

  const GoLoginPage = () => {
    navigate("/LoginPage");
  };

  const GoRegisterPage = () => {
    navigate("/RegisterPage");
  };

  const GoProfilePage = () => {
    navigate("/ProfilePage");
  };

  const GoMarketPlace = () => {
    navigate("/MarketPlace");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setLoggedInUser(null);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {user ? (
        <>
          <button onClick={GoMarketPlace}>MarketPlace</button>
          <button onClick={logout}>LogOut</button>
          <button onClick={GoProfilePage}>
            {user.firstName + " " + user.lastName}
          </button>
        </>
      ) : (
        <>
          <button onClick={GoLoginPage}>Login</button>
          <button onClick={GoRegisterPage}>Register</button>
          <button onClick={GoMarketPlace}>MarketPlace</button>
        </>
      )}
    </>
  );
}

export default AppHeader;
