import * as Types from '../../../constants/actionTypes';

export const fetchGridProduct = () => {
  return {
    type: Types.FETCH_LIST_PRODUCT_GRID,
  };
};

export const fetchGridProductSuccess = receivceListProduct => {
  return {
    type: Types.FETCH_LIST_PRODUCT_GRID_SUCCESS,
    receivceListProduct,
  };
};

export const fetchGridProductFailed = error => {
  return {
    type: Types.FETCH_LIST_PRODUCT_GRID_FAILED,
    error,
  };
};

export const fetchListProduct = () => {
  return {
    type: Types.FETCH_LIST_PRODUCT,
  };
};

export const fetchListProductSuccess = receivceListProduct => {
  return {
    type: Types.FETCH_LIST_PRODUCT_SUCCESS,
    receivceListProduct,
  };
};

export const fetchListProductFailed = error => {
  return {
    type: Types.FETCH_LIST_PRODUCT_FAILED,
    error,
  };
};
