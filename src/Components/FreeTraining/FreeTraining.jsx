import React from 'react';

import './freeTraining.scss';
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
                    <div className="divider-text-element">free training</div>
                  </span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="heading">
              <div className="widget-container">
                <h2 className="heading-title">
                  <span className="txt-change">Success</span> without sacrifice
                </h2>
              </div>
            </div>

            {/* Sub Heading */}
            <div className="sub-heading">
              <div className="widget-container">
                <p className="heading-title">
                  How to Avoid Burnout Without Stepping Back From Your Career
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="btn-access">
              <a
                className="button-link"
                href="https://www.thegoodlifeinstitute.com/registernow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-content-wrapper">
                  <span className="button-text">get instant access</span>
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
