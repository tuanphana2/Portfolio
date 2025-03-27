import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./dashboard.scss";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Số bài viết trên mỗi trang
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Lỗi khi tải bài viết:", error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa bài viết này?")) return;

    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      alert("Xóa bài viết thành công!");
      fetchPosts();
    } catch (error) {
      alert("Lỗi khi xóa bài viết!");
    }
  };

  // Xác định dữ liệu trên trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Tổng số trang
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Quản Lý Blog</h1>

      {/* Nút Thêm bài viết */}
      <div className="table-header">
        <button className="add-btn" onClick={() => navigate("/admin/create")}>
          <FaPlus /> Thêm bài viết
        </button>
      </div>

      {loading ? (
        <p className="loading-text">Đang tải dữ liệu...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Tiêu đề</th>
                <th>Ảnh</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>
                      <img src={post.image} alt={post.title} />
                    </td>
                    <td>
                      <button className="edit-btn" onClick={() => navigate(`/admin/edit/${post._id}`)}>
                        <FaEdit />
                      </button>
                      <button className="delete-btn" onClick={() => deletePost(post._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">Không có bài viết nào.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* PHÂN TRANG */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                <FaChevronLeft /> Trước
              </button>
              <span className="page-info">
                Trang {currentPage} / {totalPages}
              </span>
              <button
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                Sau <FaChevronRight />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
