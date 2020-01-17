import React from 'react';

const ProductItem = props => {
  const { title, content, imgName } = props;

  return (
    <div className="section-product__list__item row">
      <div className="col-lg-4">
        <div className="section-product__list__img">
          <img
            src={require('../../../../assets/images/Home-assets/' +
              imgName +
              '')}
            alt=""
          />
        </div>
      </div>
      <div className="col-lg-8">
        <div className="section-product__list__infomation">
          <h5 className="section-product__list__title">{title}</h5>
          <span className="section-product__list__price">
            330.000<sup>đ</sup>
          </span>
          <p className="section-product__list__paragraph">{content}</p>
          <button className="section-product__list__btn-add">
            Add to cart
          </button>
          <div className="section-product__list__group-btn">
            <button className="section-product__list__btn heart">
              <i className="fa fa-heart"></i>Yêu thích
            </button>
            <button className="section-product__list__btn">
              <i className="fa fa-signal"></i>So sánh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
