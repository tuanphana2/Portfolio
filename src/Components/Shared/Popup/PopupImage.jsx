import axios from 'axios';
import { useState, useEffect } from 'react';

import './popupImage.scss';

export default function UploadPopup({ isOpen, onClose, onSelect }) {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    if (isOpen) fetchFiles(1);
  }, [isOpen]);

  const fetchFiles = async (pageNumber) => {
    try {
      const res = await axios.get(`${API_URL}/api?page=${pageNumber}&limit=8`);
      setFiles(res.data.files);
      setTotalPages(res.data.totalPages);
      setPage(res.data.currentPage);
    } catch (error) {
      console.error('Lỗi lấy danh sách file:', error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert('Chọn file trước!');

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await axios.post(`${API_URL}/api`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      fetchFiles(1); // Cập nhật lại danh sách sau khi upload
      setSelectedFile(null);
    } catch (error) {
      console.error('Lỗi upload:', error.response ? error.response.data : error.message);
      alert(`Upload thất bại! ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup">
          <h2>Upload Ảnh</h2>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={loading}>
            {loading ? 'Đang upload...' : 'Upload'}
          </button>
          <h3>Ảnh đã tải lên</h3>
          <div className="image-list">
            {files.map((file, index) => (
              <button key={index} className="image-button" onClick={() => onSelect(file.url)}>
                <img src={file.url} alt="Uploaded" className="uploaded-image" />
              </button>
            ))}
          </div>
          {/* Phân trang */}
          <div className="pagination">
            <button disabled={page === 1} onClick={() => fetchFiles(page - 1)}>Trang trước</button>
            <span>Trang {page} / {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => fetchFiles(page + 1)}>Trang sau</button>
          </div>
          <button className="close-btn" onClick={onClose}>Đóng</button>
        </div>
      </div>
    )
  );
}
