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

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Chỉ được phép tải lên hình ảnh!');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Kích thước ảnh không được vượt quá 5MB!');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);
    try {
      const response = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setImage(response.data.url);
    } catch (error) {
      console.error('Lỗi tải ảnh:', error.response?.data || error.message);
      alert('Lỗi khi tải ảnh lên!');
    } finally {
      setUploading(false);
    }
  };

  const openCloudinaryWidget = () => {
    window.cloudinary.openMediaLibrary(
      {
        cloud_name: 'your-cloud-name',
        api_key: 'your-api-key',
        multiple: false,
        max_files: 1,
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          setImage(result.info.secure_url);
        }
      }
    );
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
        {image && <img src={image} alt="Banner bài viết" className="preview-image" />}

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
              formData.append('image', blobInfo.blob(), blobInfo.filename());

              try {
                const { data } = await axios.post(`${API_URL}/api/upload`, formData, {
                  headers: { 'Content-Type': 'multipart/form-data' },
                });

                if (data.url) {
                  success(data.url);
                } else {
                  failure('Không thể tải ảnh lên!');
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
