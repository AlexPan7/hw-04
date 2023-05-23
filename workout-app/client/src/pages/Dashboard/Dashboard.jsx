import { useState } from "react";
import axios from "axios";
import styles from "./Dashboard.module.scss";

const BASE_URL = "http://localhost:5000/posts/";

export const Dashboard = () => {
  const {form, formItem, formField, formSubmit} = styles;

  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    tag: [],
    categories: [],
    slug: "",
    thumbnail: null,
  })

  const handleChange = e => {
    const {name, value} = e.target;

    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleTagsChange = e => {
    const {name, value} = e.target;

    setNewPost((prevState) => ({
      ...prevState,
      [name]: value.split(","),
    }));
  }

  const handleFileChange = e => {
    const {name, files} = e.target;

    setNewPost((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      Object.entries(newPost).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, value);
        }
      });
      const result = await axios.post(BASE_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return <form className={form} onSubmit={handleSubmit}>
    <h2>Add New Post</h2>
    <div className={formItem}>
      <input className={formField} type="text" name="title" value={newPost.title} placeholder="Title" onChange={handleChange} />
    </div>
    <div className={formItem}>
      <input className={formField} type="text" name="body" value={newPost.body} placeholder="Description" onChange={handleChange} />
    </div>
    <div className={formItem}>
      <input className={formField} type="text" name="tag" value={newPost.tag} placeholder="Tags" onChange={handleTagsChange} />
    </div>
    <div className={formItem}>
      <input className={formField} type="text" name="categories" value={newPost.categories} placeholder="Categories" onChange={handleTagsChange} />
    </div>
    <div className={formItem}>
      <input className={formField} type="text" name="slug" value={newPost.slug} placeholder="Slug" onChange={handleChange} />
    </div>
    <div className={formItem}>
      <input className={formField} type="file" name="thumbnail" onChange={handleFileChange} />
    </div>
    <button type="submit" className={formSubmit}>Submit</button>
  </form>
}