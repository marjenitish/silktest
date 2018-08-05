import React, {Component} from 'react';

export default class TabWithSlider extends Component {

    constructor(props){
        super(props);
        this.state = {
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

    renderTabs = (tabWithSlider) => tabWithSlider.tabs.map(function(tab, index){
        var tabClass = "";
        if(index === 0){
            var tabClass = "active";
        }
        return (
            <li className={tabClass}>
                <a href="index.html#home_protab1_tab_1" data-toggle="tab">{tab.title}</a>
            </li>                                        
        );
    });

    renderTabsPaneInside = (tab) => tab.products.map(function(tabPane){
        return(
                <div className="content_product">
                    <div className="row-container product list-unstyled clearfix">
                        <div className="row-left">
                            <a href="product.html" className="hoverBorder container_item">
                                <div className="hoverBorderWrapper">
                                    <img src={tabPane.image1} className="not-rotation img-responsive front" alt="Sport machine" />
                                    <div className="mask"></div>
                                    <img src={tabPane.image2} className="rotation img-responsive" alt="Sport machine" />
                                </div>
                            </a>
                            <div className="hover-mask">
                                <div className="group-mask">
                                    <div className="inner-mask">
                                        <div className="group-actionbutton">
                                            <form action="./cart.html" method="post">
                                                <div className="effect-ajax-cart">
                                                    <input type="hidden" name="quantity" value="1" />
                                                    <button className="btn select-option" type="button">
                                                        <i className="fa fa-bars"></i>
                                                    </button>
                                                </div>
                                            </form>
                                            <ul className="quickview-wishlist-wrapper">
                                                <li className="quickview hidden-xs hidden-sm">
                                                    <div className="product-ajax-cart">
                                                        <span className="overlay_mask"></span>
                                                        <div data-handle="neque-porro-quisquam-est-qui-dolor-ipsum-quia-11" data-target="#quick-shop-modal" className="quick_shop" data-toggle="modal">
                                                            <a className="">
                                                                <i className="fa fa-search" title="Quick View"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="wishlist hidden-xs">
                                                    <a className="wish-list" href="wish-list.html">
                                                        <span className="hidden-xs">
                                                            <i className="fa fa-heart" title="Wishlist"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="row-right animMix">
                            <div className="product-title">
                                <a className="title-5" href="product.html">{tabPane.title}</a>
                            </div>
                            <div className="product-price">
                                <span className="price_sale">
                                    <span className="money" data-currency-usd="$200.00">{tabPane.price}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
    });

    renderTabsPane = (tabWithSlider) => tabWithSlider.tabs.map(function(tab,index){
        var tabClass = "tab-pane";
        if(index === 0){
            var tabClass = "tab-pane active";
        }
        return (
            <div className={tabClass} id="home_protab1_tab_1">
                <div className="protab1_item">
                    {this.renderTabsPaneInside(tab)}      
                </div>
            </div>                                                                                 
        );
    }, this);

    render(){
        let tabWithSlider = this.state.tabWithSlider;

        return (
            <div className="shopify-section index-section index-section-protab1">
                <div data-section-id="1490953841934" data-section-type="protab1-section">
                    <section className="home_protab1_layout">
                        <div className="home_protab1_wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="home_protab1_inner">
                                        <div className="home_protab1_content">
                                            <div className="protab1_top page-top">
                                                <div className="page-title">
                                                    <img src="assets/images/home1_icon-fa.png" alt="" />
                                                    <h2>{tabWithSlider.title}</h2>
                                                </div>
                                                <ul className="nav nav-tabs">
                                                    {this.renderTabs(tabWithSlider)}
                                                </ul>
                                            </div>
                                            <div className="protab1_bottom">
                                                <div className="protab1_banner">
                                                    <a href="collections-all.html">
                                                        <img src="assets/images/home1_banner1.png" alt="" />
                                                    </a>
                                                </div>
                                                <div className="tab-content">
                                                    {this.renderTabsPane(tabWithSlider)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            
        );
    }
}