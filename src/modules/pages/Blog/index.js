import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Wrapper from '../../layouts/Wrapper';
import Breadcrumb from '../../common/Breadcrumb';
import Post from '../../common/Post';
import { fetchPostBlog } from '../../../actions/fetchApi/Blog/post';

const Blog = (props) => {
  const { blogPost, onLoadPostBlog } = props;
  useEffect(() => {
    onLoadPostBlog();
  }, [onLoadPostBlog]);

  return (
    <Wrapper>
      <section className="section-blog">
        <div className="container">
          <Breadcrumb
            list={[{ path: '/', title: 'Trang chủ' }, { path: '/blog', title: 'Blog' }]}
          />
          <h4 className="section-blog__title">Blog</h4>
          <div className="section-blog__list">
            <div className="section-blog__wrap-item">
              {blogPost.map((item, idx) => (
                <Post
                  key={idx}
                  title={item.title}
                  content={item.content}
                  path={item.path}
                  link={`/blog-detail/${item.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    blogPost: state.blogReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPostBlog: () => {
      dispatch(fetchPostBlog());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blog);
