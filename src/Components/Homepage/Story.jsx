import React from 'react';
import { useNavigate, ScrollRestoration } from 'react-router-dom';

import storyImage from '../../assets/img/project/ser-dv1.png'; // Đổi tên ảnh tùy ý
import './home.scss';

const MyStory = () => {
  const navigate = useNavigate();

  const handleReadMyStory = () => {
    navigate('/about'); // Đường dẫn trang tiếp theo (có thể tùy chỉnh)
  };

  return (
    <>
      <section className="my-story">
        <div className="container">
          <div className="row align-items-center">
            {/* Nội dung câu chuyện */}
            <div className="col-lg-6">
              <div className="story-content">
                <div className="story-header">
                  <h1 className="story-title">My Story</h1>
                  <h2 className="story-subtitle">The Two Million Dollar Lesson</h2>
                </div>

                <div className="story-description">
                  <p>
                    I’ve spent my entire 20+ year career as a corporate marketing executive. And I understand success.
                    By the age of 30, I was the youngest executive of a multi-billion dollar company flying all over the
                    world as the head of international marketing.
                  </p>
                  <p>
                    Until I burned out in 2003, walked away at the age of 33 and moved to the Virgin Islands. Everyone
                    said I was crazy, but I was too burned out to care.
                  </p>
                </div>

                <button className="read-story-btn" onClick={handleReadMyStory}>
                  Read My Story
                </button>
              </div>
            </div>

            {/* Hình ảnh */}
            <div className="col-lg-6">
              <div className="story-image">
                <img src={storyImage} alt="My Story" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default MyStory;
