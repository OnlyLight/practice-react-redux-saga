import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../../assets/images/Home-assets/logo.png';
import ImageDropdown from '../../assets/images/Home-assets/logo-dropdown.jpg';

const Menu = () => {
  const [active, setActive] = useState(false);
  const styleClassMenu = classNames('menu-header__info', {
    responsive: active,
  });

  const clickShowMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="menu-header menu-header--bottom">
      <div className="menu-header__main container">
        <div className="menu-header__brand">
          <Link className="menu-header__logo" to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
          <div className="icon-bar" onClick={clickShowMenu}>
            <i className="fa fa-bars" />
          </div>
        </div>
        <div className={styleClassMenu}>
          <div className="menu-header__content">
            <ul className="menu-header__list">
              <li className="menu-header__item">
                <Link className="menu-header__link" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="menu-header__item menu-header__item--dropdown js-dropdown">
                <Link className="menu-header__link" to="/">
                  Rượu vang đỏ
                </Link>
                <div className="menu-header__dropdown">
                  <div className="menu-header__wrap js-wrap">
                    <div className="menu-header__wrap-item">
                      <h6>Rượu Vang</h6>
                      <ul className="menu-header__wrap-item-sub">
                        <li>
                          <Link to="/">Rượu Chivas</Link>
                        </li>
                        <li>
                          <Link to="/">Hàng độc - Rượu độc đáo</Link>
                        </li>
                        <li>
                          <Link to="/">Johnnie Walker</Link>
                        </li>
                        <li>
                          <Link to="/">Rượu Remy Martin</Link>
                        </li>
                        <li>
                          <Link to="/">Rượu Glenmorngie</Link>
                        </li>
                        <li>
                          <Link to="/">Johnnie Walker</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-header__wrap-item">
                      <h6>Rượu Vang</h6>
                      <ul className="menu-header__wrap-item-sub">
                        <li>
                          <Link to="#">Rượu Chivas</Link>
                        </li>
                        <li>
                          <Link to="#">Hàng độc - Rượu độc đáo</Link>
                        </li>
                        <li>
                          <Link to="#">Johnnie Walker</Link>
                        </li>
                        <li>
                          <Link to="#">Rượu Remy Martin</Link>
                        </li>
                        <li>
                          <Link to="#">Rượu Glenmorngie</Link>
                        </li>
                        <li>
                          <Link to="#">Johnnie Walker</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-header__wrap-item">
                      <h6>Rượu Vang</h6>
                      <ul className="menu-header__wrap-item-sub">
                        <li>
                          <Link to="#">Rượu Chivas</Link>
                        </li>
                        <li>
                          <Link to="#">Hàng độc - Rượu độc đáo</Link>
                        </li>
                        <li>
                          <Link to="#">Johnnie Walker</Link>
                        </li>
                        <li>
                          <Link to="#">Rượu Remy Martin</Link>
                        </li>
                        <li>
                          <Link to="#">Rượu Glenmorngie</Link>
                        </li>
                        <li>
                          <Link to="#">Johnnie Walker</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-header__wrap-item">
                      <img src={ImageDropdown} alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-header__item">
                <Link className="menu-header__link nav-transform" to="#">
                  Rượu Trắng
                </Link>
              </li>
              <li className="menu-header__item">
                <Link className="menu-header__link nav-transform" to="#">
                  Champagne
                </Link>
              </li>
              <li className="menu-header__item">
                <Link className="menu-header__link nav-transform" to="#">
                  Thông tin
                </Link>
              </li>
              <li className="menu-header__item">
                <Link className="menu-header__link nav-transform" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="menu-header__item">
                <Link className="menu-header__link nav-transform" to="/">
                  Liên Hệ
                </Link>
              </li>
            </ul>
            <ul className="menu-header__further">
              <li className="menu-header__item">
                <Link
                  className="menu-header__link menu-header__link--regular"
                  to="#"
                >
                  Tài khoản của tôi
                </Link>
              </li>
              <li className="menu-header__item">
                <Link
                  className="menu-header__link menu-header__link--regular"
                  to="/order"
                >
                  Trạng thái đơn hàng
                </Link>
              </li>
              <li className="menu-header__item">
                <Link
                  className="menu-header__link menu-header__link--regular"
                  to="#"
                >
                  Danh sách ưa thích
                </Link>
              </li>
              <li className="menu-header__item">
                <Link
                  className="menu-header__link menu-header__link--regular"
                  to="/cart"
                >
                  Giỏ hàng
                </Link>
              </li>
              <li className="menu-header__item">
                <Link
                  className="menu-header__link menu-header__link--regular"
                  to="/login"
                >
                  Đăng nhập
                </Link>
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
            <form className="menu-header__form-search menu-header__form-search--bottom">
              <input type="text" placeholder="Tìm kiểm ở đây ..." />
              <button className="btn-search" type="submit">
                <i className="fa fa-search btn-search" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
