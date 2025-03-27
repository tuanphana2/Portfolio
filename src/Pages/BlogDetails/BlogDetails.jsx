import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './blogDetails.scss';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [id]);

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
