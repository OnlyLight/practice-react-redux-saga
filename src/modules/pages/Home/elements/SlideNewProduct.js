import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import ProductSlide from '../../../common/ProductSlide';

const NextArrow = (props) => {
  const { className, onClick } = props;
  const classStyle = clsx('fa fa-angle-up', className);
  return <i className={classStyle} onClick={onClick}></i>;
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  const classStyle = clsx('fa fa-angle-down', className);
  return <i className={classStyle} onClick={onClick}></i>;
};

const SlideNewProduct = (props) => {
  const { title, list, check } = props;
  const classStyle = clsx('product__title', {
    'product__title-hot': check,
  });

  const settings = {
    infinite: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="product">
      <div className="container">
        <div className="product__head">
          <h4 className={classStyle}>{title}</h4>
        </div>
        <Slider className="product__carousel" {...settings}>
          {list.map((item, idx) => (
            <ProductSlide key={idx} title={item.title} imgMain={item.imgMain} icon={item.icon} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

SlideNewProduct.defaultProps = {
  check: false,
};

export default SlideNewProduct;
