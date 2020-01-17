import React from 'react';

const Tag = () => {
  return (
    <div className="section-order__tag-order">
      <h6 className="section-order__title-list">DANH SÁCH ĐƠN HÀNG</h6>
      <span className="section-order__tag-item">Trạng thái Tất cả (16)</span>
      <span className="section-order__tag-item">Đã hủy (10)</span>
      <span className="section-order__tag-item">Chưa duyệt (0)</span>
      <span className="section-order__tag-item">Đã duyệt (0)</span>
      <span className="section-order__tag-item">
        Đã thanh toán-chờ mua hàng (0)
      </span>
      <span className="section-order__tag-item section-order__none-border">
        Đã mua hàng (0)
      </span>
      <span className="section-order__tag-item">
        Hàng đã về-chờ giao hàng (0)
      </span>
      <span className="section-order__tag-item">Đã kết thúc (6)</span>
    </div>
  );
};

export default Tag;
