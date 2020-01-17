import React from 'react';
import Wrapper from '../../layouts/Wrapper';
import Breadcrumb from '../../common/Breadcrumb';

const Intro = () => {
  const info = {
    title: 'Chào mừng đến với wine hourse',
    content:
      'Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750ml.Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750ml.Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750ml..',
  };
  return (
    <Wrapper>
      <section className="section-intro">
        <div className="container">
          <Breadcrumb
            list={[
              { path: '/', title: 'Trang chủ' },
              { path: '/intro', title: 'Giới thiệu' },
            ]}
          />
          <h4 className="section-intro__title">Giới thiệu</h4>
          <div className="section-intro__infomation">
            <div className="row">
              <div className="col-lg-5 col-12">
                <div className="section-intro__img">
                  <img
                    src={require('../../../assets/images/Intro-assets/img-intro.png')}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <h4 className="section-intro__welcome">{info.title}</h4>
                <p className="section-intro__paragraph">{info.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Intro;
