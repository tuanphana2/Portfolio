import React from 'react';

import FreeTraining from '../Components/FreeTraining/FreeTraining';
import '../Components/Programs/programs.scss';

const videos = [
  { videoId: '4FveZhGL8qY', title: 'Introduction to Our Event' },
  { videoId: 'p5-Jy_V1e44', title: 'Behind The Scenes' },
  { videoId: '34dkKNoWMC4', title: 'Special Guest Highlights' },
  { videoId: 'LqPKWBAGFNY', title: 'Keynote Speech Recap' },
];

const listItems = [
  {
    text: '1. Bạn đang là nhân viên văn phòng muốn ra mở doanh nghiệp, làm ông chủ mà loay hoay, lo sợ, nhát gang? Muốn thoát nơi ấy để ra làm chủ doanh nghiệp?',
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

const Programs = () => {
  return (
    <div className="programs-container">
      <section className="under-header"></section>
      <section className="hero">
        <h1>CHÚNG TÔI LÀM VIỆC HƯỚNG ĐẾN</h1>
        <h1>CHUYỂN ĐỔI VÀ KẾT QUẢ</h1>
        <p>
          Hơn 95% các khóa đào tạo ngoài kia chỉ mang tính Thông Tin, Kiến Thức đơn thuần - Tức là
          lên lớp thầy giáo đứng nói, nói, nói... bạn ngồi nghe rồi ghi ghi, chép chép, có cuốn sổ,
          tài liệu ghi đầy chữ, làm một ít thực hành với nhau sau đó đứng lên đi về. Về bạn làm
          được, hay không làm, hay làm chưa đúng,làm sai, muốn tối ưu hơn... cũng không ai hướng
          dẫn.
        </p>
        <p>
          Thậm chí bạn tự làm được thì ông thầy giáo nhận công, còn bạn loay hoay thì thầy giáo đâu
          không thấy. Bạn có thấy nhiều ngoài kia không?
        </p>
      </section>
      <section className="section-2">
        <h2>CHÚNG TÔI LÀM VIỆC HƯỚNG ĐẾN CHUYỂN ĐỔI VÀ KẾT QUẢ </h2>
        <p>
          Tất nhiên ở đây mỗi phương pháp nó có giá trị riêng của nó. Nếu bạn chỉ tìm ý tưởng và có
          năng lực tự hành động bạn có thể tham dự chương trình huấn luyện cấp thấp chuyên cung cấp
          thông tin, kiến thức nền tảng và tự mình phải làm tất cả.
        </p>
        <p>
          Chúng Tôi muốn nói đến Chương Trình Huấn Luyện Cao Cấp - Kèm Cặp Dẫn Dắt cho đến khi bạn
          Chuyển Đổi và Tạo Ra Kết quả và chúng tôi là Chuyên Gia trong việc làm này.
        </p>
        <p>
          Nghĩa là chúng tôi có quy trình, kinh nghiệm giúp bạn đi đến Thành Công tối ưu từ việc
          cung cấp kiến thức nền tảng, đến bài tập cá nhân hoá mô hình của riêng bạn, chuyển giao
          form mẫu, kỹ thuật, phần mềm. Mỗi phần đều có chuyên gia kèm cặp, chuyển giao cho đến khi
          bạn đạt kết quả.
        </p>
      </section>
      <section className="section-3">
        <div className="reasons-container">
          <div className="reasons-content">
            <span className="number">1</span>
            <div className="text-content">
              <h2>
                Đừng đến với Chúng Tôi nếu bạn không Đam Mê con đường Làm Chủ và Chuyên gia? Bạn chỉ
                đi rảo rảo tìm kiếm gì đó dễ mà nhanh giàu có. Kiểu việc nhẹ lương cao mà làm biếng
                thì chúng tôi không có quy trình này.
              </h2>
              <p>
                ⇒ Chúng tôi cũng đã từng nghĩ như vậy nhưng nó chỉ làm mất thời gian và tiền bạc
                thôi. Chúng tôi cho những ai đủ Đam Mê đi đến cùng. Thay vì tôi PHẢI LÀM thì chuyển
                sang TÔI YÊU QUÝ công việc này.
              </p>
            </div>
          </div>
        </div>
        <div className="reasons-container">
          <div className="reasons-content">
            <span className="number">2</span>
            <div className="text-content">
              <h2>
                Đừng đến với Chúng Tôi nếu bạn thấy cuộc sống Ổn Định như vậy đủ rồi? Khi đã thấy đủ
                nó làm cho bạn sẽ không đi đến đâu cả, bạn sẽ không nỗ lực và thậm chí cái gì cũng
                ren, suốt ngày thấy khó và toàn là tìm lý do biện minh.
              </h2>
              <p>
                ⇒ Chúng tôi tìm kiếm những ai yêu thích thành công và tự do mà không phải hy sinh
                cuộc sống của mình ở ổn định mà nghèo khó.
              </p>
            </div>
          </div>
        </div>
        <div className="reasons-container">
          <div className="reasons-content">
            <span className="number">3</span>
            <div className="text-content">
              <h2>
                Đừng đến với chúng tôi nếu chỉ để tìm một vài thủ thuật, miếng đánh để ngủ một đêm
                đến sáng sẽ giàu có và thành công. Giống kiểu tìm viên thuốc uống vô cái giàu liền.
              </h2>
              <p>
                ⇒ Chúng tôi chỉ làm việc với những ai sẵn sàng từng bước nâng cao năng lực làm Chủ
                Doanh Nghiệp & Năng Lực Chuyên Gia để từng đó bạn phát triển và thành công bền vững.
              </p>
            </div>
          </div>
        </div>
        <div className="reasons-container">
          <div className="reasons-content">
            <span className="number">4</span>
            <div className="text-content">
              <h2>
                Đừng đến với Chúng Tôi nếu bạn tìm cái gì đó dễ dễ làm mà không chịu nỗ lực chịu khó
                khổ luyện giai đoạn đầu?
              </h2>
              <p>
                Chúng tôi luôn hỗ trợ bạn 150%, tuy nhiên, đạt được thành công mà không có sự hy
                sinh & kiên trì là không thể. ⇒ Nếu bạn không sẵn lòng làm việc, chúng tôi không thể
                giúp bạn.
              </p>
              <p>
                Chúng tôi luôn làm cho nó đơn giản, chia sẻ cho bạn kế hoạch từng bước để nâng cấp
                cách bạn chơi trò chơi làm Sự nghiệp & Cuộc sống.
              </p>
              <p>
                Nhưng, mặc dù chúng tôi đã làm cho nó đơn giản, nhưng không thể làm cho nó DỄ DÀNG
                quá để bạn Làm Biếng.
              </p>
            </div>
          </div>
        </div>
        <div className="reasons-container">
          <div className="reasons-content">
            <span className="number">5</span>
            <div className="text-content">
              <h2>
                Đừng đến với Chúng Tôi nếu bạn chưa tìm hiểu rõ cách chúng tôi làm việc và không tin
                chúng tôi có thể giúp được bạn. Bạn đến cho vui, đến vì tò mò, đến để học lỏm, đến
                để bắt chước.
              </h2>
              <p>
                ⇒ Chúng tôi sẽ từ chối ngay lập tức khi bạn là như vậy. Chúng tôi sẵn sàng hết mình
                với ai luôn muốn tìm ra điểm đặc biệt và khác biệt trong sự nghiệp và cuộc sống của
                mình. Đừng sống núp dưới cái bóng của người khác.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="find">
          <div className="container">
            <h2 className="title">CHÚNG TÔI ĐANG TÌM KIẾM AI….?</h2>
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
          <div className="in-short">
            <div className="container">
              <h2 className="heading">
                <span className="script-text">Tóm Lại:</span>
              </h2>
              <h3 className="bold-text">
                Bạn phải có 1. Thu Nhập Siêu Cao. 2. Tự Do. 3. Được Tôn Trọng
              </h3>
              <p className="description">
                Bạn thực sự quan tâm đến chất lượng cuộc sống & nghiêm túc phát triển sự nghiệp
                tránh tình trạng kiệt sức mà tự do, hạnh phúc.
              </p>
              <p className="description">
                Hãy nhấp vào Nút bên dưới và xem hết Video mới nhất, nơi chúng tôi tiết lộ 05 chiến
                lược từng bước mà chúng tôi chia sẻ để giúp Bạn định hướng sự nghiệp vững mạnh với
                sự tự do tuyệt vời.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-5">
        <div className="container">
          <div className="section-header">
            <h1 className="subtitle">
              Bên Dưới là Những chủ doanh nghiệp & Chuyên Gia đã tham gia chương trình dẫn dắt của
              Chúng Tôi
            </h1>
            <h2 className="title">XEM NHỮNG CÂU CHUYỆN THÀNH CÔNG</h2>
          </div>
          <div className="video-grid">
            {videos.map((video, index) => (
              <div className="video-item" key={index}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <p className="video-title">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FreeTraining />
    </div>
  );
};

export default Programs;
