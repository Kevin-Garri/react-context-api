import { useEffect } from "react";
import { usePostContext } from "../context/PostContext";

const PostList = () => {
  const { posts, fetchPosts } = usePostContext();
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container d-flex">
      {posts.map((post) => (
        <div className="card m-3" key={post.id}>
          <img src={post.image} alt={post.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="card-text">
              <strong>Tags:</strong>
              {post.tags.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;