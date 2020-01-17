import React from 'react';
import Wrapper from '../../layouts/Wrapper';
import Breadcrumb from '../../common/Breadcrumb';

const SignUp = () => {
  return (
    <Wrapper>
      <section className="section-signup">
        <div className="container">
          <Breadcrumb
            list={[
              { path: '/', title: 'Trang chủ' },
              { path: '/sign-up', title: 'Đăng ký' },
            ]}
          />
          <div className="section-signup__top">
            <h4 className="section-signup__title">Đăng ký</h4>
            <button className="section-signup__btn">Đăng nhập</button>
          </div>
          <div className="section-signup__middle">
            <h6 className="section-signup__middle__title">Thông tin cá nhân</h6>
            <form className="section-signup__middle__form-personal" action>
              <div className="section-signup__middle__form-control">
                <label
                  className="section-signup__middle__item"
                  htmlFor="first-name"
                >
                  Tên trước *
                </label>
                <input
                  className="section-signup__middle__item section-signup__middle__input"
                  id="first-name"
                  type="text"
                />
              </div>
              <div className="section-signup__middle__form-control">
                <label
                  className="section-signup__middle__item"
                  htmlFor="last-name"
                >
                  Tên sau *
                </label>
                <input
                  className="section-signup__middle__item section-signup__middle__input"
                  id="last-name"
                  type="text"
                />
              </div>
              <div className="section-signup__middle__form-control">
                <label className="section-signup__middle__item" htmlFor="email">
                  Email *
                </label>
                <input
                  className="section-signup__middle__item section-signup__middle__input"
                  id="email"
                  type="text"
                />
              </div>
              <div className="section-signup__middle__form-control">
                <label
                  className="section-signup__middle__item"
                  htmlFor="password"
                >
                  Password *
                </label>
                <input
                  className="section-signup__middle__item section-signup__middle__input"
                  id="password"
                  type="password"
                />
              </div>
              <div className="section-signup__middle__form-control">
                <div className="section-signup__middle__item d-none d-sm-inline-block" />
                <div className="section-signup__middle__item">
                  <input id="news" type="checkbox" />
                  <label
                    className="section-signup__middle__news"
                    htmlFor="news"
                  >
                    Đăng ký nhận bản tin
                  </label>
                </div>
              </div>
            </form>
            <h6 className="section-signup__middle__title">
              Thông tin Đăng nhập
            </h6>
            <form action>
              <div className="section-signup__middle__form-control">
                <label className="section-signup__middle__item" htmlFor="pw">
                  Mật khẩu *
                </label>
                <input
                  className="section-signup__middle__item section-signup__middle__input"
                  id="pw"
                  type="password"
                />
              </div>
              <div className="section-signup__middle__form-control">
                <label
                  className="section-signup__middle__item"
                  htmlFor="pw-confirm"
                >
                  Xác nhận mật khẩu *
                </label>
                <input
                  className="section-signup__middle__item section-signup__middle__input"
                  id="pw-confirm"
                  type="password"
                />
              </div>
              <div className="section-signup__middle__button">
                <button type="submit">Gửi</button>
                <button>Quay Lại</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default SignUp;
