import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

import serDv1 from '../../assets/img/project/ser-dv1.png';

const listItems = [
  {
    text: '1. Làm thế nào từ một nhân viên ra sở hữu doanh nghiệp riêng mà không e ngại rủi ro, thất bại?',
  },
  {
    text: '2. Làm thế nào để doanh nghiệp bạn mang lại dòng tiền đều hàng tháng mà bạn không phải vắt kiệt sức cho nó?',
  },
  {
    text: '3. Làm cách nào doanh nghiệp bạn xuyên thấu qua được thị trường đầy rẫy cạnh tranh, chụp dựt, làm ăn kiểu con buôn, tróc phú ngoài kia?',
  },
  {
    text: '4. Làm gì để bạn không bị kiệt sức trên bàn làm việc mang tiếng là ông chủ, giám đốc của mình với lo toan công việc, chi phí, lương, thuế hàng tháng?',
  },
  {
    text: '5. Làm thế nào để bạn không lãng phí kinh nghiệm, chuyên môn, bí quyết sau những năm tháng làm việc để trở thành chuyên gia? (Không phải như đa phần ngoài kia làm lâu năm giỏi chuyên môn tự phong mình là chuyên gia)',
  },
  {
    text: '6. Làm sao để bạn xây dựng mô hình kinh doanh chuyên gia của mình xoay quanh năng lực chuyên gia của bạn?',
  },
  {
    text: '7. Làm thế nào để có thu nhập cao mà vẫn làm việc mỗi ngày chỉ 03 - 05 tiếng? Và đạt được cuộc sống tự do?',
  },
  {
    text: '8. Làm sao để bên trong bạn có Bộ Gen của doanh nhân thành công để việc thành công của bạn đến một cách tự nhiên?',
  },
  {
    text: '9. Và, làm sao để đạt được tất cả điều trên một cách nhẹ nhàng như nước chảy, không cần quá nỗ lực, thông minh, gồng mình?',
  },
];

const Section4 = () => {
  return (
    <>
      <section className="section-4 section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="section-4__image">
                <img src={serDv1} alt="Business Branding" className="img-fluid" />
              </div>
              <br />
            </div>
            <div className="col-lg-6">
              <div className="section-4__content" data-aos="fade-up" data-aos-duration="1400">
                <div className="section-header text-center mb-4">
                  <h1 className="section-title1">CUỘC SỐNG TRONG MƠ KHÔNG CẦN PHẢI HY SINH:</h1>
                </div>
                <h3 className="section-4__subtitle1">
                  LÀM THẾ NÀO ĐỂ TRỞ THÀNH CHỦ DOANH NGHIỆP MÀ KHÔNG CẦN PHẢI TRẢ GIÁ QUÁ NHIỀU THỨ?
                </h3>
                <h3 className="section-4__subtitle1">
                  KHÔNG CẦN PHẢI KIỆT SỨC, PHẢI QUÁ BẬN, PHẢI SỨC KHOẺ VÀ CHẤT LƯỢNG CUỘC SỐNG?
                </h3>
                <div className="section-header text-center mb-4">
                  <h1 className="section-title2">
                    NẾU NÓ ĐANG DIỄN RA THÌ ĐÓ LÀ BƯỚC LÙI TRONG SỰ NGHIỆP
                  </h1>
                </div>
                <h3 className="section-4__subtitle2">
                  Ngoài việc giúp những ai đang làm văn phòng và đang làm kinh doanh mà quá vất vả
                  sở hữu doanh nghiệp trong mơ thì chúng tôi còn giúp những ai giỏi trong lĩnh vực
                  của mình trở thành chuyên gia và sở hữu doanh nghiệp chuyên gia
                </h3>
                <ul className="section-4__list">
                  {listItems.map((item, index) => {
                    const boldWords = Array.isArray(item.bold)
                      ? item.bold
                      : [item.bold].filter(Boolean);
                    const italicWords = Array.isArray(item.italic)
                      ? item.italic
                      : [item.italic].filter(Boolean);
                    const regex = new RegExp(`(${[...boldWords, ...italicWords].join('|')})`, 'g');
                    return (
                      <li key={index} className="section-4__list-item">
                        {item.text.split(regex).map((part, i) =>
                          boldWords.includes(part) ? (
                            <b key={i} style={{ color: 'red' }}>
                              {part}
                            </b>
                          ) : italicWords.includes(part) ? (
                            <>
                              <i key={i} className="italic-text">
                                {part}
                              </i>
                            </>
                          ) : (
                            part
                          )
                        )}
                        {item.subtext && <span className="subtext"> {item.subtext}</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="widget-wrap">
              <div className="divider-text">
                <div className="widget-container">
                  <div className="divider">
                    <span className="divider-separator">
                      <div className="divider-text-element">
                        CUỘC ĐỜI VÀ SỰ NGHIỆP TRONG MƠ ĐANG CHỜ ĐÓN BẠN…
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="heading">
                <div className="widget-container">
                  <h2 className="heading-title1">
                    CHÚNG TÔI ĐÃ CÓ BÍ QUYẾT NÀY ĐƠN GIẢN LÀ BẠN CHƯA BIẾT THÔI
                  </h2>
                </div>
              </div>
              <div className="sub-heading">
                <div className="widget-container">
                  <p className="heading-title2">SỰ NGHIỆP TRONG MƠ KHÔNG CẦN QUÁ VẤT VẢ</p>
                </div>
              </div>
              <div className="btn-access">
                <a
                  className="button-link"
                  href="https://betraining.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="button-content-wrapper">
                    <span className="button-text">ĐĂNG KÝ NGAY</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Section4;
