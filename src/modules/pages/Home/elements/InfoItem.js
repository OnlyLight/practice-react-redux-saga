import React from 'react';

const InfoItem = props => {
  const { path } = props;

  return (
    <div className="info__item">
      <img
        className="info__img"
        src={require('../../../../assets/images/Home-assets/' + path + '')}
        alt=""
      />
      <div className="info__overlay">
        <span className="info__year">1987</span>
        <div className="info__line-top" />
        <div className="info__line-bottom" />
        <p className="info__title">Rượu</p>
      </div>
    </div>
  );
};

export default InfoItem;
