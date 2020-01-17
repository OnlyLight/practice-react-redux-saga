import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = props => {
  const { imgName, content, link = '#' } = props;
  return (
    <div className="item">
      <div className="blog__right__content">
        <div className="icon-quote">
          <img
            src={require('../../../../assets/images/Home-assets/fa-quote-right.png')}
            alt=""
          />
        </div>
        <p className="blog__right__content__p">{content}</p>
        <Link className="blog__read" to={link}>
          Read more
        </Link>
      </div>
      <div className="img__talk">
        <img
          src={require('../../../../assets/images/Home-assets/' + imgName + '')}
          alt=""
        />
      </div>
      <p className="item__name">Giang LT</p>
      <span className="item__role">Graphic design</span>
    </div>
  );
};

export default BlogItem;
