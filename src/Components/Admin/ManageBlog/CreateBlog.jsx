import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useState } from 'react';
import './createBlog.scss';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [uploading, setUploading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';
  // Fix lỗi non-passive event listener
  document.addEventListener('touchstart', function () {}, { passive: true });
  document.addEventListener('touchmove', function () {}, { passive: true });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'NTD-Portfolio');

    setUploading(true);
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dyrr4nn92/image/upload',
        formData
      );
      setImage(response.data.secure_url);
    } catch (error) {
      console.error('Lỗi upload ảnh:', error);
      alert('Không thể tải ảnh lên Cloudinary!');
    } finally {
      setUploading(false);
    }
  };

  const openCloudinaryWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloud_name: 'dyrr4nn92',
        upload_preset: 'NTD-Portfolio', // Đảm bảo là UNSIGNED
        sources: ['local', 'url', 'google_drive', 'facebook'],
        multiple: false,
        folder: 'samples/ecommerce',
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          console.log('Upload thành công:', result.info);
          setImage(result.info.secure_url);
        } else if (error) {
          console.error('Lỗi khi tải ảnh lên Cloudinary:', error);
        }
      }
    );
    widget.open(); // Mở Widget
  };

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

        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={openCloudinaryWidget}>Chọn ảnh từ Cloudinary</button>
        {uploading && <p>Đang tải ảnh lên...</p>}
        {image && (
          <div className="image-preview">
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

            images_upload_handler: async (blobInfo, success, failure) => {
              setUploading(true);

              const formData = new FormData();
              formData.append('file', blobInfo.blob());
              formData.append('upload_preset', 'NTD-Portfolio'); // Thay bằng upload_preset từ Cloudinary

              try {
                const { data } = await axios.post(
                  'https://api.cloudinary.com/v1_1/dyrr4nn92/image/upload',
                  formData
                );

                if (data.secure_url) {
                  success(data.secure_url);
                } else {
                  failure('Không thể tải ảnh lên Cloudinary!');
                }
              } catch (error) {
                console.error('Lỗi upload ảnh:', error);
                failure('Không thể tải ảnh lên!');
              } finally {
                setUploading(false);
              }
            },
          }}
        />
        <button className="btn-post" onClick={savePost} disabled={uploading}>
          {uploading ? 'Đang tải ảnh...' : 'Đăng bài'}
        </button>
      </section>
    </div>
  );
}
