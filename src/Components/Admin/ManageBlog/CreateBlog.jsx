import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

import UploadPopup from '../../Shared/Popup/PopupImage';
import './createBlog.scss';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [uploading, setUploading] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isTinyMCEPopupOpen, setTinyMCEPopupOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';

  const savePost = async () => {
    const token = sessionStorage.getItem('token'); // Lấy token từ sessionStorage
    if (!token) {
      alert('Bạn chưa đăng nhập!');
      return;
    }
    const decoded = jwtDecode(token);
    console.log('📌 Dữ liệu từ token:', decoded);
    console.log('🛠 Gửi request:', {
      url: `${API_URL}/posts`,
      headers: { Authorization: `Bearer ${token}` },
      body: { title, image, content },
    });
    try {
      await axios.post(
        `${API_URL}/posts`,
        { title, image, content },
        { headers: { Authorization: `Bearer ${token}` } } // Đảm bảo gửi token
      );
      alert('Bài viết đã được đăng!');
      setTitle('');
      setImage('');
      setContent('');
    } catch (error) {
      alert('Bạn không có quyền đăng bài!');
    }
  };

  const handleTinyMCEImageSelect = (url) => {
    const editor = window.tinymce.activeEditor;
    if (editor) {
      editor.insertContent(`<img src="${url}" alt="Chèn ảnh" />`);
    }
    setTinyMCEPopupOpen(false);
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

        <button onClick={() => setPopupOpen(true)}>Chọn ảnh</button>
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

            setup: (editor) => {
              editor.ui.registry.addMenuItem('image', {
                text: 'Image...',
                icon: 'image',
                onAction: () => setTinyMCEPopupOpen(true),
              });
            },
          }}
        />

        <button className="btn-post" onClick={savePost} disabled={uploading}>
          {uploading ? 'Đang tải ảnh...' : 'Đăng bài'}
        </button>
      </section>

      <UploadPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} onSelect={setImage} />
      <UploadPopup
        isOpen={isTinyMCEPopupOpen}
        onClose={() => setTinyMCEPopupOpen(false)}
        onSelect={handleTinyMCEImageSelect}
      />
    </div>
  );
}
