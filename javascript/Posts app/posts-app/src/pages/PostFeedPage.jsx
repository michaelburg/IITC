import { Link, useParams } from "react-router-dom";
import PostList from "../components/post-list";
import { useEffect, useState } from "react";
import { getUserById } from "../utils/CRUD";

function PostFeedPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const UserData = await getUserById(id);
      setUser(UserData);
    };

    fetchUser();
  }, [id]);

  return (
    <>
      {user && (
        <h1>
          welcome {user.firstName} {user.lastName}
        </h1>
      )}
      <Link to={`/CreatePost${id}`}>create post</Link>
      <PostList userId={id} />
    </>
  );
}

export default PostFeedPage;
