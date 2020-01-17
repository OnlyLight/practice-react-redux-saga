import React from 'react';

const TableCell = props => {
  const { code, address, amount, total, status } = props;
  return (
    <tr>
      <td className="section-order__table-cell">1</td>
      <td className="section-order__table-content">
        <span>{code}</span>
        <span className="section-order__time-info">01:36 14/03/2015</span>
      </td>
      <td className="section-order__table-cell">
        <span>{address}</span>
      </td>
      <td className="section-order__table-cell">
        <span>{amount}</span>
      </td>
      <td className="section-order__table-cell">
        <span>{total}đ</span>
      </td>
      <td className="section-order__table-cell">
        <span>{status}</span>
      </td>
      <td className="section-order__table-cell">
        <span>Chi tiết</span>
      </td>
    </tr>
  );
};

export default TableCell;
