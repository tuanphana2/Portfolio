import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, NavLink } from 'react-router-dom';
import './admin.scss';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token'));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => setIsLoggedIn(!!sessionStorage.getItem('token'));
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      sessionStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/admin/login', { replace: true });
    }
  };

  const isLoginPage = location.pathname === '/admin/login';

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h2>Admin Dashboard</h2>
        {!isLoginPage && isLoggedIn && (
          <button className="logout-btn" onClick={handleLogout}>
            Đăng xuất
          </button>
        )}
      </header>
      <div className="admin-content">
        {!isLoginPage && isLoggedIn && (
          <aside className="admin-sidebar">
            <nav>
              <ul>
                <li>
                  <NavLink to="/admin/manageBlogs" className={({ isActive }) => isActive ? 'active' : ''}>
                    Quản lý khách hàng
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/manageBlogs" className={({ isActive }) => isActive ? 'active' : ''}>
                    Quản lý bài viết
                  </NavLink>
                </li>
              </ul>
            </nav>
          </aside>
        )}
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
