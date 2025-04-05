import React from 'react';
import './section3.scss';

import portraitImg from '../../assets/img/banner/0596.jpg';
import shopImg from '../../assets/img/banner/123.jpg';
import scubaImg from '../../assets/img/banner/1234.jpg';
import beachImg from '../../assets/img/banner/246.jpg';

const Section3 = () => {
  return (
    <section className="section3">
      <div className="container">
        <div className="content">
          <div className="image-group">
          <img src={beachImg} alt="Beach" className="main-img" />
      <img src={scubaImg} alt="Scuba" className="overlay-img scuba" />
      <img src={shopImg} alt="Shop" className="overlay-img shop" />
      <img src={portraitImg} alt="Portrait" className="overlay-img portrait" />
          </div>

          <div className="text-content">
            <h2 className="heading-title">CÓ TIỀN, MẤT TIỀN VÀ KIỆT QUỆ</h2>
            <div className="divider"></div>
            <p className="sub-text-1">
              Lúc đầu tôi tìm các xưởng gỗ đặt hàng cho khách hàng thì rất ok, tôi khoẻ và có thu
              nhập, sau đó tôi mở xưởng be bé ở Bình Dương cũng rất ok và thu nhập tốt hơn, rồi
              xưởng tôi to hơn, tiền mua máy, mua nguyên liệu, công nhân đông lên có lúc đến 200 con
              người. Giờ nghĩ lại thôi mà tôi còn lạnh cả sống lưng. Không hiểu sao khi ấy mình lao
              ra làm như vậy chứ?
            </p>
            <p className="sub-text-2">
              Tôi đầu tắt mặt tối, từ sáng đến khuya đủ thứ công việc và sự vụ, chất lượng cuộc sống
              giảm, tiền thu về không đủ chi, miếng đất tôi mua khi xưa cũng phải bán để lo chi trả.
              Sau tất cả tôi phá sản mất 16 tỷ khi ấy. Nhưng vẫn còn chút may mắn là tôi không bị
              mang nợ nần. Để sau này tôi mới phát hiện ra Bí Mật của Thất Bại Thanh Lịch.
            </p>
            <h2 className="heading-title">
              30 TUỔI TÔI TAY TRẮNG RA NHÀ TRỌ Ở, KIỆT QUÊ, MẤT NIỀM TIN VÀO CHÍNH MÌNH
            </h2>
            <div className="divider"></div>
            <p className="sub-text-1">
              “Tưởng rằng mình sẽ giàu có khi ra làm chủ ai ngờ về tay trắng mà khổ trần ai”. Tôi
              mua 1 tiệm photocopy nhỏ để cho 02 đứa em làm có tiền ra vô tiêu xài, bản thân tôi đi
              giao báo từng nhà buổi sáng để qua ngày, để không bị ù lì, trong thời gian đó tôi suy
              nghĩ phải làm gì tiếp theo đây. Những có thấy gì tiếp đâu.
            </p>
            <p className="sub-text-2">
              Mất 03 tháng sau, sáng Thư 2 hôm đó tôi cầm tờ Báo Tuổi Trẻ khi ấy đọc và tôi nhận ra
              một cơ hội mới đó là Chứng Khoán, lập tức khi ấy tôi lấy xe máy chạy ngay lên khu phố
              Wall của Việt Nam ở Q1, đường Nguyễn Công Trứ. Tôi nhìn ra một góc nhìn mới nó thay
              đổi toàn bộ sự nghiệp cuộc đời tôi sau này.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
