import React, { useEffect, useState } from "react";
import { getPostsById } from "../utils/CRUD";
import { Link, useNavigate, useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPostsById(id);
      setPost(postData);
    };

    fetchPost();
  }, []);

  return (
    <>
      {post ? (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : (
        navigate("/not-found")
      )}
    </>
  );
}

export default PostDetail;
