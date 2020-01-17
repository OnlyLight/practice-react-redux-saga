import * as Types from '../../../constants/actionTypes';

export const fetchNewProducts = () => {
  return {
    type: Types.FETCH_NEW_PRODUCTS,
  };
};

export const fetchNewProductsSuccess = (receviceProduct) => {
  return {
    type: Types.FETCH_NEW_PRODUCT_SUCCESS,
    receviceProduct,
  };
};

export const fetchNewProductsFailed = (error) => {
  return {
    type: Types.FETCH_NEW_PRODUCT_FAILED,
    error,
  };
};

export const fetchHotSales = () => {
  return {
    type: Types.FETCH_HOT_SALES,
  };
};

export const fetchHotSalesSuccess = (receviceProduct) => {
  return {
    type: Types.FETCH_HOT_SALES_SUCCESS,
    receviceProduct,
  };
};

export const fetchHotSalesFailed = (error) => {
  return {
    type: Types.FETCH_HOT_SALES_FAILED,
    error,
  };
};
