import React, { useState } from 'react';
import Slider from 'react-slick';
import Img1 from '../../../../assets/images/Detail-assets/item-1.png';
import Img2 from '../../../../assets/images/Detail-assets/item-2.png';
import Img3 from '../../../../assets/images/Detail-assets/item-3.png';
import ImgSlide from '../../../../assets/images/Detail-assets/img-slide.png';

const Slide = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="row">
      <div className="col-2 pr-0">
        <Slider
          asNavFor={nav2}
          ref={slider => setNav1(slider)}
          {...settings}
          className="section-detail__dots"
        >
          <div className="section-detail__dot">
            <img src={Img1} alt="" />
          </div>
          <div className="section-detail__dot">
            <img src={Img2} alt="" />
          </div>
          <div className="section-detail__dot">
            <img src={Img3} alt="" />
          </div>
          <div className="section-detail__dot">
            <img src={Img1} alt="" />
          </div>
          <div className="section-detail__dot">
            <img src={Img1} alt="" />
          </div>
          <div className="section-detail__dot">
            <img src={Img1} alt="" />
          </div>
        </Slider>
      </div>
      <div className="col-10 pl-0">
        <Slider
          asNavFor={nav1}
          ref={slider => setNav2(slider)}
          arrows={false}
          fade={true}
          className="section-detail__slide-right"
        >
          <div className="section-detail__slide active">
            <span>1</span>
            <img src={ImgSlide} alt="" />
          </div>
          <div className="section-detail__slide">
            <span>2</span>
            <img src={ImgSlide} alt="" />
          </div>
          <div className="section-detail__slide">
            <span>3</span>
            <img src={ImgSlide} alt="" />
          </div>
          <div className="section-detail__slide">
            <span>4</span>
            <img src={ImgSlide} alt="" />
          </div>
          <div className="section-detail__slide">
            <span>5</span>
            <img src={ImgSlide} alt="" />
          </div>
          <div className="section-detail__slide">
            <span>6</span>
            <img src={ImgSlide} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
