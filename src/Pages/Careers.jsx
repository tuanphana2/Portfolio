import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

import '../Components/Careers/careers.scss';
import Registration from '../Components/FreeTraining/FreeTraining';

const listItems = [
  {
    text: '1. Bạn đang là nhân viên văn phòng muốn ra mở doanh nghiệp, làm ông chủ mà loay hoay, lo sợ, nhát gan? Muốn thoát nơi ấy để ra làm chủ doanh nghiệp?',
  },
  {
    text: '2. Bạn muốn đạt được thành công trong sự nghiệp mà bạn bè, thầy cô, gia đình, bà con, đồng nghiệp ngưỡng mộ không?',
  },
  {
    text: '3. Bạn có đang là một nhà chuyên môn làm 5, 10… mà vẫn làm lãnh lương và thu nhập thấp? Bạn muốn sở hữu mô hình doanh nghiệp chuyên gia cho riêng mình và thu nhập cao?',
  },
  {
    text: '4. Bạn đang là chủ theo cách tự làm chủ có thêm vài nhân viên nhưng rất bận đầu tắt mặt tối muốn phát triển, thoát là mà không biết làm sao?',
  },
  {
    text: '5. Bạn đang quản lý 10 nhân viên nó nó rối tung, rối mù không có biết cách quy trình vận hành, bạn muốn mở lớn hơn mà không biết làm sao?',
  },
  {
    text: '6. Nếu bạn đang là người rất giỏi trong việc của mình, mà thu nhập thì thấp hoặc quá bận thời gian dẫn đến kiệt quệ. Bạn cần một mô hình cách thức làm việc tự do hơn và thu nhập siêu cao.',
  },
  {
    text: '7. Nếu bạn đang có mọi thứ như công việc, thu nhập, gia đình và cuộc sống tuyệt vời tuy nhiên bạn cần lên tầm cao của Chuyên Gia và được xã hội kính trọng. Chúng tôi giúp bạn điều này.',
  },
];

const Careers = () => {
  return (
    <div className="careers-page">
      <section className="under-header"></section>
      <section className="hero-section">
        <h1>THAY ĐỔI SỰ NGHIỆP CỦA BẠN CÙNG VỚI CHÚNG TÔI</h1>
        <p>
          Chúng tôi tìm kiếm những nhân tố Khát Khao chọn con đường LÀM CHỦ DOANH NGHIỆP & Những cá
          nhân muốn sở hữu Mô Hình Chuyên Gia để giúp thay đổi sự nghiệp của bạn và thông qua đó
          giúp thay đổi chất lượng cuộc sống hàng triệu người ngoài kia đang chờ bạn. Yes!
        </p>
      </section>
      <section className="mission-section">
        <div className="row align-items-center g-4">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="mission-section__content">
              <div className="section-header text-center mb-4">
                <h1 className="section-title">SỨ MỆNH CỦA CHÚNG TÔI:</h1>
              </div>
              <h3 className="mission-section__subtitle">
                Giúp bạn Thay Đổi cách chơi trò chơi sự nghiệp để có cuộc sống Tự Do, Ảnh Hưởng và
                An Nhiên tự tại giữa dòng đời tấp nập.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="imagination-section">
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
        <div className="container">
          <div className="content-box">
            <h3 className="title">07 Giá Trị Của Chúng Tôi:</h3>
            <p className="description">
              1. Chúng tôi tin tưởng vào việc thách thức và phá vỡ hiện tại. Câu hỏi yêu thích của
              chúng tôi là: "Liệu có cách chơi nào hay hơn, hiệu quả hơn không?"
            </p>
            <p className="description">
              2. Chúng tôi ở đây là để thay đổi bạn, thay đổi cách làm, thay đổi sự nghiệp và thay
              đổi thế giới thay vì đi theo lối món.
            </p>
            <p className="description">
              3. Chúng tôi dựa vào dữ liệu thực tế từ đó tìm ra nguyên nhân gốc rễ của vấn đề và tìm
              ra cách giúp bạn thoát khỏi rào cản để tiến về cuộc sống tự do, hạnh phúc hơn.
            </p>
            <p className="description">
              4. Chúng tôi tin vào tính chuyên gia và chuyên nghiệp, có nghĩa là liên tục học hỏi để
              phát triển, không chấp nhận vậy là giỏi rồi, không ngủ quên trên chiến thắng và giúp
              bạn cũng làm được như vậy.
            </p>
            <p className="description">
              5. Chúng tôi tin vào tài năng của bạn, dù xuất phát điểm thế nào, nếu chịu học hỏi,
              tìm đúng cách, tìm đúng người dẫn dắt bạn điều thành công vượt trội.
            </p>
            <p className="description">
              6. Chúng tôi tin vào việc té ngã để trưởng thành là tất nhiên của cuộc sống. Vì vậy
              chúng tôi luôn tin vào bạn sẽ đứng lên mạnh mẽ sau những cú va vấp và luôn tìm cách hỗ
              trợ bạn.
            </p>
            <p className="description">
              7. Chúng tôi tin rằng có nhiều cá nhân mong muốn có cuộc sống và sự nghiệp ý nghĩa như
              cách chúng tôi đang làm. Luôn ngày đêm tìm kiếm những con người ấy. Nếu là bạn hãy
              cùng song hành cùng chúng tôi. Yes!
            </p>
          </div>
        </div>
      </section>
      <section className="section-04">
        <div className="find">
          <div className="container">
            <h2>
              <span className="bold-text">THAM GIA CÙNG CHÚNG TÔI ĐỂ CÓ</span>{' '}
              <span className="script-text">SỰ NGHIỆP TRONG MƠ</span>
            </h2>
            <div className="underline"></div>
            <p className="description">
              Mỗi ngày chúng tôi luôn làm việc với những khách hàng, đối tác họ luôn nhiệt huyết,
              vượt trở ngại và truyền cảm hứng cho chúng tôi hoàn thành sứ mệnh.
            </p>
            <p className="sub-text">
              Nếu bạn tin tưởng vào năng lực và chuyên môn của mình, tại sao bạn không cùng là khách
              hàng hay đối tác hoặc cách nào đó để chúng ta cùng giúp thể giới này phát triển và
              hạnh phúc hơn.
            </p>
            <ul className="list">
              {listItems.map((item, index) => {
                return (
                  <li key={index} className="list-item">
                    {item.text}
                    {item.subtext && <span className="subtext"> {item.subtext}</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <Registration />
      <ScrollRestoration />
    </div>
  );
};

export default Careers;
