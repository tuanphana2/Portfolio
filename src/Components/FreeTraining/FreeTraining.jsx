import React from 'react';

import imgBG from '../../assets/img/banner/tachnen.png';

const FreeTrainingSection = () => {
  return (
    <section className="free-training-section">
      <div className="container">
        <div className="column">
          <div className="widget-wrap">
            {/* Divider Text */}
            <div className="divider-text">
              <div className="widget-container">
                <div className="divider">
                  <span className="divider-separator">
                    <div className="divider-text-element">CÓ PHẢI BẠN ĐANG TÌM KIẾM?</div>
                  </span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="heading">
              <div className="widget-container">
                <h2 className="heading-title">
                  CÁCH ĐỂ SỞ HỮU MỘT DOANH NGHIỆP HOẶC SỞ HỮU CHO MÌNH MÔ HÌNH DOANH NGHIỆP CHUYÊN
                  GIA?
                </h2>
              </div>
            </div>

            {/* Sub Heading */}
            <div className="sub-heading">
              <div className="widget-container">
                <p className="heading-title">
                  Mà Không Phải Tốn quá nhiều công sức, chịu rủi ro và từ bỏ công việc hiện tại?
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="btn-access">
              <a
                className="button-link-1"
                href="https://betraining.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-content-wrapper">
                  <span className="button-text">Khởi Sự Doanh Nghiệp</span>
                </span>
              </a>
              <a
                className="button-link-2"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-content-wrapper">
                  <span className="button-text">Trở Thành Chuyên Gia</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrainingSection;
