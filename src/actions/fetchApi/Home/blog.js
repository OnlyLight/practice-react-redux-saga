import * as Types from '../../../constants/actionTypes';

export const fetchBlogContent = () => {
  return {
    type: Types.FETCH_BLOG_CONTENT,
  };
};

export const fetchBlogContentSuccess = (receviceBlog) => {
  return {
    type: Types.FETCH_BLOG_CONTENT_SUCCESS,
    receviceBlog,
  };
};

export const fetchBlogContentFailed = (error) => {
  return {
    type: Types.FETCH_BLOG_CONTENT_FALIED,
    error,
  };
};

export const fetchBlogCustomer = () => {
  return {
    type: Types.FETCH_BLOG_CUSTOMER,
  };
};

export const fetchBlogCustomerSuccess = (receviceBlog) => {
  return {
    type: Types.FETCH_BLOG_CUSTOMER_SUCCESS,
    receviceBlog,
  };
};

export const fetchBlogCustomerFailed = (error) => {
  return {
    type: Types.FETCH_BLOG_CUSTOMER_FALIED,
    error,
  };
};
