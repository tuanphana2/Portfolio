import AOS from "aos";
import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";

import RegistrationForm from "./Components/Register/Register";
import { router } from "./Router/Router.jsx";

import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
