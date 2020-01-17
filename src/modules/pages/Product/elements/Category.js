import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';
import { fetchProductCategory } from '../../../../actions/fetchApi/Product/sidebar';

const Category = props => {
  const { productCategory, onLoadCategory } = props;
  useEffect(() => {
    onLoadCategory();
  }, [onLoadCategory]);

  return (
    <div className="section-product__category">
      <h4 className="section-product__title">Danh mục sản phẩm</h4>
      {productCategory.map((item, idx) => (
        <CategoryItem key={idx} title={item.title} list={item.list} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productCategory: state.productCategory,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadCategory: () => {
      dispatch(fetchProductCategory());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
