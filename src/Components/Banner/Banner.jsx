import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerMan from '../../assets/img/banner/banner-bg(NTD) (2).png';
import slideBarBackground from '../../assets/img/banner/slide-bar-background.png';
import "swiper/css";

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
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true);
    }
  }, []);

  return (
    <div className="banner__section">
      <section id="home">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="banner__content">
                <h1>
                <h5>BẠN ĐÃ ĐẠT ĐƯỢC</h5>
                <h2>CUỘC SỐNG VÀ SỰ NGHIỆP MƠ ƯỚC CHƯA HAY</h2>
                <h2>VẪN ĐANG LOAY HOAY TÌM KIẾM ĐƯỜNG?</h2>
                <h5>⇒ GIẢI DOANH NHÂN CHÂU Á TẠI MALAYSIA  - ĐÃ ĐẾN 40 QUỐC GIA</h5>
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
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`banner__thumb  ${position ? 'right_up_animat' : 'right_up'}`}>
                <img src={bannerMan} alt="man-img" width="100%" height="auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
