import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './blogDetails.scss';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [API_URL, id]);

  if (!post) return <p>Đang tải bài viết...</p>;

  return (
    <div className="post-detail">
      {post.image && (
        <div className="post-cover">
          <img src={post.image} alt={post.title} className="cover-image" />
          <div className="overlay"></div>
          <h1 className="post-title">{post.title}</h1>
        </div>
      )}
      <div className="container">
        <div className="content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div>
  );
}
