import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, NavLink } from 'react-router-dom';
import './admin.scss';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();
  const location = useLocation();

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

  const isLoginPage = location.pathname === '/admin';

  return (
    <div className="admin-layout">
      <h2>Admin Dashboard</h2>
      {!isLoginPage && isLoggedIn && (
        <header className="admin-header">
          <button className="logout-btn" onClick={handleLogout}>
            Đăng xuất
          </button>
        </header>
      )}
      <div className="admin-content">
        {!isLoginPage && isLoggedIn && (
          <aside className="admin-sidebar">
            <nav>
              <ul>
                <li>
                  <NavLink to="/admin/manageCustomers" activeClassName="active">
                    Quản lý khách hàng
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/manageBlogs" activeClassName="active">
                    Quản lý bài viết
                  </NavLink>
                </li>
              </ul>
            </nav>
          </aside>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
