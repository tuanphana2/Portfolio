import { useEffect, useState } from 'react';
import './previewBlog.scss';

export default function PreviewBlog() {
  const [post, setPost] = useState({ title: '', image: '', content: '' });

  useEffect(() => {
    const storedPost = sessionStorage.getItem('previewPost');
    if (storedPost) {
      setPost(JSON.parse(storedPost));
    }
  }, []);

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
