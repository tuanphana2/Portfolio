import React from 'react';
import './section8.scss';

const data = [
  {
    title: "Be Training - Vườn Ươm Doanh Nhân",
    content:
      "Chúng tôi chia sẻ có bạn cách đi từng bước chuyển từ Trò Chơi Làm Công, làm Thuê → Sang trở Chơi Làm Ông Chủ - Chủ Doanh Nghiệp bằng LỘ TRÌNH KINH DOANH 10 BƯỚC.",
  },
  {
    title: "Học Viện Mentor X",
    content:
      "Giúp cho bạn chuyển từ Dân Chuyên Môn → Sang Chuyên gia và giúp bạn Xây Dựng Mô Hình Kinh Doanh Chuyên Gia để sở hữu doanh nghiệp Chuyên Gia của riêng bạn.",
  },
];

const Section8 = () => {
  return (
    <section className="section8">
      <h4>Ngày này:</h4>
      {data.map((item, index) => (
        <div className="row" key={index}>
          <h6>{item.title}:</h6>
          <p>{item.content}</p>
        </div>
      ))}

      <div className="highlight-text">
        <p>
          <strong>1. Sự Nghiệp Đỉnh Cao, 2. Cuộc Sống Tự Do và Hạnh Phúc, 3. Tự Do Tài Chính…</strong>
        </p>
        <p>Là những thứ mà bạn đáng được hưởng, nên sống cuộc đời này của bạn quá Lãng Phí.</p>
      </div>
    </section>
  );
};

export default Section8;
