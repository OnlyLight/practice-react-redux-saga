import * as Types from '../../../constants/actionTypes';

export const fetchPostBlog = () => {
  return {
    type: Types.FETCH_BLOG_PAGE,
  };
};

export const fetchPostBlogSuccess = (receivePost) => {
  return {
    type: Types.FETCH_BLOG_PAGE_SUCCESS,
    receivePost,
  };
};

export const fetchPostBlogFailed = (error) => {
  return {
    type: Types.FETCH_BLOG_PAGE_FAILED,
    error,
  };
};

export const fetchPostBlogWithID = (id) => {
  return {
    type: Types.FETCH_BLOG_WITH_ID,
    id,
  };
};

export const fetchPostBlogSuccessWithID = (receivePost) => {
  return {
    type: Types.FETCH_BLOG_PAGE_WITH_ID_SUCCESS,
    receivePost,
  };
};

export const fetchPostBlogFailedWithID = (error) => {
  return {
    type: Types.FETCH_BLOG_PAGE_WITH_ID_FAILED,
    error,
  };
};
