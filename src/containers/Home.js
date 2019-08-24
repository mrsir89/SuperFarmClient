import React from 'react';
import Carousel from './Carousel';
import { connect } from 'react-redux';

const newArrivals = [
  {
    productId: 1000,
    productName: 'Item #1',
    productPrice: '$10',
    isNew: false,
    isDiscount: true,
    imageUrl: '/assets/frontend/pages/img/products/model1.jpg',
  },
  {
    productId: 1001,
    productName: 'Item #2',
    productPrice: '$10',
    isNew: true,
    imageUrl: '/assets/frontend/pages/img/products/model2.jpg',
  },
  {
    productId: 1002,
    productName: 'Item #3',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/model3.jpg',
  },
  {
    productId: 1003,
    productName: 'Item #4',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/model4.jpg',
  },
  {
    productId: 1004,
    productName: 'Item #5',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/model1.jpg',
  },
  {
    productId: 1005,
    productName: 'Item #6',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/model2.jpg',
  },
];

const productItems = [
  {
    productId: 1000,
    productName: 'Item #1',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/k1.jpg',
  },
  {
    productId: 1001,
    productName: 'Item #2',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/k2.jpg',
  },
  {
    productId: 1002,
    productName: 'Item #3',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/k3.jpg',
  },
  {
    productId: 1003,
    productName: 'Item #4',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/k4.jpg',
  },
  {
    productId: 1004,
    productName: 'Item #5',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/k1.jpg',
  },
  {
    productId: 1005,
    productName: 'Item #6',
    productPrice: '$10',
    imageUrl: '/assets/frontend/pages/img/products/k2.jpg',
  },
];

function Home(productBoard) {
  return (
    <div className="main">
      <div className="container">
        {/* <div className="row margin-bottom-40">
          <Carousel className={'col-md-12 sale-product'} carouselName={'owl-carousel owl-carousel5'}
            title={'New Arrivals'} items={productBoard} />
        </div> */}
        {/* <div className="row margin-bottom-40">
          <Carousel className={'col-md-9 col-sm-8'} carouselName={'owl-carousel owl-carousel3'}
            title={'Three items'} items={productItems} />
        </div>
        <div className="row margin-bottom-40">
          <Carousel className={'col-md-6 two-items-bottom-items'} carouselName={'owl-carousel owl-carousel2'}
            title={'Three items'} items={productItems} />
        </div> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { product } = state;
  const { productBoard } = product;
  return {
    productBoard
  };
}
export default connect(mapStateToProps)(Home);
// export default Home;



///////////////////////////////////////////////////////////////////////
//////////////////////////version carousel full, three, two////////////

// import React from 'react';
// import {
//   CarouselFull,
//   CarouselThree,
//   CarouselTwo
// } from './';

// function Home() {
//   return (
//     <div className="main">
//       <div className="container">
//         <CarouselFull />
//         <CarouselThree />
//         <CarouselTwo />
//       </div>
//     </div>
//   );
// }

// export default Home;












// import React from 'react';
// import {
//   CarouselFull,
//   CarouselThree,
//   CarouselTwo
// } from './';

// function Home() {
//   return (
//     <div className="main">
//       <div className="container">
//         <CarouselFull />
//         <CarouselThree />
//         <CarouselTwo />
//       </div>
//     </div>
//   );
// }

// export default Home;



