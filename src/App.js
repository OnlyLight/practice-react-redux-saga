import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './modules/pages/Product';
import Home from './modules/pages/Home';
import Cart from './modules/pages/Cart';
import Order from './modules/pages/Order';
import Address from './modules/pages/Address';
import Login from './modules/pages/Login';
import SignUp from './modules/pages/SignUp';
import Contact from './modules/pages/Contact';
import Intro from './modules/pages/Intro';
import NotFound from './modules/pages/404';
import Detail from './modules/pages/Detail';
import { store } from './store';
import Blog from './modules/pages/Blog';
import BlogDetail from './modules/pages/BlogDetail';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog-detail/:id" component={BlogDetail} />
          <Route path="/address" component={Address} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/intro" component={Intro} />
          <Route path="/404" component={NotFound} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
