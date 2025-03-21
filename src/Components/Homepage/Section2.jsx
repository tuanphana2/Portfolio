import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
// import './home.scss';

const Section2 = () => {
  return (
    <>
      <section className="imagination-story">
        {/* Title & Sub-title - Để ở ngoài, đứng độc lập */}
        <div className="intro-box">
          <h2 className="main-title">BẠN LUÔN LÀM TỐT HƠN ĐÓ… HÃY TIN TÔI ĐI</h2>
          <p className="sub-title">
            Tôi hiểu bạn, vì tôi đã từng là bạn, tôi đã từng suy nghĩ và bị mắc kẹt giống bạn.
          </p>
          <p className="sub-title">
            Và tôi ở dây để nói với bạn rằng luôn có những Công Thức và Bí Mật để cuộc sống & Sự
            nghiệp bạn tốt hơn. Yes!
          </p>
        </div>

        {/* Content Box - Đặt trong bảng (khung tối) */}
        <div className="container">
          <div className="content-box">
            <h3 className="title">03 PHÚT BẠN THỬ TƯỞNG TƯỢNG</h3>
            <p className="description">
              1. BẠN hãy để tâm trí mình thoát khỏi những thứ bề bộn, lo toan, cơm, áo, gạo tiền, sự
              nghiệp mỗi ngày.
            </p>
            <p className="description">
              2. Bạn cảm thấy sự nghiệp và cuộc sống nó nhẹ nhàng và rồi bạn đang Trôi Chảy từ nơi
              này sang nơi khác.
            </p>
            <p className="description">
              3. Bạn nhận là mình làm chủ cuộc chơi và sự nghiệp thay vì để nó kiểm soát mình.
            </p>
            <p className="description">
              4. Bạn có thời gian cho mình, con cái mà gia đình thay vì mỗi ngày luôn việc, việc,
              việc… bận, bận, bận…
            </p>
            <p className="description">
              5. Bạn thức dậy mỗi ngày với năng lượng tràn đầy, cuối tuần cùng gia đình dạo phố, mỗi
              tối cùng con đọc sách, giúp con học bài.
            </p>
            <p className="description">
              6. Những thứ kho khăn trước đây trong sự nghiệp được bạn xư lý nhẹ nhàng, đơn giản và
              tinh tế.
            </p>
            <p className="description">
              7. Bạn có thời gian dành cho việc yêu thích như mỗi năm đi du lịch vài quốc gia, viết
              sách, nuôi cá, chăm sóc cây cảnh, hay đơn giản là ngắm bình minh nơi bãi biển yêu
              thích.
            </p>
            <p className="description">
              8. Bạn có sức khoẻ và nhiệt huyết mà ai cũng ghen tỵ, mỗi ngày bạn thoái mái với áo
              thun, đôi giày ba ta và phong cách thoải mái của mình.
            </p>
            <p className="description">
              9. Ngay bây giờ bạn có cảm nhận được cuộc sống bạn không những thành công bên ngoài mà
              nó đến từ bên trong bạn. Trong tận bộ Gen của bạn.
            </p>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Section2;
