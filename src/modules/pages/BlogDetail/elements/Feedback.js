import React from 'react';

const Feedback = () => {
  return (
    <div className="section-blog-detail__feedback">
      <p className="section-blog-detail__paragraph">Đóng góp ý kiến</p>
      <form action="#">
        <div className="section-blog-detail__form-control">
          <label className="section-blog-detail__item" htmlFor="name">
            Tên *
          </label>
          <input className="section-blog-detail__item" id="name" type="text" />
        </div>
        <div className="section-blog-detail__form-control">
          <label className="section-blog-detail__item" htmlFor="email">
            Email *
          </label>
          <input
            className="section-blog-detail__item"
            id="email"
            type="email"
          />
        </div>
        <div className="section-blog-detail__form-control">
          <label className="section-blog-detail__item" htmlFor="comment">
            Ý kiến *
          </label>
          <textarea
            className="section-blog-detail__item"
            id="comment"
            cols={30}
            rows={10}
            defaultValue={''}
          />
        </div>
        <div className="section-blog-detail__form-control">
          <div className="section-blog-detail__item" />
          <div className="section-blog-detail__item">
            <button className="section-blog-detail__button" type="submit">
              Gữi ý kiến
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
