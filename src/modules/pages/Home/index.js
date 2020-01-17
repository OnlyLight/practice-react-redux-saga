import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import About from './elements/About';
import ProductSpecial from './elements/ProductSpecial';
import SlideNewProduct from './elements/SlideNewProduct';
import Info from './elements/Info';
import Blog from './elements/Blog';
import Wrapper from '../../layouts/Wrapper';
import { fetchNewProducts, fetchHotSales } from '../../../actions/fetchApi/Home/product';

const Home = (props) => {
  const { onNewProduct, onHotSale, newProduct, hotSales } = props;
  useEffect(() => {
    onNewProduct();
    onHotSale();
  }, [onNewProduct, onHotSale]);

  return (
    <Wrapper check="true">
      <div className="home">
        <About />
        <ProductSpecial />
        <SlideNewProduct title="sản phẩm mới" list={newProduct} />
        <Info />
        <SlideNewProduct title="sản phẩm bán chạy" list={hotSales} />
        <Blog />
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    newProduct: state.newProductReducer,
    hotSales: state.hotSaleReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewProduct: () => {
      dispatch(fetchNewProducts());
    },
    onHotSale: () => {
      dispatch(fetchHotSales());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
