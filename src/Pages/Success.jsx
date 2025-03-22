import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../Components/Success/success.scss';

const stories = [
  { name: 'Jane Doe', story: 'I transformed my career and found balance thanks to this program.' },
  { name: 'John Smith', story: 'This training gave me the tools to overcome burnout and thrive.' },
  { name: 'Anna Nguyen', story: 'I finally feel in control of my work and personal life.' },
];

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev-arrow" onClick={onClick}>
    <svg viewBox="0 0 24 24">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next-arrow" onClick={onClick}>
    <svg viewBox="0 0 24 24">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  </button>
);

const Success = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="success-container">
      <section className="behind-header"></section>
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <p className="sub-text">WE’VE HELPED THOUSANDS OF TOP-TIER WOMEN JUST LIKE YOU</p>
          <h1 className="main-title">TAKE CONTROL OF THEIR CAREERS AND</h1>
          <h2 className="highlighted-title">FINALLY GAIN FREEDOM</h2>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <div className="stories-slider-wrapper">
            <Slider {...sliderSettings} className="stories-slider">
              {stories.map((item, index) => (
                <div className="story-card" key={index}>
                  <p className="story">“{item.story}”</p>
                  <p className="name">- {item.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
