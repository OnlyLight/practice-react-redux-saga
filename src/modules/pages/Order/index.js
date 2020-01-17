import React from 'react';
import Wrapper from '../../layouts/Wrapper';
import Breadcrumb from '../../common/Breadcrumb';
import Tag from './elements/Tag';
import Info from './elements/Info';
import Table from './elements/Table';

const Order = () => {
  return (
    <Wrapper>
      <div className="section-order">
        <div className="container">
          <Breadcrumb
            list={[
              { path: '/', title: 'Trang chủ' },
              { path: '/order', title: 'Danh sách đơn hàng' },
            ]}
          />
          <h4 className="section-order__title">Đơn hàng</h4>
          <div className="row">
            <div className="col-xl-9 col-12">
              <Tag />
              <Table />
            </div>
            <div className="col-xl-3 col-12 mt-5 mt-xl-0">
              <Info />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Order;
