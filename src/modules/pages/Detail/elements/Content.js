import React from 'react';

const Content = () => {
  return (
    <div>
      <h4 className="section-detail__title">Rượu nho năm 1987</h4>
      <span className="section-detail__price">
        330.000<sup>đ</sup>
      </span>
      <div className="section-detail__review">
        <div className="section-detail__rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half-o" />
          <i className="fa fa-star-o" />
          <span className="section-detail__rating-review">1 Review(S)</span>
          <button className="section-detail__rating-btn">
            Add Your Review
          </button>
        </div>
      </div>
      <p className="section-detail__text-color">Màu Sắc</p>
      <div className="section-detail__colors">
        <div className="section-detail__choose js-choose">
          <div className="section-detail__color section-detail__color--yellow" />
        </div>
        <div className="section-detail__choose js-choose active">
          <div className="section-detail__color section-detail__color--black" />
        </div>
        <div className="section-detail__choose js-choose">
          <div className="section-detail__color section-detail__color--red" />
        </div>
      </div>
      <p className="section-detail__text-color">Kích cỡ</p>
      <div className="section-detail__box">
        <select className="section-detail__box__size">
          <option value={1}>Loại lớn</option>
          <option value={2}>Loại lớn</option>
          <option value={3}>Loại lớn</option>
        </select>
      </div>
      <p className="section-detail__text-color">Số Lượng</p>
      <div className="section-detail__amount">
        <button className="section-detail__btn-amount section-detail__btn-amount--minus js-minus">
          <i className="fa fa-minus" />
        </button>
        <input
          className="section-detail__input-amount js-amount"
          type="number"
          defaultValue={3}
        />
        <button className="section-detail__btn-amount section-detail__btn-amount--plus js-plus">
          <i className="fa fa-plus" />
        </button>
      </div>
      <button className="section-detail__btn-add">Add to cart</button>
      <div className="section-detail__react">
        <button className="section-detail__react-btn">
          <i className="fa fa-heart" />
          Yêu thích
        </button>
        <button className="section-detail__react-btn sign">
          <i className="fa fa-signal" />
          So sánh
        </button>
        <button className="section-detail__react-btn">
          <i className="fa fa-envelope" />
          Email
        </button>
      </div>
      <p className="section-detail__text-color">Mô tả</p>
      <p className="section-detail__paragragh">
        Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm
        tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn chặn mật độ ôxy
        hoá của protein béo.
      </p>
      <div className="section-detail__network">
        <div className="section-detail__network-item">
          <img
            src={require('../../../../assets/images/Detail-assets/link-fb.png')}
            alt=""
          />
        </div>
        <div className="section-detail__network-item">
          <img
            src={require('../../../../assets/images/Detail-assets/tweet.png')}
            alt=""
          />
        </div>
        <div className="section-detail__network-item">
          <img
            src={require('../../../../assets/images/Detail-assets/g-plus.png')}
            alt=""
          />
        </div>
        <div className="section-detail__network-item">
          <img
            src={require('../../../../assets/images/Detail-assets/ln-share.png')}
            alt=""
          />
        </div>
        <div className="section-detail__network-item">
          <img
            src={require('../../../../assets/images/Detail-assets/pinit.png')}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
