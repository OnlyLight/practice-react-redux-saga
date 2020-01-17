import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__category">
          <div className="col-4 footer__brand">
            <img
              src={require('../../assets/images/Home-assets/authentic.png')}
              alt="brand"
            />
          </div>
          <div className="col-4 footer__brand">
            <img
              src={require('../../assets/images/Home-assets/retrobrand.png')}
              alt="brand"
            />
          </div>
          <div className="col-4 footer__brand">
            <img
              src={require('../../assets/images/Home-assets/bearbrand.png')}
              alt="brand"
            />
          </div>
        </div>
        <div className="row footer__wrap">
          <div className="col-xl-2 col-sm-6 col-12 footer__column">
            <h6>Thông tin</h6>
            <ul className="footer__info">
              <li>
                <Link className="footer__info-link" to="#">
                  Về Chúng tôi
                </Link>
              </li>
              <li>
                <Link className="footer__info-link" to="#">
                  Giao hàng
                </Link>
              </li>
              <li>
                <Link className="footer__info-link" to="#">
                  Cảm nghĩ
                </Link>
              </li>
              <li>
                <Link className="footer__info-link" to="#">
                  Lưu trữ
                </Link>
              </li>
              <li>
                <Link className="footer__info-link" to="#">
                  Chính sách riêng tư
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-sm-6 col-12 footer__column">
            <h6>Mua hàng</h6>
            <ul className="footer__info">
              <li>
                <Link className="footer__info-link" to="#">
                  Vận chuyển và trả hàng
                </Link>
              </li>
              <li>
                <Link className="footer__info-link" to="#">
                  Mua hàng an toàn
                </Link>
              </li>
              <li>
                <Link className="footer__info-link" to="#">
                  Vận chuyển quốc tế
                </Link>
              </li>
              <li>
                <Link className="footer__info-link" to="#">
                  Liên kết
                </Link>
              </li>
              <li>
                <Link className="footer__info-link" to="#">
                  Dịch vụ giảm giá
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-sm-6 col-12 footer__column">
            <h6>Gửi email</h6>
            <div className="footer__info">
              <p>Gửi email cho chúng tôi để được hỗ trợ</p>
              <form className="footer__send-mail">
                <input type="text" placeholder="Enter your email" />
                <button type="submit">Gửi</button>
              </form>
              <div className="footer__network">
                <i className="fa fa-twitter mr-2" />
                <i className="fa fa-google-plus mr-2" />
                <i className="fa fa-life-ring mr-2" />
                <i className="fa fa-linkedin mr-2" />
                <i className="fa fa-rss" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12 footer__column">
            <h6>Liên hệ</h6>
            <div className="footer__info">
              <div className="footer__detail">
                <i className="fa fa-map-marker" />
                <span>
                  Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, P. Cống Vị, Q. Ba
                  Đình, Hà Nội
                </span>
              </div>
              <div className="footer__detail">
                <i className="fa fa-phone" />
                <span>(04) 6674 2332</span>
                <span className="dash">-</span>
                <i className="fa fa-phone" />
                <span>(04) 3786 8904</span>
              </div>
              <div className="footer__detail">
                <i className="fa fa-phone" />
                <span>(08) 6680 9686</span>
                <span>
                  <i className="fa fa-envelope" />
                  <Link
                    className="footer__info-link footer__info-link--contact"
                    to="#"
                  >
                    Support@bizweb.vn
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container p-sm-0">
          <div className="footer__layout">
            <span>© Copyright 2008-2014 DKT Technology JSC</span>
            <div className="img-wrap">
              <Link to="#">
                <img
                  src={require('../../assets/images/Home-assets/master-card.png')}
                  alt="payment"
                />
              </Link>
              <Link to="#">
                <img
                  src={require('../../assets/images/Home-assets/visa.png')}
                  alt="payment"
                />
              </Link>
              <Link to="#">
                <img
                  src={require('../../assets/images/Home-assets/pay-pal.png')}
                  alt="payment"
                />
              </Link>
              <Link to="#">
                <img
                  src={require('../../assets/images/Home-assets/maestro.png')}
                  alt="payment"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
