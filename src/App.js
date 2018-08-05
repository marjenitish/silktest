import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BoxShowcase from './Components/BoxShowcase';
import ProductRow from './Components/ProductRow';
import BannerRow from './Components/BannerRow';
import TwoColumnProduct from './Components/TwoColumnProduct';
import TabWithSlider from './Components/TabWithSlider';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      boxShowCaseSliders: [
        {
          title1: "Get computer to become a",
          title2: "Pro gamer",
          caption: "Aliquam sed arcu a elit porttitor mattis eu id nibh. Vestibulum ultricies nulla sed dapibus vestibulum.",
          flex_action: "Shop Now",
          image: "assets/images/home1_slideshow_1.jpg"
        },
        {
          title1: "Get machinery to become a",
          title2: "Pro machinery",
          caption: "Machinery sed arcu a elit porttitor mattis eu id nibh. Vestibulum ultricies nulla sed dapibus vestibulum.",
          flex_action: "Explore",
          image: "assets/images/home1_slideshow_1.jpg"
        }
      ],
      boxShowCase: [
        {
          image: "assets/images/home1_slideshow_banner_1.jpg"
        },
        {
          image: "assets/images/home1_slideshow_banner_2.jpg"
        }
      ],
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
      }
    };
  }

  render() {
      let boxShowCaseSliders = this.state.boxShowCaseSliders;
      let boxShowCase = this.state.boxShowCase;
      let recommendations = this.state.recommendations;
      let rightCategory = this.state.rightCategory;
      let leftCategory = this.state.leftCategory;
      let tabWithSlider = this.state.tabWithSlider;
      return (
        <div className="App">
          <Header/>
          <div class="page-container" id="PageContainer">
            <main class="main-content" id="MainContent" role="main">
              <BoxShowcase boxShowCaseSliders= {boxShowCaseSliders} boxShowCase= {boxShowCase} />
              <TwoColumnProduct leftCategory={leftCategory} rightCategory={rightCategory} />                       
              <BannerRow />
              <TabWithSlider tabWithSlider={tabWithSlider} /> 
              <BannerRow />
              <ProductRow recommendations= {recommendations} />
              <BannerRow />
            </main>
          </div>
          <Footer/>
        </div>
      );
    }
  }

export default App;
