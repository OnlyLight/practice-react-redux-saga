import * as Types from '../../../constants/actionTypes';

export const fetchBreadcrumbProduct = () => {
  return {
    type: Types.FETCH_BREADCRUMB_PRODUCT,
  };
};

export const fetchBreadcrumbProductSuccess = (receivceBreadcrumb) => {
  return {
    type: Types.FETCH_BREADCRUMB_PRODUCT_SUCCESS,
    receivceBreadcrumb,
  };
};

export const fetchBreadcrumbProductFailed = (error) => {
  return {
    type: Types.FETCH_BREADCRUMB_PRODUCT_FAILED,
    error,
  };
};
