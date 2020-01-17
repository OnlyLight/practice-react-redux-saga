import * as Types from '../constants/actionTypes';
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchPostBlog() {
  try {
    const receivePost = yield Api.getBlogPost();
    yield put({ type: Types.FETCH_BLOG_PAGE_SUCCESS, receivePost });
  } catch (error) {
    yield put({ type: Types.FETCH_BLOG_PAGE_FAILED });
  }
}

function* fetchPostBlogWithId(action) {
  try {
    const receivePost = yield Api.getBlogPostWithId(action.id);
    yield put({ type: Types.FETCH_BLOG_PAGE_WITH_ID_SUCCESS, receivePost });
  } catch (error) {
    yield put({ type: Types.FETCH_BLOG_PAGE_WITH_ID_FAILED });
  }
}

export function* watchFetchBlogPost() {
  yield takeLatest(Types.FETCH_BLOG_PAGE, fetchPostBlog);
}

export function* watchFetchBlogPostWithId() {
  yield takeLatest(Types.FETCH_BLOG_WITH_ID, fetchPostBlogWithId);
}
