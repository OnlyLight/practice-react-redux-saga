import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className="section-order__info">
      <h6 className="section-order__title-list">Thông tin khách hàng</h6>
      <div className="section-order__info__item">
        <i className="fa fa-user" />
        <div className="section-order__info__text">
          <span>GiangLe</span>
          <span className="section-order__info__further">
            Leanhgiang89@gmail.com
          </span>
        </div>
      </div>
      <div className="section-order__info__item">
        <i className="fa fa-map-marker" />
        <div className="section-order__info__text">
          <span>Tòa nhà Hà Nội group</span>
          <span className="section-order__info__further">
            442 Đội Cấn, Ba Đình Hà Nội
          </span>
        </div>
      </div>
      <div className="section-order__info__item">
        <i className="fa fa-phone" />
        <div className="section-order__info__text section-order__info__phone">
          <span>(04) 3786 8904</span>
        </div>
      </div>
      <div className="section-order__link">
        <Link className="section-order__link__detail-address" to="#">
          Chi tiết địa chỉ
        </Link>
      </div>
    </div>
  );
};

export default Info;
