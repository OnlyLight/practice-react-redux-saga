import React from 'react';
import FormItem from './FormItem';

const FromInfo = () => {
  const listFormItem = [
    { id: 'last-name', labelName: 'Tên', valueInput: 'Giang' },
    { id: 'first-name', labelName: 'Họ & tên đệm', valueInput: 'Lê Anh' },
    {
      id: 'company',
      labelName: 'Công ty',
      valueInput: 'Cổ phần công nghệ DKT',
    },
    {
      id: 'address',
      labelName: 'Địa chỉ',
      valueInput: 'Tòa nhà Hà Nội Group, 442 Đội Cấn, Ba Đình, Hà Nội',
    },
    { id: 'city', labelName: 'Thành phố', valueInput: 'Hà Nội' },
    { id: 'country', labelName: 'Quốc Tịch', valueInput: 'Việt Nam' },
    { id: 'code', labelName: 'Postal/Zip Code', valueInput: '2300089' },
    { id: 'phone', labelName: 'Phone', valueInput: '0974554928' },
  ];

  return (
    <form className="section-address__form section-address__border" action="#">
      {listFormItem.map((item, idx) => (
        <FormItem
          key={idx}
          id={item.id}
          labelName={item.labelName}
          valueInput={item.valueInput}
        />
      ))}
      <div className="section-address__form-control section-address__group-checkbox">
        <div className="section-address__item" />
        <div className="section-address__item">
          <input
            className="section-address__checkbox"
            id="default-address"
            type="checkbox"
          />
          <label
            className="section-address__label-check"
            htmlFor="default-address"
          >
            Đặt làm địa chỉ mặc định?
          </label>
        </div>
      </div>
      <div className="section-address__form-control">
        <div className="section-address__item" />
        <div className="section-address__item">
          <button
            className="section-address__button section-address__button--edit"
            type="submit"
          >
            Chỉnh sửa địa chỉ
          </button>
          <button className="section-address__button section-address__button--delete">
            Xóa
          </button>
        </div>
      </div>
    </form>
  );
};

export default FromInfo;
