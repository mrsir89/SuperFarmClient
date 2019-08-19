import React from 'react';
import {
  CarouselFull,
  CarouselThree,
  CarouselTwo
} from '../components';

function Home() {
  return (
    <div className="main">
      <div className="container">
        <CarouselFull />
        <CarouselThree />
        <CarouselTwo />
      </div>
    </div>
  );
}

export default Home;
