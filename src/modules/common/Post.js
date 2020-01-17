import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
  const { title, content, path, link = '#' } = props;
  return (
    <div className="post">
      <Link to={link}>
        <div className="post__overlay">
          <img
            className="post__img"
            src={require('../../assets/images/Home-assets/' + path + '')}
            alt=""
          />
        </div>
      </Link>
      <div className="post__content">
        <Link to="#">
          <h6 className="post__content-h6">{title}</h6>
          <span className="post__content-span">Đăng bởi Giangle | 30/06/2015 | 60 bình luận</span>
          <p className="post__content-p">{content}</p>
        </Link>
        <Link className="post__read" to="#">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Post;
