import React from 'react';
import Breadcrumb from '../../common/Breadcrumb';
import CartItem from './elements/CartItem';
import Wrapper from '../../layouts/Wrapper';

const Cart = () => {
  const listItem = [
    { title: 'Rượu vang đỏ', imgName: 'wine.png' },
    { title: 'Rượu vang đỏ', imgName: 'wine.png' },
    { title: 'Rượu vang đỏ', imgName: 'wine.png' },
  ];

  return (
    <Wrapper>
      <div className="section-cart">
        <div className="container">
          <Breadcrumb
            list={[
              { path: '/', title: 'Trang chủ' },
              { path: '/product', title: 'Sản phẩm' },
              { path: '/cart', title: 'Giỏ hàng' },
            ]}
          />
          <h4 className="section-cart__title">Giỏ hàng</h4>
          <div className="section-cart__main">
            <table className="section-cart__table table-responsive-md">
              <tbody>
                <tr className="section-cart__row">
                  <td className="section-cart__row__title">Ảnh</td>
                  <td className="section-cart__row__title">Tên Sản phẩm</td>
                  <td className="section-cart__row__title">Giá</td>
                  <td className="section-cart__row__title">Số lượng</td>
                  <td className="section-cart__row__title">Tổng số</td>
                  <td className="section-cart__row__title">Xoá</td>
                </tr>
                {listItem.map((item, idx) => (
                  <CartItem
                    key={idx}
                    title={item.title}
                    imgName={item.imgName}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
