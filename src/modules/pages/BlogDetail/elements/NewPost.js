import React from 'react';
import PostItem from './PostItem';

const NewPost = () => {
  const listPost = [
    {
      title: 'Cách sắp xếp nội thất trong nhà',
      date: '12/06/2015',
      imgName: 'img-post-new.png',
    },
    {
      title: 'Cách sắp xếp nội thất trong nhà',
      date: '12/06/2015',
      imgName: 'img-post-new.png',
    },
  ];
  return (
    <div className="section-blog-detail__new-post">
      <h6 className="section-blog-detail__title-sub">Bài viết mới nhất</h6>
      {listPost.map((item, idx) => (
        <PostItem
          key={idx}
          title={item.title}
          date={item.date}
          imgName={item.imgName}
        />
      ))}
    </div>
  );
};

export default NewPost;
