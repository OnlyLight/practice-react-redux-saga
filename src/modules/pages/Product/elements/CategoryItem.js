import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = props => {
  const { item } = props;
  return (
    <li className="section-product__category__item">
      <Link to={item.link}>{item.name}</Link>
    </li>
  );
};

const CategoryItem = props => {
  const { title, list } = props;
  return (
    <div className="section-product__group">
      <h5 className="section-product__category__title">{title}</h5>
      <ul className="section-product__category__list">
        {list.map((item, idx) => (
          <ListItem key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryItem;
