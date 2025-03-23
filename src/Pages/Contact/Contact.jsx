import React from 'react';

import './contact.scss';
import MapSection from './MapSection';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="behind-header"></section>
      <section className="contact-section">
        <div className="container">
          <div className="content-left">
            <h1 className="title">Contact</h1>
            <div className="contact-cards">
              {[
                {
                  icon: '🏢',
                  title: 'Địa chỉ doanh nghiệp',
                  content: '199 Điện Biên Phủ, P.15, Bình Thạnh, Thành phố Hồ Chí Minh',
                },
                {
                  icon: '📞',
                  title: 'Thông tin doanh nghiệp',
                  content: 'Số điện thoại: 0906 76 12 15',
                  subContent: 'Gmail: info@betraining.org',
                },
                {
                  icon: '⏰',
                  title: 'Thời Gian Làm Việc',
                  content: 'Thứ hai - Thứ sáu: 08:00 - 20:00',
                  subContent: 'Không làm việc các ngày lễ',
                },
              ].map(({ icon, title, content, subContent }, index) => (
                <div key={index} className="contact-card">
                  <div className="icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{content}</p>
                  {subContent && <p>{subContent}</p>}
                </div>
              ))}
            </div>

            <div className="register-section">
              <h2>Đăng ký để được hỗ trợ sớm nhất từ Học Viện Số</h2>
              <button className="register-btn">Đăng Ký Ngay</button>
            </div>
          </div>
          <div className="content-right">
            <MapSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
