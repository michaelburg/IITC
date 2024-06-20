import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserById } from "../utils/CRUD";
function PostItem({ post }) {
  const [Likes, setLikes] = useState(null);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const UserData = await getUserById(post.userId);
      setUser(UserData);
    };

    fetchUser();
  }, []);
  return (
    <>
      <Link to={`/PostDetail/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      {user && (
        <div>
          posted by: {user.firstName} {user.lastName}
        </div>
      )}

      <p>{post.body}</p>
      <div
        className="post-reaction"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <button>{post.reactions.likes} likes</button>
        <h6>{post.comments.length} comments</h6>
      </div>
      <hr></hr>
    </>
  );
}

export default PostItem;
