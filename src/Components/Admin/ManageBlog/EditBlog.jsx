import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import UploadPopup from '../../Shared/Popup/PopupImage';
import './editBlog.scss';

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isTinyMCEPopupOpen, setTinyMCEPopupOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        setTitle(response.data.title);
        setImage(response.data.image);
        setContent(response.data.content);
      } catch (error) {
        alert('Không thể tải bài viết!');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, API_URL, navigate]);

  const updatePost = async () => {
    const token = sessionStorage.getItem('token');
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
      navigate('/');
    } catch (error) {
      alert('Bạn không có quyền chỉnh sửa bài viết!');
    }
  };

  if (loading) return <p>Đang tải bài viết...</p>;

  return (
    <div className="edit-blog-page">
      <h1 className="edit-blog-title">Chỉnh sửa bài viết</h1>
      <section className="edit-blog">
        <input
          type="text"
          placeholder="Tiêu đề bài viết"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className='btn-choose' onClick={() => setPopupOpen(true)}>Chọn ảnh</button>
        {image && (
          <div className="image-preview">
            <img src={image} alt="Ảnh đã chọn" className="preview-image" />
            <input
              type="text"
              value={image}
              readOnly
              className="image-url-input"
              onClick={(e) => e.target.select()}
            />
          </div>
        )}

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
            file_picker_callback: (callback, value, meta) => {
              if (meta.filetype === 'image') {
                setTinyMCEPopupOpen(true);
                window.selectImageForTinyMCE = (url) => {
                  callback(url, { alt: 'Hình ảnh tải lên' });
                  setTinyMCEPopupOpen(false);
                };
              }
            },
          }}
        />

        <button className="btn-update" onClick={updatePost} disabled={uploading}>
          {uploading ? 'Đang cập nhật...' : 'Cập nhật bài viết'}
        </button>
      </section>

      <UploadPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} onSelect={setImage} />
      <UploadPopup isOpen={isTinyMCEPopupOpen} onClose={() => setTinyMCEPopupOpen(false)} onSelect={(url) => {
        if (window.selectImageForTinyMCE) {
          window.selectImageForTinyMCE(url);
        }
      }} />
    </div>
  );
}
