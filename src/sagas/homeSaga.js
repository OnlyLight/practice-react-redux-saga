import * as Types from '../constants/actionTypes';
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchNewProduct() {
  try {
    const receviceProduct = yield Api.getNewProductFromApi();
    yield put({ type: Types.FETCH_NEW_PRODUCT_SUCCESS, receviceProduct });
  } catch (error) {
    yield put({ type: Types.FETCH_NEW_PRODUCT_FAILED });
  }
}

function* fetchHotSale() {
  try {
    const receviceProduct = yield Api.getNewProductFromApi();
    yield put({ type: Types.FETCH_HOT_SALES_SUCCESS, receviceProduct });
  } catch (error) {
    yield put({ type: Types.FETCH_HOT_SALES_FAILED });
  }
}

function* fetchBlogContent() {
  try {
    const receviceBlog = yield Api.getBlogContentFromApi();
    yield put({ type: Types.FETCH_BLOG_CONTENT_SUCCESS, receviceBlog });
  } catch (error) {
    yield put({ type: Types.FETCH_BLOG_CONTENT_FALIED, error });
  }
}

function* fetchCustomer() {
  try {
    const receviceBlog = yield Api.getBlogCustomerFromApi();
    yield put({ type: Types.FETCH_BLOG_CUSTOMER_SUCCESS, receviceBlog });
  } catch (error) {
    yield put({ type: Types.FETCH_BLOG_CUSTOMER_FALIED });
  }
}

export function* watchFetchNewProduct() {
  yield takeLatest(Types.FETCH_NEW_PRODUCTS, fetchNewProduct);
}

export function* watchFetchHotSale() {
  yield takeLatest(Types.FETCH_HOT_SALES, fetchHotSale);
}

export function* watchFetchBlogContent() {
  yield takeLatest(Types.FETCH_BLOG_CONTENT, fetchBlogContent);
}

export function* watchFetchBlogCustomer() {
  yield takeLatest(Types.FETCH_BLOG_CUSTOMER, fetchCustomer);
}
