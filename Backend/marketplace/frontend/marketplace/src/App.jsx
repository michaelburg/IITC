import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MarketPlace from "./pages/MarketPlace";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/MarketPlace" element={<MarketPlace />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
