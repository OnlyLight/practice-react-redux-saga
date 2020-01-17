import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostBlogWithID } from '../../../../actions/fetchApi/Blog/post';

const MainInfo = (props) => {
  const { blogPost, onLoadPostBlogWithID } = props;
  const { id } = useParams();
  useEffect(() => {
    if (id) onLoadPostBlogWithID(id);
  }, [onLoadPostBlogWithID, id]);

  return (
    <div className="section-blog-detail__main">
      <h6 className="section-blog-detail__main-h6">{blogPost.title}</h6>
      <span className="section-blog-detail__main-span">
        Đăng bởi Giangle | 30/06/2015 | 60 bình luận
      </span>
      <p className="section-blog-detail__main-p">{blogPost.content}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogPost: state.blogReducerWithID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPostBlogWithID: (id) => {
      dispatch(fetchPostBlogWithID(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainInfo);
