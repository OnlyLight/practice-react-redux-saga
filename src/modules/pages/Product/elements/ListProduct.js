import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Pagination from './Pagination';
import ProductSlide from '../../../common/ProductSlide';
import ProductItem from './ProductItem';
import {
  fetchGridProduct,
  fetchListProduct,
} from '../../../../actions/fetchApi/Product/listProduct';

const ListProduct = props => {
  const {
    productGrid,
    onLoadGridProduct,
    productList,
    onLoadListProduct,
  } = props;

  useEffect(() => {
    onLoadGridProduct();
    onLoadListProduct();
  }, [onLoadGridProduct, onLoadListProduct]);

  let [active, setActive] = useState(true);
  const clickChoose = text => {
    return e => {
      if (text === 'grid') {
        setActive((active = true));
      } else {
        setActive((active = false));
      }
    };
  };

  return (
    <div>
      <Pagination active={active} clickChoose={clickChoose} />
      <div
        className={classNames('section-product__grid product', {
          hidden: !active,
        })}
      >
        {productGrid.map((item, idx) => (
          <ProductSlide
            key={idx}
            title={item.title}
            imgMain={item.imgMain}
            icon={item.icon}
          />
        ))}
      </div>
      <div
        className={classNames('section-product__list', {
          hidden: active,
        })}
      >
        {productList.map((item, idx) => (
          <ProductItem
            key={idx}
            title={item.title}
            imgName={item.imgName}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    breadcrumbProduct: state.breadcrumbProduct,
    productGrid: state.productGrid,
    productList: state.productList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadGridProduct: () => {
      dispatch(fetchGridProduct());
    },
    onLoadListProduct: () => {
      dispatch(fetchListProduct());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListProduct);
