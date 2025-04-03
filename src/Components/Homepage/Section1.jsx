import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

const listItems = [
  {
    text: '1. Bạn đang tìm kiếm con đường thành công nhưng mãi loay hoay làm bạn kiệt quệ mà mất phương hướng? Hoặc Bạn đã đạt được một mức độ thành công trong sự nghiệp mà hầu hết mọi người chỉ mơ ước, nhưng bạn quá BẬN, Bạn đang khao khát được rảnh, những cái thứ bạn tạo ra ấy nó đang giữ bạn lại.',
    italic: 'Hoặc',
    bold: 'Bạn đang khao khát được rảnh',
  },
  {
    text: '2. Bạn bè và đồng nghiệp nhìn bạn với ánh mắt ghen tị vì bạn đang có sự nghiệp, nhưng sâu thẳm bên trong bạn cảm thấy mệt mỏi, đuối khi phải gánh vác quá nhiều thứ và mong muốn nghỉ đi cho khoẻ.',
    bold: 'bạn cảm thấy mệt mỏi, đuối khi phải gánh vác quá nhiều thứ',
  },
  {
    text: '3. Bạn yêu quý gia đình của mình, nhưng bên trong cảm thấy có lỗi  vì chưa có thời gian nhiều cho con, cho ba mẹ,  gia đình đứng sau sự nghiệp và Bạn muốn hiện diện trong khoảnh khắc ý nghĩa không muốn bỏ lỡ và sau này nuối tiếc.',
    bold: 'gia đình đứng sau sự nghiệp',
  },
  {
    text: '4. Bạn cũng nhận ra chính mình bị mắc kẹt trong sự đánh đổi vô tận giữa sự nghiệp, tiền bạc và danh vọng mà phải đánh đổi niềm yêu thích tự do, làm những việc mình yêu thích.',
    bold: 'bị mắc kẹt',
  },
  {
    text: '5. Đã vài lần Bạn cũng nghiêm túc cân nhắc việc bỏ đi những thứ làm mình kẹt cứng, nhưng sâu thẳm trong lòng thấy lo lắng rủi ro, thất bại, rồi cho rằng sẽ không bao giờ có được điều tốt đẹp như thế này nữa nếu lỡ té đau. Và Đôi khi bạn tự nhủ rằng cũng may mắn mà  rồi cố gắng thuyết phục bản thân rằng mọi thứ đều ổn, nhưng sâu thẳm bên trong bạn không vui vì bạn biết điều này là không bền vững.',
    italic: 'Và',
    bold: [
      'Đã vài lần Bạn cũng nghiêm túc cân nhắc việc bỏ đi',
      'bạn biết điều này là không bền vững',
    ],
  },
  {
    text: 'BẠN xứng đáng có: 1. Thu nhập siêu cao, 2. Tư do làm điều mình yêu thích, 3. Chia sẻ giá trị đến nhiều người, 4. Sở hữu doanh nghiệp riêng, 5. Trở thành chuyên gia trong ngành, 6. Làm việc ở bất kỳ đâu và  7. Có cuộc sống mơ ước.',
  },
  {
    text: 'Nếu BẠN đang tìm kiếm một trong những điều trên hay tất cả thì tôi có Tin Vui cho bạn đây. BẠN ĐÃ TÌM THẤY còn quyết định đi tiếp nữa không là ở Bạn đó.',
  },
];

const Section1 = () => {
  return (
    <>
      <section className="section-1 section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="section-1__image"></div>
              <br />
            </div>
            <div className="col-lg-6">
              <div className="section-1__content" data-aos="fade-up" data-aos-duration="1400">
                <div className="section-header text-center mb-4">
                  <h1 className="section-title">Chào BẠN, Tôi là Nguyễn Thái Duy</h1>
                </div>
                <h3 className="section-1__subtitle">
                  Mặc dù BẠN & TÔI chưa gặp nhau nhưng tôi cá là tôi biết một vài điều quan trọng về
                  bạn…Bạn có tin không?
                </h3>
                <ul className="section-1__list">
                  {listItems.map((item, index) => {
                    const boldWords = Array.isArray(item.bold)
                      ? item.bold
                      : [item.bold].filter(Boolean);
                    const italicWords = Array.isArray(item.italic)
                      ? item.italic
                      : [item.italic].filter(Boolean);
                    const regex = new RegExp(`(${[...boldWords, ...italicWords].join('|')})`, 'g');
                    return (
                      <li key={index} className="section-1__list-item">
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
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Section1;
