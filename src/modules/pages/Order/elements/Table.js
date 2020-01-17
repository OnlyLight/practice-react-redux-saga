import React from 'react';
import TableCell from './TableCell';

const Table = () => {
  const listCell = [
    {
      code: 'LEANHGIANG89 - 17/06/2015',
      address: 'HÀ ĐÔNG',
      amount: 7,
      total: '350.000',
      status: 'Đã thanh toán',
    },
    {
      code: 'LEANHGIANG89 - 17/06/2015',
      address: 'HÀ ĐÔNG',
      amount: 7,
      total: '350.000',
      status: 'Đã thanh toán',
    },
    {
      code: 'LEANHGIANG89 - 17/06/2015',
      address: 'HÀ ĐÔNG',
      amount: 7,
      total: '350.000',
      status: 'Đã thanh toán',
    },
  ];
  return (
    <table className="table-responsive-md">
      <tbody>
        <tr>
          <td className="section-order__table-title">STT</td>
          <td className="section-order__table-title">
            Mã hóa đơn/Ngày mua hàng
          </td>
          <td className="section-order__table-title">Kho nhận hàng</td>
          <td className="section-order__table-title">Số sp</td>
          <td className="section-order__table-title">TỔNG TIỀN</td>
          <td className="section-order__table-title">TÌNH TRẠNG</td>
          <td className="section-order__table-title">THAO TÁC</td>
        </tr>
        {listCell.map((item, idx) => (
          <TableCell
            code={item.code}
            address={item.address}
            amount={item.amount}
            total={item.total}
            status={item.status}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
