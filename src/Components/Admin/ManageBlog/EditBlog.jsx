import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './editBlog.scss';

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "https://ntd-portfolio-be.onrender.com";

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${API_URL}/posts/${id}`);
      setTitle(response.data.title);
      setImage(response.data.image);
      setContent(response.data.content);
    } catch (error) {
      alert('Lỗi khi tải bài viết!');
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const response = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setImage(response.data.url);
    } catch (error) {
      alert('Lỗi khi tải ảnh lên!');
    } finally {
      setUploading(false);
    }
  };

  const updatePost = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Bạn chưa đăng nhập!');
      return;
    }

    try {
      await axios.put(
        `${API_URL}/posts/${id}`,
        { title, image, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Bài viết đã được cập nhật!');
      navigate('/admin/dashboard');
    } catch (error) {
      alert('Bạn không có quyền chỉnh sửa bài viết!');
    }
  };

  return (
    <div className="edit-blog-page">
      <h1 className="edit-blog-title">Chỉnh sửa bài viết</h1>

      {loading ? (
        <p className="loading-text">Đang tải dữ liệu...</p>
      ) : (
        <section className="edit-blog">
          <input
            type="text"
            placeholder="Tiêu đề bài viết"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={uploadImage}
          />
          {uploading && <p>Đang tải ảnh lên...</p>}
          {image && <img src={image} alt="Ảnh bài viết" className="preview-image" />}
          <Editor
            apiKey="ur8ckyxvov6axv3grwbct3wtps7nv93ah15d2hiwosxnu2ea"
            value={content}
            onEditorChange={setContent}
            init={{
              height: 400,
              menubar: true,
              plugins: 'lists link image table code',
              toolbar:
                'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | table image link code',
              content_style: 'body { font-size: 14px; font-family: Arial, sans-serif; }',
            }}
          />
          <button className="btn-update" onClick={updatePost} disabled={uploading}>
            {uploading ? 'Đang tải ảnh...' : 'Cập nhật bài viết'}
          </button>
        </section>
      )}
    </div>
  );
}