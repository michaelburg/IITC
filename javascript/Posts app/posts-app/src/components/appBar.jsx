import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const AppBarComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/PostFeedPage" style={linkStyle}>
            Post Feed
          </Link>
        </li>
        <li>
          <Link to="/CreatePost" style={linkStyle}>
            Create Post
          </Link>
        </li>
        <li>
          <Link to="/UserProfile" style={linkStyle}>
            User Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppBarComponent;
