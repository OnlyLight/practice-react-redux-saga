import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../../common/Breadcrumb';
import Category from './elements/Category';
import Compare from './elements/Compare';
import Tag from './elements/Tag';
import ListProduct from './elements/ListProduct';
import Wrapper from '../../layouts/Wrapper';
import { fetchBreadcrumbProduct } from '../../../actions/fetchApi/Product/breadcrumb';

const Product = (props) => {
  const { breadcrumbProduct, onLoadBreadcrumb } = props;

  useEffect(() => {
    onLoadBreadcrumb();
  }, [onLoadBreadcrumb]);

  return (
    <Wrapper>
      <section className="section-product">
        <div className="container">
          <Breadcrumb list={breadcrumbProduct} />

          <div className="section-product__banner">
            <img
              className="img-fluid"
              src={require('../../../assets/images/Product-assets/banner.png')}
              alt=""
            />
          </div>

          <div className="section-product__body">
            <div className="row">
              <div className="col-lg-3">
                <Category />
                <Compare />
                <Tag />
                <div className="section-product__adv d-none d-lg-block">
                  <img
                    src={require('../../../assets/images/Product-assets/img-adv-bottom.png')}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-9 mt-5 mt-lg-0">
                <ListProduct />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    breadcrumbProduct: state.breadcrumbProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadBreadcrumb: () => {
      dispatch(fetchBreadcrumbProduct());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
