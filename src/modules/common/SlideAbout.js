import React from 'react';
import banner from '../../assets/images/Home-assets/banner.jpg';

const Slide = props => {
  return (
    <div className="slide-main carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li className="active" data-target=".slide-main" data-slide-to={0} />
        <li data-target=".slide-main" data-slide-to={1} />
        <li data-target=".slide-main" data-slide-to={2} />
      </ul>
      <div className="carousel-inner slide-banner">
        <div className="carousel-item active">
          <img src={banner} alt="" />
        </div>
        <div className="carousel-item">
          <img src={banner} alt="" />
        </div>
        <div className="carousel-item">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
