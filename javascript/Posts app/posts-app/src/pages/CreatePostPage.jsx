import { useEffect, useState } from "react";
import { createNewPost, getUserById } from "../utils/CRUD";
import { useNavigate, useParams } from "react-router-dom";

function CreatePost() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const UserData = await getUserById(id);
      setUser(UserData);
    };

    fetchUser();
  }, [id]);

  const CreatePost = async () => {
    newPost = newpost = {
      title: title,
      body: body,
      userId: user[0].id,
      reactions: {
        likes: 0,
      },
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await createNewPost(newPost);
  };

  return (
    <>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={CreatePost}>create post</button>
    </>
  );
}

export default CreatePost;
