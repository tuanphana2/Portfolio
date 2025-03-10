import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './home.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Data mẫu
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

const SuccessStoriesSection = () => {
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
    <section className="success-stories">
      <div className="container">
        <h2 className="title">Success Stories</h2>
        <p className="subtitle">Real stories from real people who changed their lives.</p>

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

        <div className="view-more">
          <Link to="/success-stories" className="view-more-btn">
            View More Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
