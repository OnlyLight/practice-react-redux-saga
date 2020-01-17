import React from 'react';

const PostItem = props => {
  const { title, date, imgName } = props;
  return (
    <div className="section-blog-detail__row row">
      <div className="section-blog-detail__img-post col-lg-5 col-6">
        <img
          src={require('../../../../assets/images/Blog-Detail-assets/' +
            imgName)}
          alt=""
        />
      </div>
      <div className="section-blog-detail__content col-lg-7 col-6">
        <p className="section-blog-detail__content-sub">{title}</p>
        <i className="fa fa-calendar-o" />
        <span className="section-blog-detail__content-date">{date}</span>
      </div>
    </div>
  );
};

export default PostItem;
