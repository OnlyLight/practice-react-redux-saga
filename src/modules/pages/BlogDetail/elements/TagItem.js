import React from 'react';
import { Link } from 'react-router-dom';

const TagItem = ({ content, link = '#' }) => {
  return (
    <li className="section-blog-detail__tag__item">
      <Link to={link}>{content}</Link>
    </li>
  );
};

export default TagItem;
