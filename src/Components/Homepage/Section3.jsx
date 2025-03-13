import React from 'react';

import imgBG from '../../assets/img/banner/tachnen.png';

const Section3 = () => {
  return (
    <section className="section-3">
      <div className="container">
        <div className="column">
          <div className="widget-wrap">
            {/* Divider Text */}
            <div className="divider-text">
              <div className="widget-container">
                <div className="divider">
                  <span className="divider-separator">
                    <div className="divider-text-element">
                      BẠN CÓ CUỘC SỐNG NHƯ MƠ NÀY TRONG 09 - 12 THÁNG TỚI - BẠN CÓ TIN KHÔNG?
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="heading">
              <div className="widget-container">
                <h2 className="heading-title">
                  VẬY! LÀM SAO ĐỂ LÀM ĐƯỢC ĐIỀU NÀY? LÀM GÌ ĐỂ NÓ XẢY RA VỚI BẠN?
                </h2>
              </div>
            </div>

            {/* Sub Heading */}
            <div className="sub-heading">
              <div className="widget-container">
                <p>
                  Học mọi thứ bạn cần để bắt đầu thay đổi cuộc sống và sự nghiệp trong mơ bắt đầu từ
                  hôm nay. Yes!
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="btn-access">
              <a
                className="button-link"
                href="https://betraining.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-content-wrapper">
                  <span className="button-text">BẤM VÀO XEM NGAY</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
