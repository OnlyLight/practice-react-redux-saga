import React from 'react';

const FormItem = ({ id, labelName, valueInput }) => {
  return (
    <div className="section-address__form-control">
      <label
        className="section-address__item section-address__label-title"
        htmlFor={id}
      >
        {labelName}
      </label>
      <input
        className="section-address__item section-address__input"
        id={id}
        type="text"
        defaultValue={valueInput}
      />
    </div>
  );
};

export default FormItem;
