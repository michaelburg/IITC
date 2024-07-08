import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx"; // Adjust the file extension as per your setup
import { BrowserRouter } from "react-router-dom";
import { TasksProvider } from "./TasksContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TasksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TasksProvider>
  </React.StrictMode>
);
