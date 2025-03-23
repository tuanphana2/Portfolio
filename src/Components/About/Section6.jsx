import React from 'react';

import './section6.scss';
import img1 from '../../assets/img/banner/211.jpg';

const Section6 = () => {
  return (
    <section className="section6">
      <div className="container">
        <div className="content-left">
          <p className='content-1'>
            Thật ra trước đó tôi rất chăm chỉ và siêng năng, cày ngày, cày đêm, không những thế tôi
            sống rất tiết kiệm, chắt chiu từng chút nhưng kết quả tài chính vẫn không khá là bao.
          </p>
          <p className='content-2'>
            Tôi tự hỏi có cách nào khác hơn không? Chính vì may mắn gặp Mentor, chính vì tôi chịu
            tìm Chuyên Gia giỏi, thành công, giàu có để học hỏi và dần sau đó tôi đã trả lời được
            các câu hỏi:
          </p>
          <p>1. Làm sao để tôi có thể nâng cao thu nhập của mình?</p>
          <p>2. Làm sao để sự nghiệp không tiêu tốn quá nhiều thời gian của tôi?</p>
          <p>3. Làm sao để tôi làm việc năng lượng cao và không bị kiệt sức, kiệt quệ?</p>
          <p>4. Làm sao để công việc không cướp mất thời gian dành cho con của tôi?</p>
          <p>5. Làm sao tôi đi trải nghiệm khắp thế giới?</p>
          <p className='content-3'>
            ⇒ Và tôi nhận ra rằng tất cả vấn đề trên nó không là vấn đề CHÍNH CON NGƯỜI TÔI MỚI LÀ
            VẤN ĐỀ LỚN NHẤT nó cản trở tôi đến với những điều tuyệt vời trên.
          </p>
          <p className='content-4'>Việc mở điểm nghẽn ở chính con người mình nó giúp tôi đạt được cả 03:</p>
          <p>1. Sự nghiệp mơ ước với thu nhập cao.</p>
          <p>2. Có thời gian cho com và gia đình.</p>
          <p>3. Có sức khoẻ và trải nghiệm khắp thế giới.</p>
        </div>
        <div className="content-right">
          <img src={img1} alt="Career change" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
