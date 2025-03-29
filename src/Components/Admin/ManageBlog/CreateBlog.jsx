import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './createBlog.scss';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [uploading, setUploading] = useState(false);
  const [existingImages, setExistingImages] = useState([]); // Danh sách ảnh có sẵn

  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';

  // 📌 Lấy danh sách ảnh từ Cloudinary
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get(
          `https://res.cloudinary.com/dyrr4nn92/image/list/samples.json`
        );
        setExistingImages(data.resources.map(img => img.secure_url));
      } catch (error) {
        console.error("Lỗi khi lấy danh sách ảnh từ Cloudinary:", error);
      }
    };
    fetchImages();
  }, []);

  const savePost = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Bạn chưa đăng nhập!');
      return;
    }

    try {
      await axios.post(
        `${API_URL}/posts`,
        { title, image, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Bài viết đã được đăng!');
      setTitle('');
      setImage('');
      setContent('');
    } catch (error) {
      alert('Bạn không có quyền đăng bài!');
    }
  };

  return (
    <div className="create-blog-page">
      <h1 className="create-blog-title">Tạo bài viết mới</h1>
      <section className="create-blog">
        <input
          type="text"
          placeholder="Tiêu đề bài viết"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Danh sách ảnh có sẵn */}
        <div className="image-gallery">
          <h3>Chọn ảnh từ Cloudinary:</h3>
          <div className="gallery-grid">
            {existingImages.map((imgUrl, index) => (
              <button
                key={index}
                src={imgUrl}
                alt="Ảnh từ Cloudinary"
                className={image === imgUrl ? "selected" : ""}
                onClick={() => setImage(imgUrl)}
              />
            ))}
          </div>
        </div>

        {image && (
          <div className="image-preview">
            <h3>Ảnh đã chọn:</h3>
            <img src={image} alt="Ảnh đã chọn" className="preview-image" />
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
          }}
        />
        <button className="btn-post" onClick={savePost} disabled={uploading}>
          {uploading ? 'Đang tải ảnh...' : 'Đăng bài'}
        </button>
      </section>
    </div>
  );
}
