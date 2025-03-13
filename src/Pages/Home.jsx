import React, { useEffect, useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import Banner from '../Components/Banner/Banner';
import FreeTraining from '../Components/FreeTraining/FreeTraining';
import Section1 from '../Components/Homepage/Section1';
import Section2 from '../Components/Homepage/Section2';
import Section3 from '../Components/Homepage/Section3';
import Section4 from '../Components/Homepage/Section4';
import Section5 from '../Components/Homepage/Section5';
import Section6 from '../Components/Homepage/Section6';
import Section7 from '../Components/Homepage/Section7';
import Preloader from '../Components/Shared/Preloader/Preloader';

const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      {isFetching && <Preloader />}
      <Banner />
      <FreeTraining />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <FreeTraining />
      <ScrollRestoration />
    </>
  );
};

export default Home;
