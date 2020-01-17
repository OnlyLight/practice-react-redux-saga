import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Wrapper = props => {
  const { check = false } = props;
  return (
    <div className="main">
      <Header check={check} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Wrapper;
