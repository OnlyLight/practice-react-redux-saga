import React from 'react';

const ProductSlide = props => {
  const { title, imgMain, icon = '' } = props;

  return (
    <div className="product-item">
      <div className="product-item__info-top">
        <div className="product-item__img">
          <div className="product-item__wrap">
            <img
              src={require('../../assets/images/Home-assets/' + imgMain + '')}
              alt=""
            />
          </div>
          {icon && (
            <img
              className="arrow"
              src={require('../../assets/images/Home-assets/' + icon + '')}
              alt=""
            />
          )}
        </div>
        <ul className="product-item__info-further">
          <li className="product-item__item">
            <button className="product-item__info-sub product-item__info-sub--first">
              <i className="fa fa-heart" />
              &nbsp; Yêu thích
            </button>
          </li>
          <li className="product-item__item">
            <button className="product-item__info-sub product-item__info-sub--second">
              <i className="fa fa-signal" />
              &nbsp; So sánh
            </button>
          </li>
          <li className="product-item__item">
            <button className="product-item__info-sub product-item__info-sub--third">
              <i className="fa fa-expand" />
              &nbsp;
            </button>
          </li>
        </ul>
      </div>
      <div className="product-item__info-bottom">
        <h6 className="product-item__info-title">{title}</h6>
        <div className="product-item__info-price">
          <span>
            370.000<sup>đ</sup>
          </span>
          <span className="dash">-</span>
          <span className="price-old">
            450.000<sup>đ</sup>
          </span>
        </div>
        <button className="product-item__info-btn">add to cart</button>
      </div>
    </div>
  );
};

export default ProductSlide;
