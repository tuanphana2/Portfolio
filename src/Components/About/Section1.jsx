import React from 'react';

import './section1.scss';
import img1 from '../../assets/img/banner/img1.jpg';

const Section1 = () => {
  return (
    <section className="section1">
      <div className="container">
        <div className="content-left">
          <p>
            Tôi biết trồng hoa, nuôi cá cảnh, nuôi gà để bán có tiền năm 11 tuổi. Bởi tôi sinh ra ở
            vùng quê nghèo ở nông thôn, miền núi thuộc Huyện Cam Ranh khi xưa. Không những thế tôi
            còn là anh hai của 05 đứa em bé nhỏ khi ấy. Ba mẹ nhà nông mà không có đất làm nông nên
            bán xe nước nhỏ trước trường học. Để có tiền tiêu vặt tôi đã nghĩ ra cách như vậy để
            bán.
          </p>
          <p>
            Thấm thoát cũng đến tuổi lên học cấp 3 ở thị trấn Ba Ngòi khi ấy, nhà tôi cách trường
            25km nên mỗi ngày tôi phải đạp xe đạp đi và về để đi học, đi dọc đường biển nắng và gió
            có lẽ nó luyện cho tôi em ý chí và bản lĩnh sau này.
          </p>
          <p>
            Rồi Tôi vào Sài Gòn học đại học, bạn bè học xong cấp 3 đưa lên Đà Lạt, đưa ra Nha Trang,
            đưa học tại Quy Nhơn, Đà Nẵng. Sài Gòn đa phần tụi bạn tránh vì khó thi đậu, mà có đậu
            thì chi phí cuộc sống đắt đỏ. Tụi bạn thời ấy đa phần gia đình nào cũng nghèo nên chọn
            cách như vậy để đỡ chi phí. Tôi còn nghèo hơn các bạn nhưng tôi nghĩ khác nên chọn Sài
            Gòn. Đơn giản vì khi ấy tôi nghĩ vào Sài Gòn mới dễ kiếm việc làm thêm để làm ra tiền
            nuôi mình ăn học và đúng ý vậy tôi đã làm được không những thế tôi còn nuôi thêm 02 đứa
            em nữa khi vẫn còn là sinh viên.
          </p>
          <p>
            Ra trường, tôi vào làm việc Xuất Nhập khẩu cho một công ty Taiwan khi ấy đầu tư vào nước
            ta sản xuất đồ gỗ xuất khẩu, lương bổng, thu nhập thêm khi làm chứng từ hải quan, thuế,
            CO… với công việc và thu nhập ấy là mơ ước của bạn bè. Nhưng với tôi thì không. Nhiều
            đêm tôi nằm ngủ trong căn phòng trọ mà thao thức. Với công việc và kiếm tiền như vầy thì
            khi nào mới đủ tiền có căn nhà be bé ở Sài Gòn này? Tôi trằn trọc thao thức bào đêm.
          </p>
        </div>
        <div className="content-right">
          <img src={img1} alt="about me" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
