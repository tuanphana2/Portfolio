import React from 'react';

import TwoButton from '../Shared/Button/TwoButton.jsx';

const FreeTrainingSection = () => {
  return (
    <>
      <section className="free-training-section">
        <div className="container">
          <div className="column">
            <div className="widget-wrap">
              <div className="divider-text">
                <div className="widget-container">
                  <div className="divider">
                    <span className="divider-separator">
                      <div className="divider-text-element">CÓ PHẢI BẠN ĐANG TÌM KIẾM?</div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="heading">
                <div className="widget-container">
                  <h2 className="heading-title-1">
                    CÁCH ĐỂ SỞ HỮU MỘT DOANH NGHIỆP HOẶC SỞ HỮU CHO MÌNH MÔ HÌNH DOANH NGHIỆP CHUYÊN
                    GIA?
                  </h2>
                </div>
              </div>
              <div className="sub-heading">
                <div className="widget-container">
                  <p className="heading-title-2">
                    Mà Không Phải Tốn quá nhiều công sức, chịu rủi ro và từ bỏ công việc hiện tại?
                  </p>
                </div>
              </div>
              <TwoButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrainingSection;
