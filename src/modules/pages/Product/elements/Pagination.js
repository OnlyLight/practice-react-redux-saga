import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Pagination = props => {
  const { active, clickChoose } = props;

  return (
    <div className="section-product__choose">
      <div className="section-product__btn">
        <button
          className={classNames('section-product__btn-layout', {
            active,
          })}
          onClick={clickChoose('grid')}
        >
          <i className="fa fa-th" />
        </button>
        <button
          className={classNames('section-product__btn-layout', {
            active: !active,
          })}
          onClick={clickChoose('list')}
        >
          <i className="fa fa-list" />
        </button>
      </div>
      <div className="section-product__pagination">
        <ul className="section-product__pagination__list">
          <li className="section-product__pagination__item">
            <Link to="#">
              <i className="fa fa-caret-left" />
            </Link>
          </li>
          <li className="section-product__pagination__item js-pagination active">
            <Link to="#">1</Link>
          </li>
          <li className="section-product__pagination__item js-pagination">
            <Link to="#">2</Link>
          </li>
          <li className="section-product__pagination__item js-pagination">
            <Link to="#">3</Link>
          </li>
          <li className="section-product__pagination__item js-pagination">
            <Link to="#">4</Link>
          </li>
          <li className="section-product__pagination__item js-pagination">
            <Link to="#">5</Link>
          </li>
          <li className="section-product__pagination__item">
            <Link to="#">
              <i className="fa fa-caret-right" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
