import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './allBlogs.scss';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL || "https://ntd-portfolio-be.onrender.com";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [API_URL]);

  return (
    <div className="post-list">
      <section className="behind-header"></section>
      <section className="all-blogs">
        <div className="container">
          <h1>Tất cả bài viết</h1>
          <div className="posts">
            {posts.map((post) => (
              <Link
                to={`/blog-details/${post._id}`}
                key={post.id}
                className="post-item"
                state={{ postId: post.id }}
              >
                <div className="post-image-wrapper">
                  <img src={post.image} alt={post.title} className="post-image" />
                  <div className="post-title">{post.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
