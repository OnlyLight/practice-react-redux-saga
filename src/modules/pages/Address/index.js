import React from 'react';
import Breadcrumb from '../../common/Breadcrumb';
import Wrapper from '../../layouts/Wrapper';
import InfoItem from './elements/InfoItem';
import FromInfo from './elements/FromInfo';
import FromEdit from './elements/FromEdit';

const Address = () => {
  return (
    <Wrapper>
      <div className="section-address">
        <div className="container">
          <Breadcrumb
            list={[
              { path: '/', title: 'Trang chủ' },
              { path: '/address', title: 'Địa chỉ' },
            ]}
          />
          <h4 className="section-address__title">địa chỉ</h4>
          <div className="row">
            <div className="col-lg-6 col-12">
              <h5 className="section-address__your-address section-address__title-sub">
                Địa chỉ của bạn
              </h5>
              <FromInfo />
            </div>
            <div className="col-lg-6 col-12 mt-lg-0 mt-5">
              <div className="section-address__title-sub">
                <button className="section-address__add-address" href="#">
                  Thêm địa chỉ
                </button>
              </div>
              <FromEdit />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <InfoItem check="true" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <InfoItem />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Address;
