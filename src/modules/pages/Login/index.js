import React from 'react';
import Breadcrumb from '../../common/Breadcrumb';
import Wrapper from '../../layouts/Wrapper';

const Login = () => {
  return (
    <Wrapper>
      <section className="section-login">
        <div className="container">
          <Breadcrumb
            list={[
              { path: '/', title: 'Trang chủ' },
              { path: '/login', title: 'Đăng nhập' },
            ]}
          />
          <div className="section-login__top">
            <h4 className="section-login__title">Đăng nhập</h4>
            <button className="section-login__btn">Đăng ký</button>
          </div>
          <div className="section-login__middle">
            <h6 className="section-login__middle__title">
              Khách hàng đăng nhập
            </h6>
            <p className="section-login__middle__paragraph">
              Nếu bạn có một tài khoản, xin vui lòng đăng nhập.
            </p>
            <form action>
              <div className="section-login__middle__form-control">
                <label className="section-login__middle__item" htmlFor="email">
                  Email *
                </label>
                <input
                  className="section-login__middle__item section-login__middle__input"
                  id="email"
                  type="text"
                />
              </div>
              <div className="section-login__middle__form-control">
                <label
                  className="section-login__middle__item"
                  htmlFor="password"
                >
                  Password *
                </label>
                <input
                  className="section-login__middle__item section-login__middle__input"
                  id="password"
                  type="text"
                />
              </div>
              <div className="section-login__middle__form-control">
                <div className="section-login__middle__item" />
                <div className="section-login__middle__item">
                  <input id="forget" type="checkbox" />
                  <label
                    className="section-login__middle__forget"
                    htmlFor="forget"
                  >
                    Quên mật khẩu
                  </label>
                </div>
              </div>
              <div className="section-login__middle__form-control">
                <div className="section-login__middle__item" />
                <div className="section-login__middle__item">
                  <button className="section-login__middle__btn">
                    Đăng nhập
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Login;
