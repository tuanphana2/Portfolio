import { useEffect, useState } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import About from '../Components/About/About';
import CreateBlog from '../Components/Admin/ManageBlog/CreateBlog';
import EditBlog from '../Components/Admin/ManageBlog/EditBlog';
import ManageBlogs from '../Components/Admin/ManageBlog/ManageBlogs';
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
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return token ? element : <Navigate to="/admin/login" replace />;
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
    path: '/admin/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'dashboard',
        element: <ProtectedRoute element={<ManageBlogs />} />,
      },
      {
        path: 'manageBlogs',
        element: <ProtectedRoute element={<ManageBlogs />} />,
        children: [
          {
            path: 'create',
            element: <ProtectedRoute element={<CreateBlog />} />,
          },
          {
            path: 'edit/:id',
            element: <ProtectedRoute element={<EditBlog />} />,
          },
        ],
      },
    ],
  },
]);
