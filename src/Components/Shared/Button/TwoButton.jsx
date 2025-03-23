import React from 'react';

import './twoButton.scss';
const TwoButton = () => {
  return (
    <section className="button-section">
      <div className="container">
        <div className="column">
          <div className="widget-wrap">
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
              <a className="button-link-2" href="/" target="_blank" rel="noopener noreferrer">
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

export default TwoButton;
