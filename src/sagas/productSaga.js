import * as Types from '../constants/actionTypes';
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchBreadcrumbProduct() {
  try {
    const receivceBreadcrumb = yield Api.getBreadCrumbProduct();
    yield put({
      type: Types.FETCH_BREADCRUMB_PRODUCT_SUCCESS,
      receivceBreadcrumb,
    });
  } catch (error) {
    yield put({ type: Types.FETCH_BREADCRUMB_PRODUCT_FAILED });
  }
}

function* fetchGridProduct() {
  try {
    const receivceListProduct = yield Api.getGridProduct();
    yield put({
      type: Types.FETCH_LIST_PRODUCT_GRID_SUCCESS,
      receivceListProduct,
    });
  } catch (error) {
    yield put({ type: Types.FETCH_LIST_PRODUCT_GRID_FAILED });
  }
}

function* fetchListProduct() {
  try {
    const receivceListProduct = yield Api.getListProduct();
    yield put({
      type: Types.FETCH_LIST_PRODUCT_SUCCESS,
      receivceListProduct,
    });
  } catch (error) {
    yield put({ type: Types.FETCH_LIST_PRODUCT_FAILED });
  }
}

function* fetchProductTag() {
  try {
    const receivceProductTag = yield Api.getProductTag();
    yield put({
      type: Types.FETCH_PRODUCT_TAG_SUCCESS,
      receivceProductTag,
    });
  } catch (error) {
    yield put({ type: Types.FETCH_PRODUCT_TAG_FAILED });
  }
}

function* fetchProductCategory() {
  try {
    const receivceProductCategory = yield Api.getProductCategory();
    yield put({
      type: Types.FETCH_PRODUCT_CATEGORY_SUCCESS,
      receivceProductCategory,
    });
  } catch (error) {
    yield put({ type: Types.FETCH_PRODUCT_CATEGORY_FAILED });
  }
}

export function* watchFetchBreadcrumbProduct() {
  yield takeLatest(Types.FETCH_BREADCRUMB_PRODUCT, fetchBreadcrumbProduct);
}

export function* watchFetchGridProduct() {
  yield takeLatest(Types.FETCH_LIST_PRODUCT_GRID, fetchGridProduct);
}

export function* watchFetchListProduct() {
  yield takeLatest(Types.FETCH_LIST_PRODUCT, fetchListProduct);
}

export function* watchFetchProductTag() {
  yield takeLatest(Types.FETCH_PRODUCT_TAG, fetchProductTag);
}

export function* watchFetchProductCategory() {
  yield takeLatest(Types.FETCH_PRODUCT_TAG, fetchProductCategory);
}
