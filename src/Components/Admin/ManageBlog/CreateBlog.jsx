import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

import UploadPopup from '../../Shared/Popup/PopupImage';
import './createBlog.scss';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [keywords, setKeywords] = useState(''); // Chuỗi từ khóa SEO
  const [selectedCategories, setSelectedCategories] = useState([]); // Danh sách các category đã chọn
  const [categories, setCategories] = useState([]); // Danh sách các category
  const [showAllCategories, setShowAllCategories] = useState(false); // Trạng thái để điều khiển việc hiển thị tất cả danh mục
  const [newCategoryName, setNewCategoryName] = useState(''); // Tên danh mục mới
  const [popupOpen, setPopupOpen] = useState(false); // Trạng thái popup thêm mới danh mục
  const [uploading, setUploading] = useState(false);
  const [isPopupOpen, setPopupOpenImage] = useState(false);
  const [isTinyMCEPopupOpen, setTinyMCEPopupOpen] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';

  // Lấy danh sách category từ API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/category`);
        if (response.data && Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        } else {
          alert('Dữ liệu danh mục không hợp lệ!');
        }
      } catch (error) {
        alert(error.response?.data?.message || 'Lỗi khi lấy danh mục!');
      }
    };

    fetchCategories();
  }, []);

  const savePost = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) return alert('Bạn chưa đăng nhập!');

    try {
      const decoded = jwtDecode(token);

      // Tách từ khóa SEO thành một mảng từ khóa dựa vào dấu cách và dấu phẩy
      const keywordArray = keywords
        .split(/\s+|,+/)
        .map((keyword) => keyword.trim())
        .filter(Boolean);

      await axios.post(
        `${API_URL}/posts`,
        {
          title,
          image,
          content,
          keywords: keywordArray, // Gửi mảng từ khóa SEO
          categories: selectedCategories, // Gửi danh sách category đã chọn
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Bài viết đã được đăng!');
      setTitle('');
      setImage('');
      setContent('');
      setKeywords('');
      setSelectedCategories([]); // Reset categories khi đăng bài
    } catch (error) {
      alert(error.response?.data?.message || 'Lỗi khi đăng bài!');
    }
  };

  const previewPost = () => {
    sessionStorage.setItem(
      'previewPost',
      JSON.stringify({ title, image, content, keywords, categories: selectedCategories })
    );
    window.open('/admin/preview', '_blank');
  };

  // Hàm xử lý sự kiện khi người dùng nhập vào ô từ khóa SEO
  const handleKeywordChange = (e) => {
    setKeywords(e.target.value); // Cập nhật từ khóa khi người dùng nhập vào
  };

  // Hàm xử lý sự kiện khi người dùng chọn/deselect một category
  const handleCategoryChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      // Nếu category đã được chọn thì bỏ chọn
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      // Thêm category vào danh sách đã chọn
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Hàm để xử lý việc hiển thị danh mục thêm mới
  const handleAddCategory = async () => {
    if (newCategoryName.trim() === '') {
      alert('Tên danh mục không được để trống');
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/category`,
        { name: newCategoryName },
        { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } }
      );

      // Thêm danh mục mới vào danh sách categories mà không cần gọi lại API
      setCategories((prevCategories) => [...prevCategories, response.data.category]);
      setNewCategoryName(''); // Reset input tên danh mục
      setPopupOpen(false); // Đóng popup thêm mới danh mục
      useEffect
    } catch (error) {
      alert(error.response?.data?.message || 'Lỗi khi thêm danh mục!');
    }
  };

  return (
    <div className="create-blog-page">
      <h1 className="create-blog-title">Tạo bài viết mới</h1>
      <section className="create-blog">
        {/* Tiêu đề bài viết */}
        <input
          type="text"
          placeholder="Tiêu đề bài viết"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Chọn ảnh */}
        <button className="btn-choose" onClick={() => setPopupOpenImage(true)}>
          Chọn ảnh
        </button>
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

        {/* Editor nội dung bài viết */}
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

        {/* Hiển thị danh mục */}
        <div className="category-input">
          <div className="category-grid">
            {categories &&
              categories.slice(0, showAllCategories ? categories.length : 9).map(
                (cat) =>
                  cat &&
                  cat._id && (
                    <div key={cat._id} className="category-item">
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat._id)}
                          onChange={() => handleCategoryChange(cat._id)}
                        />
                        {cat.name}
                      </label>
                    </div>
                  )
              )}
          </div>

          {/* Nút hiển thị thêm */}
          {categories.length > 9 && !showAllCategories && (
            <button onClick={() => setShowAllCategories(true)} className="btn-show-more">
              Xem thêm
            </button>
          )}

          {/* Nút để thêm mới category */}
          <button type="button" onClick={() => setPopupOpen(true)} className="btn-add-category">
            Thêm mới danh mục
          </button>
        </div>

        {/* Nhập từ khóa SEO */}
        <div className="keyword-input">
          <input
            type="text"
            placeholder="Nhập từ khóa SEO"
            value={keywords}
            onChange={handleKeywordChange}
          />
        </div>

        {/* Các nút hành động */}
        <div className="btn-section">
          <button onClick={previewPost} className="btn-preview">
            Xem trước
          </button>
          <button className="btn-post" onClick={savePost} disabled={uploading}>
            {uploading ? 'Đang tải ảnh...' : 'Đăng bài'}
          </button>
        </div>
      </section>

      {/* Popup chọn ảnh */}
      <UploadPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpenImage(false)}
        onSelect={setImage}
      />

      {/* Popup thêm mới danh mục */}
      <div className={`popup ${popupOpen ? 'open' : ''}`}>
        <div className="popup-content">
          <h3>Thêm mới danh mục</h3>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Nhập tên danh mục"
          />
          <div className="popup-actions">
            <button onClick={handleAddCategory} className="btn-add">
              Thêm
            </button>
            <button onClick={() => setPopupOpen(false)} className="btn-cancel">
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
