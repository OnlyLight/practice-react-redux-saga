import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductTag } from '../../../../actions/fetchApi/Product/sidebar';

const TagItem = props => {
  const { tag, link = '#' } = props;
  return (
    <li className="section-product__tag__item">
      <Link to={link}>{tag}</Link>
    </li>
  );
};

const Tag = props => {
  const { productTag, onLoadTag } = props;
  useEffect(() => {
    onLoadTag();
  }, [onLoadTag]);
  return (
    <div className="section-product__tag">
      <h4 className="section-product__title section-product__title--tag">
        Tag sản phẩm
      </h4>
      <ul className="section-product__tag__list">
        {productTag.map((item, idx) => (
          <TagItem key={idx} tag={item.tag} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productTag: state.productTag,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTag: () => {
      dispatch(fetchProductTag());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tag);
