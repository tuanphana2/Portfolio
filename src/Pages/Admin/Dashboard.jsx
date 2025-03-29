import { Plus } from "lucide-react";
import { useState } from "react";
import { Card, Button, Tab, Tabs, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Nguyen Van A", email: "a@example.com", phone: "0123456789" },
    { id: 2, name: "Tran Thi B", email: "b@example.com", phone: "0987654321" },
  ]);

  const [posts, setPosts] = useState([
    { id: 1, title: "Sự kiện 2025", author: "Admin", date: "2025-03-29" },
    { id: 2, title: "Cập nhật tính năng mới", author: "Admin", date: "2025-03-28" },
  ]);

  return (
    <div className="d-flex vh-100">
      <aside className="bg-dark text-white p-4" style={{ width: "250px" }}>
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
                <Button variant="primary"><Plus size={16} /> Thêm khách hàng</Button>
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
                <Button variant="primary"><Plus size={16} /> Thêm bài viết</Button>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Tác giả</th>
                    <th>Ngày đăng</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.author}</td>
                      <td>{post.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Tab>
        </Tabs>
      </main>
    </div>
  );
}
