import React from 'react';
import classNames from 'classnames';

const InfoItem = ({ check = false }) => {
  const styleClass = classNames('section-address__info-wrap', {
    'section-address__border': check,
  });
  return (
    <div className={styleClass}>
      <div className="section-address__info">
        <span className="section-address__info__item">Tên</span>
        <span className="section-address__info__item">Giang</span>
      </div>
      <div className="section-address__info">
        <span className="section-address__info__item">Họ &amp; tên đệm</span>
        <span className="section-address__info__item">Lê Anh</span>
      </div>
      <div className="section-address__info">
        <span className="section-address__info__item">Công ty</span>
        <span className="section-address__info__item">
          Cổ phần công nghệ DKT
        </span>
      </div>
      <div className="section-address__info">
        <span className="section-address__info__item">Địa chỉ</span>
        <span className="section-address__info__item">
          Tòa nhà Hà Nội Group, 442 Đội Cấn, Ba Đình, Hà Nội
        </span>
      </div>
      <div className="section-address__info">
        <span className="section-address__info__item">Thành phố</span>
        <span className="section-address__info__item">Hà Nội</span>
      </div>
      <div className="section-address__info">
        <span className="section-address__info__item">Quốc Tịch</span>
        <span className="section-address__info__item">Việt Nam</span>
      </div>
      <div className="section-address__info">
        <span className="section-address__info__item">Postal/Zip Code</span>
        <span className="section-address__info__item">2300089</span>
      </div>
      <div className="section-address__info">
        <span className="section-address__info__item">Phone</span>
        <span className="section-address__info__item">0974554928</span>
      </div>
      <div className="section-address__edit">
        <button className="section-address__add-address" href="#">
          Chỉnh sửa địa chỉ
        </button>
      </div>
    </div>
  );
};

export default InfoItem;
