import React from 'react';
import Carousel from './containers/Carousel';
import { RevSlider, Slide, Caption } from 'react-rev-slider';
import './App.css';
import { Actions } from './actions/index';
import { connect } from 'react-redux';
import { ActionTypes } from './contants';

const config = {
  delay: 9000,
  startwidth: 1100,
  startheight: 600,
  hideThumbs: 10,
  fullWidth: "on",
  forceFullWidth: "on"
};

class Home extends React.Component {

  constructor(props){
    super(props)
    this.state={
      mainBest:'',
      config : {
        delay: 9000,
        startwidth: 1100,
        startheight: 600,
        hideThumbs: 10,
        fullWidth: "on",
        forceFullWidth: "on"
      }
    } 
  }

  componentWillMount() {
    const { loadMainBestProduct } = this.props;
      loadMainBestProduct()
      .then(response=>{
        if(response.type===ActionTypes.LOAD_MAINBESTPRODUCT_SUCCESS){
          this.setState({
            mainBest:response.payload.data
          })
        }
      });
  }

  componentDidMount(){
    const { mainBest } =this.props
    const { loadMainBestProduct } = this.props;
      loadMainBestProduct()
      .then(response=>{
        if(response.type===ActionTypes.LOAD_MAINBESTPRODUCT_SUCCESS){
          this.setState({
            mainBest:response.payload.data
          })
        }
      });
  }



  render() {

    return (
      <div>
        <RevSlider config={this.state.config}>
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
                  srbtitle={'SUPER FARM'} title={'BEST PRODUCT'} items={this.props.mainBest} />
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
}
const mapStateToProps = (state) => ({
  mainBest: state.product.mainBest
});
const mapDispatchToProps = (dispatch) => ({
  loadMainBestProduct: () => dispatch(Actions.loadMainBestProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


