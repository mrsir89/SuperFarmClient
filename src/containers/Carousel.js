import React from 'react';
import CarouselItem from './CarouselItem';

function Carousel(props) {
  const { className, carouselName, title, items,srbtitle } = props;
  console.log('props >>>>>>>>>>>>>>>>>>>>>>>>>', props);

  return (
    <div className={className} >
      
      <h1>
      {srbtitle}
        <br/>
        <strong>{title}</strong>
        </h1>
      <div className={carouselName}>
        {items.map((item, index, array) => (<CarouselItem {...item} key={index}/>))}        
      </div>
    </div>
  );
}

export default Carousel;
