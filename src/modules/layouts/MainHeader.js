import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = props => {
  return (
    <div className="menu-header__wrap container">
      <ul className="menu-header__category">
        <li className="menu-header__item">
          <Link className="menu-header__link menu-header__link--regular" to="#">
            Tài khoản của tôi
          </Link>
          <span className="dash">-</span>
        </li>
        <li className="menu-header__item">
          <Link
            className="menu-header__link menu-header__link--regular"
            to="/order"
          >
            Trạng thái đơn hàng
          </Link>
          <span className="dash">-</span>
        </li>
        <li className="menu-header__item">
          <Link className="menu-header__link menu-header__link--regular" to="#">
            Danh sách ưa thích
          </Link>
          <span className="dash">-</span>
        </li>
        <li className="menu-header__item">
          <Link
            className="menu-header__link menu-header__link--regular"
            to="/cart"
          >
            Giỏ hàng
          </Link>
          <span className="dash">-</span>
        </li>
        <li className="menu-header__item">
          <Link
            className="menu-header__link menu-header__link--regular"
            to="/login"
          >
            Đăng nhập
          </Link>
          <span className="dash">-</span>
        </li>
        <li className="menu-header__item">
          <Link
            className="menu-header__link menu-header__link--regular"
            to="/sign-up"
          >
            Đăng ký
          </Link>
        </li>
      </ul>
      <form className="menu-header__form-search" action="#">
        <input type="text" placeholder="Tìm kiểm ở đây ..." />
        <button className="btn-search" type="submit">
          <i className="fa fa-search btn-search" />
        </button>
      </form>
    </div>
  );
};

export default MainHeader;
