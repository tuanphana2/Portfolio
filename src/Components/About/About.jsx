import React from 'react';

import TwoButton from '../Shared/Button/TwoButton';
import './about.scss';

const About = () => {
  return (
    <div className="about-container">
      <section className="under-header"></section>
      <section className="hero">
        <h1>Câu Chuyện Của Tôi</h1>
        <p>Bài học 16 tỷ Đồng năm 2005</p>
      </section>

      <section className="section-1">
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
          <img src="https://matiasdark.github.io/matias-dark/images/about-me.jpg" alt="about me" />
        </div>
      </section>
      <section className="section-2">
        <h2>TỪ GIẢ CON ĐƯỜNG CÔNG THUÊ CHUYỂN SANG LÀM CHỦ</h2>
        <p>
          Sau bao đêm thao thức tôi nhận ra rằng chỉ có làm chủ mới có cơ hội đổi đời, đằng nào cũng
          đã nghèo rồi, có gì để mất đâu, tiền còn không có thì mất cái gì? Thế là tôi nghỉ việc ra
          bán nước mắm. Đơn giản khi ấy lấy nước mắm Cam Ranh của ông anh rồi đi bán lại ở Sài Gòn,
          mất 03 tháng tôi cũng tìm ra được Bí Quyết bán nước mắm. Nó giúp tôi có thu nhập tốt, có
          dư tôi mua được miếng đất nhỏ nhỏ 5 x 16m trong cuộc đời của mình.
        </p>
        <p>
          Rồi tôi lại có tiền dư ra tiếp tôi lại ủ mưu làm gỗ, vì khi ấy khách hàng nước ngoài công
          ty cũ suốt ngày họ nói tôi làm đi họ mua cho. Tôi bán toàn bộ sự nghiệp làm nước mắm cho 1
          người nhân viên của tôi khi ấy để chuyển sang làm gỗ.
        </p>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="divider"></div>
          <h2 className="heading-title">CÓ TIỀN, MẤT TIỀN VÀ KIỆT QUỆ</h2>
          <div className="divider"></div>
          <p className="sub-text-1">
            Lúc đầu tôi tìm các xưởng gỗ đặt hàng cho khách hàng thì rất ok, tôi khoẻ và có thu
            nhập, sau đó tôi mở xưởng be bé ở Bình Dương cũng rất ok và thu nhập tốt hơn, rồi xưởng
            tôi to hơn, tiền mua máy, mua nguyên liệu, công nhân đông lên có lúc đến 200 con người.
            Giò nghĩ lại thôi mà tôi còn lạnh cả sống lưng. Không hiểu sao khi ấy mình lao ra làm
            như vậy chứ?
          </p>
          <p className="sub-text-2">
            Tôi đầu tắt mặt tối, từ sáng đến khuya đủ thứ công việc và sự vụ, chất lượng cuộc giống
            giảm, tiền thu về không đủ chi, miếng đất tôi mua khi xưa cũng phải bán để lo chi trả.
            Sau tất cả tôi phá sản mất 16 tỷ khi ấy. Những vẫn còn chút may mắn là tôi không bị mang
            nợ nần. Để sau này tôi mới phát hiện ra Bí Mật của Thất Bại Thanh Lịch.
          </p>
        </div>
      </section>

      <section className="section-4">
        <h2>30 TUỔI TÔI TAY TRẮNG RA NHÀ TRỌ Ở, KIỆT QUÊ, MẤT NIỀM TIN VÀO CHÍNH MÌNH</h2>
        <p>
          “Tưởng rằng mình sẽ giàu có khi ra làm chủ ai ngờ về tay trắng mà khổ trần ai”. Tôi mua 1
          tiệm photocopy nhỏ để cho 02 đứa em làm có tiền ra vô tiêu xài, bản thân tôi đi giao báo
          từng nhà buổi sáng để qua ngày, để không bị ù lì, trong thời gian đó tôi suy nghĩ phải làm
          gì tiếp theo đây. Những có thấy gì tiếp đâu.
        </p>
        <p>
          Mất 03 tháng sau, sáng Thư 2 hôm đó tôi cầm tờ Báo Tuổi Trẻ khi ấy đọc và tôi nhận ra một
          cơ hội mới đó là Chứng Khoán, lập tức khi ấy tôi lấy xe máy chạy ngay lên khu phố Wall của
          Việt Nam ở Q1, đường Nguyễn Công Trứ. Tôi nhìn ra một góc nhìn mới nó thay đổi toàn bộ sự
          nghiệp cuộc đời tôi sau này.
        </p>
      </section>

      <section className="section-5">
        <h2>GÓC NHÌN MỚI, CÔNG VIỆC MỚI, MỐI QUAN HỆ MỚI THAY ĐỔI SỰ NGHIỆP CỦA TÔI</h2>
        <p>
          Tôi bắt nhịp làm Cò chứng khoán, mô giới cổ phiếu OTC thời ấy và xem tin giá cổ phiếu,
          giúp các nhà đầu tư bận rộn không có thời gian lên sàn mua bán giúp họ. Tôi không có tiền
          chơi cổ phiếu đâu, tôi chỉ làm Cò đúng nghĩa luôn. Tôi quen những con người mới họ giỏi
          giang, nhiều tiền, thông minh và siêng năng. Cũng tại đây tôi gặp Chú là nhà đầu tư ở đây,
          02 chú cháu hợp nhau nên càng ngày càng thân.
        </p>
        <p>
          Chú là người giúp mình nhận ra điểm mạnh thực sự của mình thời điểm đó là gì? Cách nào để
          khoét sâu vào nó? Từng bước đi như thế nào? Sau này những khái niệm ở phương tây đưa về
          cũng như những chương trình học mới biết chú đã là người Mentor cho tôi. Tất nhiên thời
          điểm ấy tôi cũng không biết và chú cũng không biết mình là một Mentor vĩ đại. Bài học gặp
          đúng Mentor cuộc đời sẽ thay đổi.
        </p>
      </section>

      <section className="section-6">
        <h2>ĐẾN SINGAPORE HỌC ĐỂ NÂNG CẤP MÌNH</h2>
        <p>
          Nhờ chú Mentor, tôi biết mình đã sai lầm gì và cần tập trung vào gì để mình mạnh mẽ, khác
          biệt và trở nên đặc biệt. Tôi khăn gói qua Singapore học những khoá học của những Chuyên
          Gia, Guru trên thế giới về đây chia sẻ. Từ đây tôi mới hệ thống được những gì mình đã trải
          qua trước đó như: Những việc khi nhỏ mình làm để có tiền, việc lo cho các em học, việc tư
          lo cho mình, tại sao học ngành quản trị doanh nghiệp, tại sao làm thuê chưa đến một năm,
          tại sao ra kinh doanh nước mắm, tại sao ra làm gỗ, tại sao khi mở nhỏ thì thành công mà
          làm lớn thất bại.
        </p>
        <p>
          Và cuối cùng tôi cũng tìm ra công thức thành công, giàu có và tư do cho cuộc đời mình.
          Thay vì lao ra làm kiếm tiền tôi đã sở hũu những kỹ năng thu nhập cao “ High Skill Income
          “. Chính nó đã giúp tôi: 1. Thu nhập cao, 2. Tự do về thời gian và công việc 3. Làm việc
          ra toàn thế giới không giới hạn ở địa phương, 4. Trở thành Mentor được nhiều người yêu quý
          5. Ứng dụng công nghệ để hiệu quả hơn.
        </p>
      </section>
      <section className="section-7">
        <h2>LÀM THẾ NÀO TỰ DO VỀ CÔNG VIỆC VÀ THỜI GIAN MÀ VẪN CÓ THU NHẬP CAO?</h2>
        <h5>
          Thật ra trước đó tôi rất chăm chỉ và siêng năng, cày ngày, cày đêm, không những thế tôi
          sống rất tiết kiệm, chắt chiu từng chút nhưng kết quả tài chính vẫn không khá là bao. Tôi
          tự hỏi có cách nào khác hơn không? Chính vì may mắn gặp Mentor, chính vì tôi chịu tìm
          Chuyên Gia giỏi, thành công, giàu có để học hỏi và dần sau đó tôi đã trả lời được các câu
          hỏi:
        </h5>
        <p>1. Làm sao để tôi có thể nâng cao thu nhập của mình?</p>
        <p>2. Làm sao để sự nghiệp không tiêu tốn quá nhiều thời gian của tôi?</p>
        <p>3. Làm sao để tôi làm việc năng lượng cao và không bị kiệt sức, kiệt quệ?</p>
        <p>4. Làm sao để công việc không cướp mất thời gian dành cho con của tôi?</p>
        <p>5. Làm sao tôi đi trải nghiệm khắp thế giới?</p>
        <h5>
          ⇒ Và tôi nhận ra rằng tất cả vấn đề trên nó không là vấn đề CHÍNH CON NGƯỜI TÔI MỚI LÀ VẤN
          ĐỀ LỚN NHẤT nó cản trở tôi đến với những điều tuyệt vời trên.
        </h5>
        <h4>Việc mở điểm nghẽn ở chính con người mình nó giúp tôi đạt được cả 03:</h4>
        <p>1. Sự nghiệp mơ ước với thu nhập cao.</p>
        <p>2. Có thời gian cho com và gia đình.</p>
        <p>3. Có sức khoẻ và trải nghiệm khắp thế giới.</p>
      </section>
      <section className="section-8">
        <h2>
          Tôi gặp bạn bè và những mối quan hệ cung như viết bài chia sẻ trên mạng xã hội. Họ hay hỏi
          tôi LÀM THẾ NÀO ĐỂ CÓ CUỘC SỐNG VÀ SỰ NGHIỆP GIỐNG TÔI
        </h2>
        <h4>
          ⇒ Đây là câu hỏi Tuyệt Vời! Bởi tôi cũng từng hỏi như vậy rất nhiều lần trước đây. Cũng
          giống như người Mentor vĩ đại, tôi cũng nhiệt tình chia sẻ, một số tiếp thu rất tốt, nhưng
          số đông còn lại vẫn không thể tự làm, vẫn loay hoay, nghe xong về để đó. Khi ấy tôi nhận
          ra:
        </h4>
        <p>
          1. Có 1 số ít người họ chỉ cần nghe qua ý tưởng là về làm dược bởi họ đã có sẵn năng lực.
        </p>
        <p>2. Có khá nhiều bạn nghe xong về làm rồi quay lại hỏi, rồi về làm, rồi hỏi.</p>
        <p>3. Có rất nhiều cần phải dành thời gian giảng giải, chỉ tận tay mới làm được.</p>
        <p>4. Và có người nghe về để đó không làm gì cả, thậm chí còn chê bai, tiêu cực.</p>
        <h4>
          ⇒ Trong khi thời gian của tôi có hạn, nhưng tôi nhận ra nhóm 2 & 3 ở trên nếu có kèm cặp,
          dẫn dắt từng bước họ sẽ làm được và đạt cuộc sống cũng như sự nghiệp mà họ hằng mơ ước.
          Nên tôi quyết định thành lập:
        </h4>
        <h6>
          1. Vườn Ươm Doanh Nhân - Be Training: Nơi giúp những bạn chính chọn cho mình con người làm
          chủ doanh nghiệp.
        </h6>
        <h6>
          2. Mô hình Chuyên Gia: Nơi giúp cho những ai đang giỏi về chuyên môn trở thành Chuyên Gia
          và xây dựng doanh nghiệp Chuyên Gia của riêng mình.
        </h6>
        <TwoButton />
      </section>
      <section className="section-9">
        <h4>
          Ngày này: Be Training - Vườn Ươm Doanh Nhân: Chúng tôi chia sẻ có bạn cách đi từng bước
          chuyển từ Trò Chơi Làm Công, làm Thuê → Sang trở Chơi Làm Ông Chủ - Chủ Doanh Nghiệp bằng
          LỘ TRÌNH KINH DOANH 10 BƯỚC.
        </h4>
        <h6>
          Và Học Viện Mentor X: Giúp cho bạn chuyển từ Dân Chuyên Môn → Sang Chuyên gia và giúp bạn
          Xây Dựng Mô Hình Kinh Doanh Chuyên Gia để sở hữu doanh nghiệp Chuyên Gia của riêng bạn.
        </h6>
        <p>
          1. Sự Nghiệp Đỉnh Cao, 2. Cuộc Sống Tự Do và Hạnh Phúc 3. Tự Do Tài Chính… là những thứ mà
          bạn đáng được hưởng nên sống cuộc đời này của bạn quá Lãng Phí.
        </p>
      </section>
      <section className="section-10">
        <div className="container">
          <div className="content-box">
            <h3 className="title">05 GIÁ TRỊ CỦA CHÚNG TÔI:</h3>
            <p className="description">
              1. Chúng tôi Phá Vỡ sự nghiệp Nghèo Ổn Định mà bạn đang cố bám vào nó để giúp bạn ở
              thành ông chủ và trở thành chuyên gia được xã hội tôn trọng.
            </p>
            <p className="description">
              2. Chúng tôi tìm kiếm những ai Cam Kết đi đến khát khao thành công mãnh liệt và đồng
              hành, dẫn dắt để bạn có một sự nghiệp thành công và phi thường.
            </p>
            <p className="description">
              3. Chúng tôi tiên phong trong việc áp dụng mô hình công nghệ mới để giúp ông chủ và
              chuyên gia được tự do và gây ảnh hưởng rộng lớn hơn.
            </p>
            <p className="description">
              4. Chúng tôi có động lực, có quyết tâm, có cam kết, có quy trình để tiến đến phát
              triển cao hơn mỗi ngày và cũng giúp bạn làm được điều này.
            </p>
            <p className="description">
              5. Chúng tôi luôn muốn giúp nhiều người hơn nữa thành công trên con đường làm chủ và
              con đường chuyên gia bởi nó sẽ giúp cho xã hội thịnh vượng hơn. Vì thế mà mỗi ngày
              chúng tôi luôn nâng cao, rèn luyện và mãi dũa tay nghề của mình đạt tầm cao hơn.
            </p>
          </div>
        </div>
        <h3>Nếu bạn đang Tìm Kiếm 05 Giá Trị trên Hãy Tham Gia Cùng Chúng Tôi. Yes!</h3>
      </section>
    </div>
  );
};

export default About;
