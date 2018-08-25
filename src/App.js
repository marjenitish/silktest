import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BoxShowcase from './Components/BoxShowcase';
import ProductRow from './Components/ProductRow';
import BannerRow from './Components/BannerRow';
import TwoColumnProduct from './Components/TwoColumnProduct';
import TabWithSlider from './Components/TabWithSlider';

import {Row, Col} from 'antd';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      recommendations: [
        {
          image1: "assets/images/sport_04.jpg",
          image2: "assets/images/sport_05.jpg",
          title: "Sport machine",
          price: "$200.00"
        },
        {
          image1: "assets/images/fashions_01.jpg",
          image2: "assets/images/fashions_01.jpg",
          title: "Sport machine",
          price: "$300.00"
        },
        {
          image1: "assets/images/sport_06.jpg",
          image2: "assets/images/sport_07.jpg",
          title: "Sport machine",
          price: "$300.00"
        },
        {
          image1: "assets/images/furniture_01.jpg",
          image2: "assets/images/furniture_03.jpg",
          title: "Sport machine",
          price: "$300.00"
        },
        {
          image1: "assets/images/furniture_04.jpg",
          image2: "assets/images/furniture_05.jpg",
          title: "Sport machine",
          price: "$300.00"
        },
        {
          image1: "assets/images/electronic_05.jpg",
          image2: "assets/images/electronic_08.jpg",
          title: "Sport machine",
          price: "$300.00"
        }
      ],
      leftCategory: {
        title: "Electronics",
        icon: "assets/images/home1_icon-sale.png",
        categories: [
          {
            image1: "assets/images/digital_10.jpg",
            image2: "assets/images/digital_02.jpg",
            title: "Sport machine",
            price: "$200.00"
          },
          {
            image1: "assets/images/digital_01.jpg",
            image2: "assets/images/digital_05.jpg",
            title: "Sport machine",
            price: "$300.00"
          },
          {
            image1: "assets/images/digital_02.jpg",
            image2: "assets/images/digital_03.jpg",
            title: "Sport machine",
            price: "$300.00"
          },
          {
            image1: "assets/images/digital_05.jpg",
            image2: "assets/images/digital_07.jpg",
            title: "Sport machine",
            price: "$300.00"
          },
          {
            image1: "assets/images/furniture_06.jpg",
            image2: "assets/images/furniture_01.jpg",
            title: "Sport machine",
            price: "$300.00"
          }
        ]
      },
      rightCategory: {
        title: "Machinery",
        icon: "assets/images/home1_icon-new.png",
        categories: [
          {
            image1: "assets/images/digital_10.jpg",
            image2: "assets/images/digital_02.jpg",
            title: "Sport machine",
            price: "$200.00"
          },
          {
            image1: "assets/images/digital_01.jpg",
            image2: "assets/images/digital_05.jpg",
            title: "Sport machine",
            price: "$300.00"
          },
          {
            image1: "assets/images/digital_02.jpg",
            image2: "assets/images/digital_03.jpg",
            title: "Sport machine",
            price: "$300.00"
          },
          {
            image1: "assets/images/digital_05.jpg",
            image2: "assets/images/digital_07.jpg",
            title: "Sport machine",
            price: "$300.00"
          },
          {
            image1: "assets/images/furniture_06.jpg",
            image2: "assets/images/furniture_01.jpg",
            title: "Sport machine",
            price: "$300.00"
          }
        ]
      },
      tabWithSlider:{
        title: "Handpicked",
        tabs: [
          {
            title: "Best Sellers",
            products: [
              {
                image1: "assets/images/sport_04.jpg",
                image2: "assets/images/sport_05.jpg",
                title: "Sport machine",
                price: "$200.00"
              },
              {
                image1: "assets/images/fashions_01.jpg",
                image2: "assets/images/fashions_01.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/sport_06.jpg",
                image2: "assets/images/sport_07.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/furniture_01.jpg",
                image2: "assets/images/furniture_03.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/furniture_04.jpg",
                image2: "assets/images/furniture_05.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/electronic_05.jpg",
                image2: "assets/images/electronic_08.jpg",
                title: "Sport machine",
                price: "$300.00"
              }
            ]
          },
          {
            title: "Specials",
            products: [
              {
                image1: "assets/images/sport_04.jpg",
                image2: "assets/images/sport_05.jpg",
                title: "Sport machine",
                price: "$200.00"
              },
              {
                image1: "assets/images/fashions_01.jpg",
                image2: "assets/images/fashions_01.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/sport_06.jpg",
                image2: "assets/images/sport_07.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/furniture_01.jpg",
                image2: "assets/images/furniture_03.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/furniture_04.jpg",
                image2: "assets/images/furniture_05.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/electronic_05.jpg",
                image2: "assets/images/electronic_08.jpg",
                title: "Sport machine",
                price: "$300.00"
              }
            ]
          },
          {
            title: "Our picks",
            products: [
              {
                image1: "assets/images/sport_04.jpg",
                image2: "assets/images/sport_05.jpg",
                title: "Sport machine",
                price: "$200.00"
              },
              {
                image1: "assets/images/fashions_01.jpg",
                image2: "assets/images/fashions_01.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/sport_06.jpg",
                image2: "assets/images/sport_07.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/furniture_01.jpg",
                image2: "assets/images/furniture_03.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/furniture_04.jpg",
                image2: "assets/images/furniture_05.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/electronic_05.jpg",
                image2: "assets/images/electronic_08.jpg",
                title: "Sport machine",
                price: "$300.00"
              }
            ]
          },
          {
            title: "New Arrivals",
            products: [
              {
                image1: "assets/images/sport_04.jpg",
                image2: "assets/images/sport_05.jpg",
                title: "Sport machine",
                price: "$200.00"
              },
              {
                image1: "assets/images/fashions_01.jpg",
                image2: "assets/images/fashions_01.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/sport_06.jpg",
                image2: "assets/images/sport_07.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/furniture_01.jpg",
                image2: "assets/images/furniture_03.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/furniture_04.jpg",
                image2: "assets/images/furniture_05.jpg",
                title: "Sport machine",
                price: "$300.00"
              },
              {
                image1: "assets/images/electronic_05.jpg",
                image2: "assets/images/electronic_08.jpg",
                title: "Sport machine",
                price: "$300.00"
              }
            ]
          }
        ]
      },
      banners: [
        {
          image: "assets/images/home1_bn1.png",
          url: "../../collections/all.html"
        },
        {
          image: "assets/images/home1_bn1.png",
          url: "../../collections/all.html"
        },
        {
          image: "assets/images/home1_bn1.png",
          url: "../../collections/all.html"
        }
      ]
    };
  }

  render() {
      //let boxShowCaseSliders = this.state.boxShowCaseSliders;
      //let boxShowCase = this.state.boxShowCase;
      let recommendations = this.state.recommendations;
      //let rightCategory = this.state.rightCategory;
      //let leftCategory = this.state.leftCategory;
      //let tabWithSlider = this.state.tabWithSlider;

      let banner1 = this.state.banners[0];
      let banner2 = this.state.banners[1];
      let banner3 = this.state.banners[2];


      return (
        <div className="App">
            <Row>              
              <Header />
            </Row>

            <Row><BoxShowcase /></Row>
            <Row style={{marginTop: '20px'}}><ProductRow categoryName="Consumer Electronics" recommendations= {recommendations} /></Row>            

            <Row style={{marginTop: '20px'}}><ProductRow categoryName="Home and Garden" recommendations= {recommendations} /></Row>            

            <Row style={{marginTop: '20px'}}><ProductRow categoryName="Automobiles and Motorcycles" recommendations= {recommendations} /></Row>
            <BannerRow banner={banner3} />

        </div>
        // <div className="App">
        //   <Header/>
        //   <div className="page-container" id="PageContainer">
        //     <main className="main-content" id="MainContent" role="main">
        //       <BoxShowcase />
        //       <ProductRow recommendations= {recommendations} />
        //       <BannerRow banner={banner3} />
        //     </main>
        //   </div>
        //   <Footer/>
        // </div>
      );
    }
  }

export default App;
