import * as Types from '../../../constants/actionTypes';

export const fetchProductTag = () => {
  return {
    type: Types.FETCH_PRODUCT_TAG,
  };
};

export const fetchProductTagSuccess = receivceProductTag => {
  return {
    type: Types.FETCH_PRODUCT_TAG_SUCCESS,
    receivceProductTag,
  };
};

export const fetchProductTagFailed = error => {
  return {
    type: Types.FETCH_PRODUCT_TAG_FAILED,
    error,
  };
};

export const fetchProductCategory = () => {
  return {
    type: Types.FETCH_PRODUCT_CATEGORY,
  };
};

export const fetchProductCategorySuccess = receivceProductCategory => {
  return {
    type: Types.FETCH_PRODUCT_CATEGORY_SUCCESS,
    receivceProductCategory,
  };
};

export const fetchProductCategoryFailed = error => {
  return {
    type: Types.FETCH_PRODUCT_CATEGORY_FAILED,
    error,
  };
};
