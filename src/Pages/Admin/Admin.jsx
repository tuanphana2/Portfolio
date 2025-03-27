import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './admin.scss';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();
  const location = useLocation(); // Lấy đường dẫn hiện tại

  useEffect(() => {
    const checkAuth = () => setIsLoggedIn(!!localStorage.getItem('token'));
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/admin', { replace: true });
    }
  };

  // Kiểm tra nếu đang ở /admin (trang login) thì không hiển thị header
  const isLoginPage = location.pathname === '/admin';

  return (
    <div className="admin-layout">
      <h2>Admin Dashboard</h2>
      {!isLoginPage &&
        isLoggedIn && ( // Chỉ hiển thị nếu không ở trang login
          <header className="admin-header">
            <button className="logout-btn" onClick={handleLogout}>
              Đăng xuất
            </button>
          </header>
        )}
      <Outlet />
    </div>
  );
};

export default Admin;
