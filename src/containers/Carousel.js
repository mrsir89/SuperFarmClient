import React from 'react';
import CarouselItem from './CarouselItem';

function Carousel(props) {
  const { className, carouselName, title, items } = props;

  return (
    <div className={className}>
      <h2>{title}</h2>
      <div className={carouselName}>
        {items.map((item, index, array) => (<CarouselItem {...item} />))}
      </div>
    </div>
  );
}

export default Carousel;
