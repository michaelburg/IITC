import React, { useEffect, useState } from "react";
import PostList from "../components/post-list";
import { getUserByLogIn } from "../utils/CRUD";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const userData = await getUserByLogIn(username, password);
    setUser(userData);
  };
  useEffect(() => {
    if (user) {
      navigate(`/PostFeedPage/${user[0].id}`);
    }
  }, [user]);

  return (
    <>
      <h1>welcome to my posts-app</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>login</button>
    </>
  );
}

export default Home;
