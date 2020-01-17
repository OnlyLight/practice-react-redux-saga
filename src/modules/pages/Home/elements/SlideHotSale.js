import React, { useState } from 'react';
import ProductSlide from '../../../common/ProductSlide';
import OwlCarousel from 'react-owl-carousel2';

const SlideHotSale = props => {
  const [listItem] = useState([
    { title: 'Rượu vang đà lạt', imgMain: 'wine_5.png', icon: '' },
    { title: 'Rượu vang đà lạt', imgMain: 'wine_6.png', icon: '' },
    { title: 'Rượu vang đà lạt', imgMain: 'wine_7.png', icon: '' },
    { title: 'Rượu vang đà lạt', imgMain: 'wine_8.png', icon: '' },
    { title: 'Rượu vang đà lạt', imgMain: 'wine_5.png', icon: '' },
    { title: 'Rượu vang đà lạt', imgMain: 'wine_6.png', icon: '' },
    { title: 'Rượu vang đà lạt', imgMain: 'wine_7.png', icon: '' },
    { title: 'Rượu vang đà lạt', imgMain: 'wine_8.png', icon: '' },
  ]);

  const options = {
    items: 4,
    navRewind: false,
    margin: 20,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <section className="product">
      <div className="container">
        <div className="product__head">
          <h4 className="product__title product__title-hot">
            sản phẩm bán chạy
          </h4>
        </div>
        <OwlCarousel
          className="product__carousel owl-carousel"
          options={options}
        >
          {listItem.map((item, idx) => (
            <ProductSlide
              key={idx}
              title={item.title}
              imgMain={item.imgMain}
              icon={item.icon}
            />
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default SlideHotSale;
