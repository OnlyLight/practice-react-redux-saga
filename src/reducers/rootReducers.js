import { combineReducers } from 'redux';
import {
  breadcrumbProduct,
  productGrid,
  productList,
  productTag,
  productCategory,
} from './productReducers';
import {
  newProductReducer,
  hotSaleReducer,
  blogContentReducer,
  blogCustomerReducer,
} from './homeReducers';
import { blogReducer, blogReducerWithID } from './blogReducers';

export const rootReducers = combineReducers({
  newProductReducer,
  hotSaleReducer,
  blogContentReducer,
  blogCustomerReducer,
  breadcrumbProduct,
  productGrid,
  productList,
  productTag,
  productCategory,
  blogReducer,
  blogReducerWithID,
});
