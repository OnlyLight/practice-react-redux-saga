import * as Types from '../constants/actionTypes';

export const breadcrumbProduct = (breadcrumb = [], action) => {
  switch (action.type) {
    case Types.FETCH_BREADCRUMB_PRODUCT_SUCCESS:
      return action.receivceBreadcrumb;
    case Types.FETCH_BREADCRUMB_PRODUCT_FAILED:
      return [];
    default:
      return breadcrumb;
  }
};

export const productGrid = (list = [], action) => {
  switch (action.type) {
    case Types.FETCH_LIST_PRODUCT_GRID_SUCCESS:
      return action.receivceListProduct;
    case Types.FETCH_LIST_PRODUCT_GRID_FAILED:
      return [];
    default:
      return list;
  }
};

export const productList = (list = [], action) => {
  switch (action.type) {
    case Types.FETCH_LIST_PRODUCT_SUCCESS:
      return action.receivceListProduct;
    case Types.FETCH_LIST_PRODUCT_FAILED:
      return [];
    default:
      return list;
  }
};

export const productTag = (tags = [], action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_TAG_SUCCESS:
      return action.receivceProductTag;
    case Types.FETCH_PRODUCT_TAG_FAILED:
      return [];
    default:
      return tags;
  }
};

export const productCategory = (list = [], action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_CATEGORY_SUCCESS:
      return action.receivceProductCategory;
    case Types.FETCH_PRODUCT_CATEGORY_FAILED:
      return [];
    default:
      return list;
  }
};
