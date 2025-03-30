import AOS from 'aos';
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './Router/Router.jsx';

import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
    const handleUnload = () => {
      const section = document.querySelector('section');
      if (section) {
        section.remove();
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
