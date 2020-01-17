import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import Post from '../../../common/Post';
import BlogItem from './BlogItem';
import { fetchBlogContent, fetchBlogCustomer } from '../../../../actions/fetchApi/Home/blog';

const Blog = (props) => {
  const { blogContent, blogCustomer, onFetchBlogContent, onFetchBlogCustomer } = props;
  useEffect(() => {
    onFetchBlogContent();
    onFetchBlogCustomer();
  }, [onFetchBlogContent, onFetchBlogCustomer]);

  const settings = {
    infinite: true,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="blog">
      <div className="container">
        <div className="row blog__wrap">
          <div className="col-lg-8 col-12 blog__left">
            <div className="blog__title">
              <h4 className="blog__title__news blog__title__news--left">Tin tức &amp; blog</h4>
            </div>
            <div className="row">
              {blogContent.map((item, idx) => (
                <Post key={idx} title={item.title} content={item.content} path={item.path} />
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-12 blog__right">
            <div className="blog__title">
              <h4 className="blog__title__news blog__title__news--right">khách hàng</h4>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Slider className="blog__carousel" {...settings}>
                  {blogCustomer.map((cus, idx) => (
                    <BlogItem key={idx} imgName={cus.imgName} content={cus.content} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    blogContent: state.blogContentReducer,
    blogCustomer: state.blogCustomerReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBlogContent: () => {
      dispatch(fetchBlogContent());
    },
    onFetchBlogCustomer: () => {
      dispatch(fetchBlogCustomer());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blog);
