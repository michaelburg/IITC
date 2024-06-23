import "./App.css";
import AppBarComponent from "./components/appBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Todo from "./pages/TodoPage";
import Create from "./pages/CreateTodoPage";
import NotFound from "./pages/NotFoundPage";
import TodoDetails from "./pages/TodoDetailsPage";
import SideBarTodo from "./components/sideBarTodo";

function App() {
  return (
    <>
      <AppBarComponent />
      <Routes>
        <Route path="/HomePage" element={<Home />} />
        <Route
          path="/TodoPage"
          element={
            <>
              <SideBarTodo />
              <Todo />
            </>
          }
        />
        <Route
          path="/CreateTodoPage"
          element={
            <>
              <SideBarTodo />
              <Create />
            </>
          }
        />
        <Route
          path="/TodoDetailsPage/:id"
          element={
            <>
              <SideBarTodo />
              <TodoDetails />
            </>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
