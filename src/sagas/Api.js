const urlNewProduct = process.env.REACT_APP_NEW_PRODUCTS;
const urlHotSale = process.env.REACT_APP_HOT_SALES;
const urlBlogContent = process.env.REACT_APP_BLOG_CONTENT;
const urlBlogCustomer = process.env.REACT_APP_BLOG_CUSTOMER;

const urlBreadcrumbProduct = process.env.REACT_APP_BREADCRUMB_PRODUCT_PAGE;
const urlGridProduct = process.env.REACT_APP_LIST_ITEM_GRID;
const urlListProduct = process.env.REACT_APP_LIST_ITEM_LIST;
const urlProductTag = process.env.REACT_APP_LIST_TAG;
const urlProductCategory = process.env.REACT_APP_LIST_CATEGORY;

const urlBlogPost = process.env.REACT_APP_BLOG_PAGE;

function* getNewProductFromApi() {
  return yield fetch(urlNewProduct)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getHotSaleFromApi() {
  return yield fetch(urlHotSale)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getBlogContentFromApi() {
  return yield fetch(urlBlogContent)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getBlogCustomerFromApi() {
  return yield fetch(urlBlogCustomer)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getBreadCrumbProduct() {
  return yield fetch(urlBreadcrumbProduct)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getGridProduct() {
  return yield fetch(urlGridProduct)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getListProduct() {
  return yield fetch(urlListProduct)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getProductTag() {
  return yield fetch(urlProductTag)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getProductCategory() {
  return yield fetch(urlProductCategory)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getBlogPost() {
  return yield fetch(urlBlogPost)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

function* getBlogPostWithId(id) {
  return yield fetch(`${urlBlogPost}/${id}`)
    .then((values) => values.json())
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return err;
      },
    );
}

export const Api = {
  getBreadCrumbProduct,
  getGridProduct,
  getListProduct,
  getProductTag,
  getProductCategory,
  getNewProductFromApi,
  getHotSaleFromApi,
  getBlogContentFromApi,
  getBlogCustomerFromApi,
  getBlogPost,
  getBlogPostWithId,
};
