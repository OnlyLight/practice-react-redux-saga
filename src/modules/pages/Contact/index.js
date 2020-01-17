import React from 'react';
import Wrapper from '../../layouts/Wrapper';
import Breadcrumb from '../../common/Breadcrumb';
import Info from './elements/Info';
import Form from './elements/Form';

const Contact = () => {
  return (
    <Wrapper>
      <section className="section-contact">
        <div className="container">
          <Breadcrumb
            list={[
              { path: '/', title: 'Trang chủ' },
              { path: '/contact', title: 'Địa chỉ' },
            ]}
          />
          <h4 className="section-contact__title">Liên hệ</h4>
          <div className="section-contact__main">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="section-contact__img">
                  <img
                    src={require('../../../assets/images/Contact-assets/map.png')}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-lg-3 mt-5 mt-lg-0 pr-lg-0">
                <Info />
              </div>
            </div>
            <div className="section-contact__form row">
              <div className="col-12 col-lg-8">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
