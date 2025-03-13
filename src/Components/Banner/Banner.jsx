import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Linkedin, Globe, Instagram, PlayFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerMan from '../../assets/img/banner/banner-bg(NTD) (2).png';
import bnArrow from '../../assets/img/banner/bn-arrow.png';
import dial from '../../assets/img/banner/dial.png';
import scrollDown from '../../assets/img/banner/scroll-down.png';
import slideBarBackground from '../../assets/img/banner/slide-bar-background.png';
import VideoPlay from '../Shared/VideoPlay/VideoPlay';
import "swiper/css";

const socalIcon = [
  {
    id: 1,
    icon: <Facebook />,
    link: 'https://www.facebook.com/thaiduybe',
  },
  {
    id: 2,
    icon: <Twitter />,
  },
  {
    id: 3,
    icon: <Linkedin />,
  },
  {
    id: 4,
    icon: <Globe />,
  },
  {
    id: 5,
    icon: <Instagram />,
  },
];

const levels = [
  'THU NHẬP CAO',
  'TỰ DO',
  'ẢNH HƯỞNG',
  'TÔN TRỌNG',
  'DOANH NHÂN',
  'CHUYÊN GIA',
  'TOÀN CẦU',
  'NIỀM VUI',
];

const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true);
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <div className="banner__section">
      <section id="home">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="banner__content">
                <Link to={''} className="bn__currently">
                  <span className="d-block">Currently available for freelance</span>
                  <span className="d-flex gap-4 align-items-center">
                    worldwide
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
                <h1>
                  <span className="hone"> Creative Visual</span>
                  <div className="designer-slider-wrapper">
                    <Swiper
                      slidesPerView={1}
                      loop={true}
                      autoplay={{ delay: 2000, disableOnInteraction: false }}
                      modules={[Autoplay]}
                    >
                      {levels.map((level, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className="designer-slide-item"
                            style={{
                              backgroundImage: `url(${slideBarBackground})`,
                            }}
                          >
                            <span className="level-text">{level}</span>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </h1>
                <div className="video__area">
                  <img src={bnArrow} className="vid__arrow" alt="img" />
                  <button onClick={openLightbox} className="video__80 video-btn">
                    <i>
                      <PlayFill />
                    </i>
                  </button>
                  <span className="proces">Work Process</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`banner__thumb  ${position ? 'right_up_animat' : 'right_up'}`}>
                <img src={bannerMan} alt="man-img" width="100%" height="auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner__leftinfo">
          <div className="left__infomobile">
            <Link to={''}>
              <img src={dial} alt="img" />
            </Link>
            <Link to={''}>(+02)-574-328-301</Link>
          </div>
          <div className="right__infoscroll">
            <Link className="scroll">scroll down</Link>
            <Link className="scroll__bar">
              <img src={scrollDown} alt="img" />
            </Link>
          </div>
        </div>
        <div className="banner__rightinfo">
          <div className="right__infoscroll">
            <Link to={''} className="scroll">
              Follow Me
            </Link>
            <Link to={''} className="scroll__bar">
              <img src={scrollDown} alt="img" />
            </Link>
          </div>
          <div className="banner__xlsocial">
            <ul className="banner__soci d-grid justify-content-center">
              {socalIcon.map(({ icon, id, link }) => {
                return (
                  <li key={id}>
                    <Link to={link} target="_blank" rel="noopener noreferrer">
                      <i>{icon}</i>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {lightboxOpen && (
          <VideoPlay
            setLightboxOpen={setLightboxOpen}
            url="https://www.youtube.com/embed/x3XuYSbScaw?si=5ixIxy8yXwdFVBPM"
          />
        )}
      </section>
    </div>
  );
};

export default Banner;
