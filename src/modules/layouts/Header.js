import React from 'react';
import classNames from 'classnames';

import MainHeader from './MainHeader';
import Slide from '../common/SlideAbout';
import Menu from '../common/Menu';

export default function Header(props) {
  const { check = false } = props;
  let classStyle = classNames('menu-header', {
    'menu-header--top': check,
    'menu-header--default': !check,
  });

  return (
    <header className="header">
      <nav className={classStyle}>
        <MainHeader />
      </nav>
      <div className="header-control">
        {check && <Slide />}
        <Menu />
      </div>
    </header>
  );
}
