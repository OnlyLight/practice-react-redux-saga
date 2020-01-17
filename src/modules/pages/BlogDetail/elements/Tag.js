import React from 'react';
import TagItem from './TagItem';

const Tag = () => {
  const listTag = [
    { content: 'Đồng hồ' },
    { content: 'Túi' },
    { content: 'Phụ kiện' },
    { content: 'Giày' },
    { content: 'Sandal' },
    { content: 'Áo sơ mi' },
    { content: 'Nước hoa' },
  ];
  return (
    <div className="section-blog-detail__tag">
      <h6 className="section-blog-detail__title-sub">Blog Tags</h6>
      <ul className="section-blog-detail__tag__list">
        {listTag.map((item, idx) => (
          <TagItem key={idx} content={item.content} />
        ))}
      </ul>
    </div>
  );
};

export default Tag;
