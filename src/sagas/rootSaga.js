import { all, fork } from 'redux-saga/effects';
import {
  watchFetchBreadcrumbProduct,
  watchFetchGridProduct,
  watchFetchListProduct,
  watchFetchProductTag,
  watchFetchProductCategory,
} from './productSaga';
import {
  watchFetchNewProduct,
  watchFetchHotSale,
  watchFetchBlogContent,
  watchFetchBlogCustomer,
} from './homeSaga';
import { watchFetchBlogPost, watchFetchBlogPostWithId } from './blogSaga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchBreadcrumbProduct),
    fork(watchFetchGridProduct),
    fork(watchFetchListProduct),
    fork(watchFetchProductTag),
    fork(watchFetchProductCategory),
    fork(watchFetchNewProduct),
    fork(watchFetchHotSale),
    fork(watchFetchBlogContent),
    fork(watchFetchBlogCustomer),
    fork(watchFetchBlogPost),
    fork(watchFetchBlogPostWithId),
  ]);
}
