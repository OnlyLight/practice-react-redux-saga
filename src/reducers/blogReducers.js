import * as Types from '../constants/actionTypes';

export const blogReducer = (post = [], action) => {
  switch (action.type) {
    case Types.FETCH_BLOG_PAGE_SUCCESS:
      return action.receivePost;
    case Types.FETCH_BLOG_PAGE_FAILED:
      return action.error;
    default:
      return post;
  }
};

export const blogReducerWithID = (post = [], action) => {
  switch (action.type) {
    case Types.FETCH_BLOG_PAGE_WITH_ID_SUCCESS:
      return action.receivePost;
    case Types.FETCH_BLOG_PAGE_WITH_ID_FAILED:
      return action.error;
    default:
      return post;
  }
};
