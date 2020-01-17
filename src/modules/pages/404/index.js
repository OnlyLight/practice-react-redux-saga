import React from 'react';

const NotFound = () => {
  return (
    <div className="section-error">
      <div className="section-error__img">
        <img src={require('../../../assets/images/404/404.png')} alt="" />
      </div>
      <div className="section-error__info">
        <div className="section-error__logo">
          <a href="home.html">
            <img src={require('../../../assets/images/404/logo.png')} alt="" />
          </a>
        </div>
        <ul className="section-error__list">
          <li className="section-error__item">
            <a className="section-error__item__link" href="home.html">
              Trang Chủ
            </a>
          </li>
          <li className="section-error__item">
            <a className="section-error__item__link" href="contact.html">
              Liên Hệ
            </a>
          </li>
          <li className="section-error__search">
            <form action="#">
              <input className="section-error__input" type="text" />
              <i className="fa fa-search"></i>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
