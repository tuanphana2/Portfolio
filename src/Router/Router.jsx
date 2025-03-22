import { createBrowserRouter } from 'react-router-dom';

import About from '../Components/About/About';
import Root from '../Layouts/Root';
import AllBlogs from '../Pages/AllBlogs/AllBlogs';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home';
import Podcast from '../Pages/Podcast/Podcast';
import Programs from '../Pages/Program';
import Success from '../Pages/Success';

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
        path: '/blog-details',
        element: <BlogDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
