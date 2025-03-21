import React from 'react';
import { useNavigate, ScrollRestoration } from 'react-router-dom';

import storyImage from '../../assets/img/project/ser-dv1.png'; // Đổi tên ảnh tùy ý

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
                  <h1 className="story-title">Câu Chuyện Của Tôi:</h1>
                  <h2 className="story-subtitle">BÀI HỌC 16 TỶ</h2>
                </div>

                <div className="story-description">
                  <p>
                    Tôi từng nghĩ mình đã chạm đến thành công. Năm 30 tuổi, tôi sở hữu một xưởng gỗ
                    phát triển mạnh, tiền bạc không thiếu, cuộc sống đáng mơ ước. Tôi cứ ngỡ rằng
                    mình đã thắng cuộc trong trò chơi kinh doanh.
                  </p>
                  <p>
                    Rồi tất cả sụp đổ. Một quyết định sai lầm, một cú sốc tài chính – tôi mất trắng
                    16 tỷ. Mọi thứ tôi xây dựng tan biến, chỉ còn lại hai bàn tay trắng và một bài
                    học đắt giá.
                  </p>
                </div>

                <button className="read-story-btn" onClick={handleReadMyStory}>
                  ĐỌC CÂU CHUYỆN CỦA TÔI
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
