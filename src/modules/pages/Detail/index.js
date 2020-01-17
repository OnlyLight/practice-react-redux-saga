import React from 'react';
import Wrapper from '../../layouts/Wrapper';
import Breadcrumb from '../../common/Breadcrumb';
import Slide from './elements/Slide';
import Content from './elements/Content';
import Tab from './elements/Tab';

const Detail = () => {
  return (
    <Wrapper>
      <section className="section-detail">
        <div className="container">
          <Breadcrumb
            list={[
              { path: '/', title: 'Trang chủ' },
              { path: '/product', title: 'Sản phẩm' },
              { path: '', title: 'Rượu vang đỏ' },
            ]}
          />
          <div className="section-detail__products row">
            <div className="col-12 col-lg-6 offset-lg-3 col-xl-7 offset-xl-0">
              <Slide />
            </div>
            <div className="section-detail__info-product col-12 col-xl-5 mt-5 mt-xl-0">
              <Content />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7">
              <Tab />
            </div>
            <div className="section-detail__image-wine col-xl-5">
              <img
                src={require('../../../assets/images/Detail-assets/img-sidebar.png')}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Detail;
