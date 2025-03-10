import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

import serDv1 from '../../assets/img/project/ser-dv1.png';
import './home.scss';

const listItems = [
  {
    text: 'Bước 1: Đánh giá bản thân Đầu tiên, chúng ta đánh giá bản thân bạn với tư cách là nhà sáng lập doanh nghiệp, để từ đó đưa ra phương hướng cho doanh nghiệp mình.',
    bold: 'Bước 1: Đánh giá bản thân',
  },
  {
    text: 'Bước 2: Ý tưởng kinh doanh Lựa chọn ý tưởng kinh doanh bền vững và tạo ra mỏ vàng trong tương lai và dài hạn, không chộp giật, chắp vá.',
    bold: 'Bước 2: Ý tưởng kinh doanh',
  },
  {
    text: 'Bước 3: Lựa chọn khách hàng - Phân tích đối thủ Lựa chọn phân khúc khách hàng trong mơ của mình, nhóm người mình muốn phục vụ và phân tích đối thủ để biết người biết ta.',
    bold: 'Bước 3: Lựa chọn khách hàng - Phân tích đối thủ',
  },
  {
    text: 'Bước 4: Marketing - Thu hút khách hàng Đồng hành cùng bạn dây dựng kế hoạch marketing để thu hút khách hàng tiềm năng và bạn sẽ không bao giờ lo lắng về việc thiếu khách hàng từ giờ về sau.',
    bold: 'Bước 4: Marketing - Thu hút khách hàng',
  },
  {
    text: 'Bước 5: Quy trình bán hàng Xây dựng quy trình bán hàng đỉnh cao, trăm trận trăm thắng với 10 bí mật nghệ thuật chốt sales.',
    bold: 'Bước 5: Quy trình bán hàng',
  },
  {
    text: 'Bước 6: Xây dựng đội ngũ Xây dựng đội ngũ nhân sự và phân công công việc, vai trò, để đạt hiệu quả, hiệu suất tối ưu',
    bold: 'Bước 6: Xây dựng đội ngũ',
  },
  {
    text: 'Bước 7: Pháp lý kinh doanh Giúp bạn hiểu về pháp lý mô hình kinh doanh của bạn và giảm thiểu rủi ro về pháp lý cũng như thuế.',
    bold: 'Bước 7: Pháp lý kinh doanh',
  },
  {
    text: 'Bước 8: Tài chính doanh nghiệp Giúp bạn nắm về tài chính, vốn ban đầu, vốn lưu động, chuẩn bị dòng vốn để lớn mạnh và đây là bí mật lớn của người giàu.',
    bold: 'Bước 8: Tài chính doanh nghiệp',
  },
  {
    text: 'Bước 9: Start Up thôi !!! Bắt đầu với doanh nghiệp của chính bạn, trở thành một ông chủ bài bản từ giờ và mãi mãi về sau',
    bold: 'Bước 9: Start Up thôi !!!',
  },
];

const ServiceDetails = () => {
  return (
    <>
      <section className="service-details section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="service-details__image">
                <img src={serDv1} alt="Business Branding" className="img-fluid" />
              </div>
              <br />
              <div className="service-details__image">
                <img src={serDv1} alt="Business Branding" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-details__content" data-aos="fade-up" data-aos-duration="1400">
                <div className="section-header text-center mb-4">
                  <h1 className="section-title">Chúng Tôi Giúp Gì Cho Bạn</h1>
                </div>
                <h3 className="service-details__subtitle">
                  Chúng tôi dẫn dắt và đồng hành cùng bạn 12 - 18 tháng xây dựng lộ trình khởi sự
                  kinh doanh từng bước cho đến khi bạn sở hữu trọn vẹn 01 doanh nghiệp và đủ năng
                  lực làm chủ doanh nghiệp ấy.
                </h3>

                <ul className="service-details__list">
                  {listItems.map((item, index) => (
                    <li key={index} className="service-details__list-item">
                      {item.text.split(item.bold).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && <b>{item.bold}</b>}
                        </React.Fragment>
                      ))}
                      <br />
                      {item.subtext && <span className="subtext"> {item.subtext}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollRestoration />
    </>
  );
};

export default ServiceDetails;
