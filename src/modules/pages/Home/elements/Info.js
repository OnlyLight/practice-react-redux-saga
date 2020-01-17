import React, { useState } from 'react';
import InfoItem from './InfoItem';

const Info = props => {
  const [listItem] = useState([
    { path: 'img-adv-1.png' },
    { path: 'img-adv-2.png' },
    { path: 'img-adv-3.png' },
    { path: 'img-adv-4.png' },
    { path: 'img-adv-5.png' },
    { path: 'img-adv-6.png' },
    { path: 'img-adv-7.png' },
    { path: 'img-adv-8.png' },
  ]);
  return (
    <section className="info">
      {listItem.map((item, idx) => (
        <InfoItem key={idx} path={item.path} />
      ))}
    </section>
  );
};

export default Info;
