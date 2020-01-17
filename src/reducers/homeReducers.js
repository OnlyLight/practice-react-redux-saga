import * as Types from '../constants/actionTypes';

export const newProductReducer = (product = [], action) => {
  switch (action.type) {
    case Types.FETCH_NEW_PRODUCT_SUCCESS:
      return action.receviceProduct;
    case Types.FETCH_NEW_PRODUCT_FAILED:
      return action.error;
    default:
      return product;
  }
};

export const hotSaleReducer = (product = [], action) => {
  switch (action.type) {
    case Types.FETCH_HOT_SALES_SUCCESS:
      return action.receviceProduct;
    case Types.FETCH_HOT_SALES_FAILED:
      return action.error;
    default:
      return product;
  }
};

export const blogContentReducer = (blog = [], action) => {
  switch (action.type) {
    case Types.FETCH_BLOG_CONTENT_SUCCESS:
      return action.receviceBlog;
    case Types.FETCH_BLOG_CONTENT_FALIED:
      return action.error;
    default:
      return blog;
  }
};

export const blogCustomerReducer = (blog = [], action) => {
  switch (action.type) {
    case Types.FETCH_BLOG_CUSTOMER_SUCCESS:
      return action.receviceBlog;
    case Types.FETCH_BLOG_CUSTOMER_FALIED:
      return action.error;
    default:
      return blog;
  }
};
