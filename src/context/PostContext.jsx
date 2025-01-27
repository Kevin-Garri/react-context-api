import { useState, createContext, useContext, } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const baseApiUrl = "http://localhost:3000/posts";


  const fetchPosts = () => {
    axios.get(baseApiUrl).then((res) => {
      setPosts(res.data);
    });
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => {
  return useContext(PostContext);
};

export { usePostContext, PostProvider };
