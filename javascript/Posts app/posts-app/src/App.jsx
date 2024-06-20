import Home from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import PostDetail from "./pages/PostDetailsPage";
import CreatePost from "./pages/CreatePostPage";
import PostFeedPage from "./pages/PostFeedPage";
import UserProfile from "./pages/UserProfilePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBarComponent from "./components/appBar";

function App() {
  return (
    <>
      {/* <AppBarComponent /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/PostDetail/:id" element={<PostDetail />} />
          <Route path="/CreatePost/:id" element={<CreatePost />} />
          <Route path="/PostFeedPage/:id" element={<PostFeedPage />} />
          <Route path="/UserProfile/" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
