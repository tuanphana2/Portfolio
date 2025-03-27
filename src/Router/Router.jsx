import { useEffect, useState } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import About from '../Components/About/About';
import CreateBlog from '../Components/Admin/CreateBlog';
import EditBlog from '../Components/Admin/EditBlog';
import Root from '../Layouts/Root';
import Admin from '../Pages/Admin/Admin';
import Dashboard from '../Pages/Admin/Dashboard';
import AllBlogs from '../Pages/AllBlogs/AllBlogs';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';
import Careers from '../Pages/Careers';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Podcast from '../Pages/Podcast/Podcast';
import Programs from '../Pages/Program';
import Success from '../Pages/Success';

const ProtectedRoute = ({ element }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const checkAuth = () => setToken(localStorage.getItem('token'));
    window.addEventListener('storage', checkAuth); // Lắng nghe thay đổi localStorage
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return token ? element : <Navigate to="/admin" replace />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/programs',
        element: <Programs />,
      },
      {
        path: '/success',
        element: <Success />,
      },
      {
        path: '/podcast',
        element: <Podcast />,
      },
      {
        path: '/all-blog',
        element: <AllBlogs />,
      },
      {
        path: '/blog-details/:id',
        element: <BlogDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '',
        element: <Login />, // Nếu chưa đăng nhập, tự động hiển thị trang Login
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute element={<Dashboard />} />, // Chỉ vào được khi có token
      },
      {
        path: 'create',
        element: <ProtectedRoute element={<CreateBlog />} />, // Chỉ vào được khi có token
      },
      {
        path: 'edit/:id',
        element: <ProtectedRoute element={<EditBlog />} />, // Chỉ vào được khi có token
      },
    ],
  },
]);
