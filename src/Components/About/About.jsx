import React from 'react';

import './about.scss';
import { ScrollRestoration } from 'react-router-dom';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';


const About = () => {
  return (
    <div className="about-container">
      <section className="under-header"></section>
      <section className="hero">
        <h1>Câu Chuyện Của Tôi</h1>
        <p>Bài học 16 tỷ Đồng năm 2005</p>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <ScrollRestoration />
    </div>
  );
};

export default About;
