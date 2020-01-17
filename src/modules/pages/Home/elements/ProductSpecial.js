import React from 'react';

const ProductSpecial = props => {
  return (
    <section className="home__product-special">
      <div className="container">
        <div className="home__bg-center">
          <img
            className="img-wine"
            src={require('../../../../assets/images/Home-assets/img-top-center.jpg')}
            alt="img center"
          />
          <div className="home__infomation--detail">
            <div className="row">
              <div className="col-lg-6 col-12 home__sale">
                <img
                  className="home__sale__img"
                  src={require('../../../../assets/images/Home-assets/wine_green.png')}
                  alt="img wine"
                />
                <img
                  className="home__sale__img"
                  src={require('../../../../assets/images/Home-assets/icon-sale.png')}
                  alt="icon arrow"
                />
              </div>
              <div className="col-lg-6 col-12 home__info-further">
                <h4 className="home__intro">Rượu nho năm 1987</h4>
                <h2 className="price">
                  330.000<sup>đ</sup>
                </h2>
                <button className="home__info-further__btn">Add to cart</button>
                <p>
                  Một hợp chất có trong rượu vang được gọi là resveratro có khả
                  năng làm tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn
                  chặn mật độ ôxy hoá của protein béo.
                </p>
                <table className="home__table-info">
                  <tbody>
                    <tr>
                      <td>
                        <span>334</span>
                        <br />
                        <span>Ngày</span>
                      </td>
                      <td>
                        <span>26</span>
                        <br />
                        <span>Giờ</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>60</span>
                        <br />
                        <span>Phút</span>
                      </td>
                      <td>
                        <span>15</span>
                        <br />
                        <span>Giây</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecial;
