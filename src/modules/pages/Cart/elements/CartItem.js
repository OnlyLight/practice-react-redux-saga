import React from 'react';

const CartItem = props => {
  const { title, imgName } = props;
  return (
    <tr className="section-cart__row">
      <td className="section-cart__row__img">
        <img
          src={require('../../../../assets/images/Cart-assets/' + imgName)}
          alt=""
        />
      </td>
      <td className="section-cart__row__name">
        <span>{title}</span>
      </td>
      <td className="section-cart__row__price">
        <span>
          345.000<sup>đ</sup>
        </span>
      </td>
      <td className="section-cart__row__amount">
        <input className="js-amount-cart" type="number" value="1" />
      </td>
      <td className="section-cart__row__price">
        <span>
          345.000<sup>đ</sup>
        </span>
      </td>
      <td className="section-cart__row__remove">
        <button>
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
