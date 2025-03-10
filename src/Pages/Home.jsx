import React, { useEffect, useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import About from '../Components/About/About';
import Awards from '../Components/About/Awards';
import Banner from '../Components/Banner/Banner';
import Blogs from '../Components/Blogs/Blogs';
import FreeTraining from '../Components/FreeTraining/FreeTraining';
import Section2 from '../Components/Homepage/Alone';
import Section1 from '../Components/Homepage/Hi';
import Section3 from '../Components/Homepage/LikeYou';
import Section5 from '../Components/Homepage/Story';
import Section4 from '../Components/Homepage/Success';
import Metting from '../Components/Metting/Metting';
import Projects from '../Components/Projects/Projects';
import Services from '../Components/Services/Services';
import MarqueeWapper from '../Components/Shared/Marquee/MarqueeWapper';
import Preloader from '../Components/Shared/Preloader/Preloader';
import Testimonial from '../Components/Testimonial/Testimonial';
import WorkeProcess from '../Components/WorkProcess/WorkProcess';
import { images, images2 } from '../Utlits/marqueeItems';

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
      {/* <MarqueeWapper direction="left" images={images} /> */}
      {/* <Awards /> */}
      {/* <Projects /> */}
      {/* <Metting /> */}
      {/* <MarqueeWapper direction="right" images={images2} /> */}
      {/* <Services isHeading={true} /> */}
      {/* <WorkeProcess /> */}
      {/* <Testimonial /> */}
      <FreeTraining />
      <ScrollRestoration />
    </>
  );
};

export default Home;
