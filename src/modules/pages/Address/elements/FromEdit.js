import React from 'react';
import FormItem from './FormItem';

const FromEdit = () => {
  const listItemSub = [
    { id: 'last-name-col2', labelName: 'Tên', valueInput: 'Giang' },
    { id: 'first-name-col2', labelName: 'Họ & tên đệm', valueInput: 'Lê Anh' },
    {
      id: 'company-col2',
      labelName: 'Công ty',
      valueInput: 'Cổ phần công nghệ DKT',
    },
    {
      id: 'address-col2',
      labelName: 'Địa chỉ',
      valueInput: 'Tòa nhà Hà Nội Group, 442 Đội Cấn, Ba Đình, Hà Nội',
    },
  ];

  const listItemSubSecond = [
    { id: 'code-col2', labelName: 'Postal/Zip Code', valueInput: '2300089' },
    { id: 'phone-col2', labelName: 'Phone', valueInput: '0974554928' },
  ];

  return (
    <form className="section-address__form section-address__lg-sub" action="#">
      {listItemSub.map((item, idx) => (
        <FormItem
          key={idx}
          id={item.id}
          labelName={item.labelName}
          valueInput={item.valueInput}
        />
      ))}
      <div className="section-address__form-control">
        <label
          className="section-address__item section-address__label-title"
          htmlFor="city-edit"
        >
          Thành phố
        </label>
        <div className="section-address__box section-address__item">
          <select
            className="section-address__box__select"
            id="city-edit"
            name="city"
          >
            <option value={1}>Hà Nội</option>
            <option value={2}>Đà Nẵng</option>
          </select>
        </div>
      </div>
      <div className="section-address__form-control">
        <label
          className="section-address__item section-address__label-title"
          htmlFor="city-edit"
        >
          Quốc tịch
        </label>
        <div className="section-address__box section-address__item">
          <select
            className="section-address__box__select"
            id="city-edit"
            name="city"
          >
            <option value={1}>Việt Nam</option>
            <option value={2}>Nhật Bản</option>
          </select>
        </div>
      </div>
      {listItemSubSecond.map((item, idx) => (
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
            id="default-address-col2"
            type="checkbox"
          />
          <label
            className="section-address__label-check"
            htmlFor="default-address-col2"
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

export default FromEdit;
