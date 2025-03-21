import { createBrowserRouter } from 'react-router-dom';

import About from '../Components/About/About';
import Root from '../Layouts/Root';
import AllBlogs from '../Pages/AllBlogs/AllBlogs';
import AllServices from '../Pages/AllServices';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home';
import Podcast from '../Pages/Podcast/Podcast';
import Portfolio from '../Pages/Portfolio/Portfolio';
import PortfolioDetails from '../Pages/PortfolioDetails/PortfolioDetails';
import Programs from '../Pages/Program';
import ServiceDetails from '../Pages/ServiceDetails';

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
        path: '/all-services',
        element: <AllServices />,
      },
      {
        path: '/service-details',
        element: <ServiceDetails />,
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
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/portfolio-details',
        element: <PortfolioDetails />,
      },
    ],
  },
]);
