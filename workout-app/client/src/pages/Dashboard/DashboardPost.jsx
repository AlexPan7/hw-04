import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Dashboard.module.scss";

const BASE_URL = "http://localhost:5000/posts/";

export const DashboardPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(BASE_URL);
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const handleEdit = (postId) => {
    console.log(`Editing post with ID: ${postId}`);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`${BASE_URL}${postId}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Text</th>
          <th>Tags</th>
          <th>Categories</th>
          <th>ImageUrl</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.data.map(({ _id, title, body, tag, categories, thumbnail }) => {
          return (
            <tr key={_id}>
              <td>{_id}</td>
              <td>{title}</td>
              <td>{body}</td>
              <td>{tag}</td>
              <td>{categories}</td>
              <td>{thumbnail}</td>
              <td>
                <button onClick={() => handleEdit(_id)}>Edit</button>
                <button onClick={() => handleDelete(_id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
