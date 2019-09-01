import React from 'react';
import { withRouter } from 'react-router-dom';
import  Carousel  from './containers/Carousel';
import { RevSlider, Slide, Caption } from  'react-rev-slider';
import './App.css';


const bestProduct = [
    {
      productCode: 1,
      productName: "1# 한우",
      lowerCode: 2,
      productTypecode: 1,
      productOption1: "60kg",
      productOption2: "햅쌀",
      productPrice: 1000000,
      productMadeDate: "2019-06-01T00:00:00.000+0000",
      productNotaxPrice: 909091,
      productTaxprice: 90909,
      isNew: false,
      isDiscount: true,
      imageUrl: '../imgresource/p1.png',
  
      productTax: 0.1,
      productStock: 0,
      productTotalSales: 0,
      productStatus: "true",
      farmerId: "s001",
      productType: [
        {
          productTypeCode: 1,
          productTypeName: "이천쌀",
          productUnit: "Kg",
          productOrigin: "경기도 이천"
        }
      ]
    }, {
      productCode: 1,
      productName: "햇마늘",
      lowerCode: 2,
      productTypecode: 1,
      productOption1: "20kg",
      productOption2: "햅쌀",
      productPrice: 1000000,
      productMadeDate: "2019-06-01T00:00:00.000+0000",
      productNotaxPrice: 909091,
      productTaxprice: 90909,
      isNew: false,
      isDiscount: true,
      imageUrl: '../imgresource/p2.png',
  
      productTax: 0.1,
      productStock: 0,
      productTotalSales: 0,
      productStatus: "true",
      farmerId: "s001",
      productType: [
        {
          productTypeCode: 1,
          productTypeName: "이천쌀",
          productUnit: "Kg",
          productOrigin: "경기도 이천"
        }
      ]
    }, {
      productCode: 1,
      productName: "햇마늘",
      lowerCode: 2,
      productTypecode: 1,
      productOption1: "20kg",
      productOption2: "햅쌀",
      productPrice: 1000000,
      productMadeDate: "2019-06-01T00:00:00.000+0000",
      productNotaxPrice: 909091,
      productTaxprice: 90909,
      isNew: false,
      isDiscount: true,
      imageUrl: '../imgresource/p3.png',
  
      productTax: 0.1,
      productStock: 0,
      productTotalSales: 0,
      productStatus: "true",
      farmerId: "s001",
      productType: [
        {
          productTypeCode: 1,
          productTypeName: "이천쌀",
          productUnit: "Kg",
          productOrigin: "경기도 이천"
        }
      ]
    }, {
      productCode: 1,
      productName: "귀여운고양이",
      lowerCode: 2,
      productTypecode: 1,
      productOption1: "20kg",
      productOption2: "햅쌀",
      productPrice: 1000000,
      productMadeDate: "2019-06-01T00:00:00.000+0000",
      productNotaxPrice: 909091,
      productTaxprice: 90909,
      isNew: false,
      isDiscount: true,
      imageUrl: '../imgresource/p4.png',
   
      productTax: 0.1,
      productStock: 0,
      productTotalSales: 0,
      productStatus: "true",
      farmerId: "s001",
      productType: [
        {
          productTypeCode: 1,
          productTypeName: "이천쌀",
          productUnit: "Kg",
          productOrigin: "경기도 이천"
        }
      ]
    }, {
      productCode: 1,
      productName: "정말 아름다운 장미",
      lowerCode: 2,
      productTypecode: 1,
      productOption1: "20kg",
      productOption2: "햅쌀",
      productPrice: 1000000,
      productMadeDate: "2019-06-01T00:00:00.000+0000",
      productNotaxPrice: 909091,
      productTaxprice: 90909,
      isNew: false,
      isDiscount: true,
      imageUrl: '../imgresource/p5.jpg',
  
      productTax: 0.1,
      productStock: 0,
      productTotalSales: 0,
      productStatus: "true",
      farmerId: "s001",
      productType: [
        {
          productTypeCode: 1,
          productTypeName: "이천쌀",
          productUnit: "Kg",
          productOrigin: "경기도 이천"
        }
      ]
    }
  ];

