import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className="section-contact__info">
      <div className="section-contact__logo">
        <img
          src={require('../../../../assets/images/Home-assets/logo.png')}
          alt=""
        />
      </div>
      <div className="section-contact__info">
        <div className="section-contact__info__detail">
          <i className="fa fa-map-marker" />
          <span className="section-contact__info__text">
            Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, P. Cống Vị, Q. Ba Đình,
            Hà Nội
          </span>
        </div>
        <div className="section-contact__info__detail">
          <i className="fa fa-phone" />
          <span className="section-contact__info__text">(04) 6674 2332</span>
        </div>
        <div className="section-contact__info__detail">
          <i className="fa fa-envelope" />
          <span className="section-contact__info__text">support@bizweb.vn</span>
        </div>
      </div>
      <span className="section-contact__text">FOLLOW US</span>
      <div className="section-contact__network">
        <Link to="#">
          <i className="fa fa-facebook" />
        </Link>
        <Link to="#">
          <i className="fa fa-google-plus" />
        </Link>
        <Link to="#">
          <i className="fa fa-twitter" />
        </Link>
        <Link to="#">
          <i className="fa fa-youtube-play" />
        </Link>
        <Link to="#">
          <i className="fa fa-pinterest" />
        </Link>
        <Link to="#">
          <i className="fa fa-vk" />
        </Link>
      </div>
    </div>
  );
};

export default Info;
