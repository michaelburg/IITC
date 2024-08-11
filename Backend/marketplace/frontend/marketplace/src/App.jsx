import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MarketPlace from "./pages/MarketPlace";
import NotFound from "./pages/NotFound";
import AppHeader from "./components/AppHeader";
import ProfilePage from "./pages/ProfilePage";
import MyProductsPage from "./pages/MyProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
export const LoggedInUser = React.createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <>
      <LoggedInUser.Provider value={[loggedInUser, setLoggedInUser]}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/MarketPlace" element={<MarketPlace />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/MyProductsPage" element={<MyProductsPage />} />
          <Route path="/ShoppingCartPage" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoggedInUser.Provider>
    </>
  );
}

export default App;