const config = {
  delay: 9000,
  startwidth: 1100,
  startheight: 600,
  hideThumbs: 10,
  fullWidth: "on",
  forceFullWidth: "on"
};
function Home() {
  return (
    <div>
   <RevSlider config={config}>
        <Slide
          src="../imgresource/1.png"
          alt="slidebg1"
          data-bgfit="cover"
          data-bgposition="left top"
          data-bgrepeat="no-repeat"
          slideProperties={{
            "data-transition": "fade",
            "data-slotamount": "3",
            "data-masterspeed": "2000"
          }}
        >
          <Caption
            class="tp-caption lfr fadeout"
            data-x="center"
            data-y="bottom"
            data-hoffset="0"
            data-voffset="0"
            data-speed="1600"
            data-start="1200"
            data-easing="Power4.easeOut">
            <img src="../imgresource/2.png" alt="" />
          </Caption>

          <Caption
            class="tp-caption sfb fadeout"
            data-x="center"
            data-y="bottom"
            data-hoffset="0"
            data-voffset="0"
            data-speed="1000"
            data-start="1000"
            data-easing="Power4.easeOut">
            <img src="../imgresource/3.png" alt="" />
          </Caption>

          <Caption
            class="tp-caption lfb fadeout"
            data-x="center"
            data-y="bottom"
            data-hoffset="0"
            data-voffset="0"
            data-speed="500"
            data-start="1200"
            data-easing="Power4.easeOut">
            <img src="../imgresource/4.png" alt="" />
          </Caption>
        </Slide>
        <Slide
          src="../imgresource/a3.png"
          alt="slidebg1"
          data-bgfit="cover"
          data-bgposition="left top"
          data-bgrepeat="no-repeat"
          slideProperties={{
            "data-transition": "fade",
            "data-slotamount": "7",
            "data-masterspeed": "1500"
          }}
        >
          <Caption
            class="tp-caption lft fadeout"
            data-x="center"
            data-y="bottom"
            data-hoffset="0"
            data-voffset="0"
            data-speed="1200"
            data-start="1200"
            data-easing="Power4.easeOut">
            <img src="../imgresource/a1.png" alt="" />
          </Caption>

          <Caption
            class="tp-caption lft fadeout"
            data-x="center"
            data-y="bottom"
            data-hoffset="0"
            data-voffset="0"
            data-speed="500"
            data-start="1200"
            data-easing="Power4.easeOut">
            <img src="../imgresource/a2.png" alt="" />
          </Caption>
          
        </Slide>
        <Slide
          src="../imgresource/c1.png"
          alt="slidebg1"
          data-bgfit="cover"
          data-bgposition="left top"
          data-bgrepeat="no-repeat"
          slideProperties={{
            "data-transition": "fade",
            "data-slotamount": "7",
            "data-masterspeed": "1500"
          }}
        >
          <Caption
            class="tp-caption lft fadeout"
            data-x="center"
            data-y="bottom"
            data-hoffset="0"
            data-voffset="0"
            data-speed="1200"
            data-start="1200"
            data-easing="Power4.easeOut">
            <img src="../imgresource/c2.png" alt="" />
          </Caption>

          </Slide>
      </RevSlider>
<div className="App">
      <div className="main" >
      <div className="container margin-bottom-40">
        <div className="row margin-bottom-40 margin-top-70">
          <Carousel className={'col-md-12 col-sm-8'} carouselName={'owl-carousel owl-carousel3 margin-top-70'}
              srbtitle={'SUPER FARM'} title={'BEST PRODUCT'} items={bestProduct} />
        </div>
{/*         
  Carousel className={'col-md-12 sale-product'} carouselName={'owl-carousel owl-carousel3 margin-top-70'}
              srbtitle={'SUPER FARM'} title={'BEST PRODUCT'} items={bestProduct} />
          <Carousel className={'col-md-9 col-sm-8'} carouselName={'owl-carousel owl-carousel3'}
              title={'Three items'} items={productItems} />
       
          <Carousel className={'col-md-6 two-items-bottom-items'} carouselName={'owl-carousel owl-carousel2'}
              title={'Three items'} items={productItems} /> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default withRouter(Home);


