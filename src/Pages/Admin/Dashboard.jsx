import axios from 'axios';
import { Plus, Trash, Edit, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, Button, Tab, Tabs, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.scss';

export default function AdminDashboard() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Nguyen Van A', email: 'a@example.com', phone: '0123456789' },
    { id: 2, name: 'Tran Thi B', email: 'b@example.com', phone: '0987654321' },
  ]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Lỗi khi tải bài viết:', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa bài viết này?')) return;

    try {
      await axios.delete(`${API_URL}/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      alert('Xóa bài viết thành công!');
      fetchPosts();
    } catch (error) {
      alert('Lỗi khi xóa bài viết!');
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="admin-dashboard-page">
      <div className="d-flex vh-100">
        <aside className="bg-dark text-white p-4" style={{ width: '250px' }}>
          <h2 className="h5">Admin Panel</h2>
          <Tabs defaultActiveKey="customers" className="flex-column mt-3">
            <Tab eventKey="customers" title="Quản lý Khách Hàng" />
            <Tab eventKey="posts" title="Quản lý Bài Viết" />
          </Tabs>
        </aside>

        <main className="flex-grow-1 p-4">
          <h1 className="h4 mb-3">Admin Dashboard</h1>
          <Tabs defaultActiveKey="customers" className="mb-3">
            <Tab eventKey="customers" title="Khách Hàng">
              <Card className="p-3">
                <div className="d-flex justify-content-between mb-3">
                  <h2 className="h5">Danh sách khách hàng</h2>
                  <Button variant="primary">
                    <Plus size={16} /> Thêm khách hàng
                  </Button>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tên</th>
                      <th>Email</th>
                      <th>Điện thoại</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Tab>

            <Tab eventKey="posts" title="Bài Viết">
              <Card className="p-3">
                <div className="d-flex justify-content-between mb-3">
                  <h2 className="h5">Danh sách bài viết</h2>
                  <Button variant="primary" onClick={() => navigate('/admin/create')}>
                    <Plus size={16} /> Thêm bài viết
                  </Button>
                </div>
                {loading ? (
                  <p className="loading-text">Đang tải dữ liệu...</p>
                ) : (
                  <>
                    <Table striped bordered hover>
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
                                <img src={post.image} alt={post.title} style={{ width: '50px' }} />
                              </td>
                              <td>
                                <Button
                                  className="edit-btn"
                                  onClick={() => navigate(`/admin/edit/${post.id}`)}
                                >
                                  <Edit size={16} />
                                </Button>
                                <Button className="delete-btn" onClick={() => deletePost(post.id)}>
                                  <Trash size={16} />
                                </Button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3">Không có bài viết nào.</td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                    {totalPages > 1 && (
                      <div className="pagination">
                        <Button
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        >
                          <ChevronLeft size={16} /> Trước
                        </Button>
                        <span className="page-info">
                          Trang {currentPage} / {totalPages}
                        </span>
                        <Button
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        >
                          Sau <ChevronRight size={16} />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </Card>
            </Tab>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
