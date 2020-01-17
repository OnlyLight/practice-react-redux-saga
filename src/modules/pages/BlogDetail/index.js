import React from 'react';
import Wrapper from '../../layouts/Wrapper';
import Breadcrumb from '../../common/Breadcrumb';
import NewPost from './elements/NewPost';
import Tag from './elements/Tag';
import MainInfo from './elements/MainInfo';
import Feedback from './elements/Feedback';

const BlogDetail = () => {
  return (
    <Wrapper>
      <section className="section-blog">
        <div className="container">
          <Breadcrumb
            list={[{ path: '/', title: 'Trang chủ' }, { path: '/blog', title: 'Blog' }]}
          />
          <h4 className="section-blog-detail__title">Blog</h4>
          <div className="section-blog-detail__wrapper">
            <div className="row">
              <div className="col-lg-3 col-12">
                <NewPost />
                <Tag />
                <div className="seciton-blog-detail__video d-none d-lg-block">
                  <h6 className="section-blog-detail__title-sub">Lastest video</h6>
                  <div className="section-blog-detail__wrap-video">
                    <img
                      src={require('../../../assets/images/Blog-Detail-assets/video.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="section-blog-detail__img-main">
                  <img
                    src={require('../../../assets/images/Blog-Detail-assets/img-main.png')}
                    alt=""
                  />
                </div>
                <MainInfo />
                <Feedback />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogDetail;
