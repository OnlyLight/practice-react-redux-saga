import React from 'react';

const BreadcrumbItem = props => {
  const { title, path } = props;

  return (
    <li className="breadcrumb-common__item">
      <a href={path}>{title}</a>
    </li>
  );
};

const Breadcrumb = props => {
  const { list } = props;

  return (
    <ul className="breadcrumb-common">
      {list &&
        list.map((item, idx) => (
          <BreadcrumbItem key={idx} title={item.title} path={item.path} />
        ))}
    </ul>
  );
};

export default Breadcrumb;
