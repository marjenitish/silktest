import React, {Component} from 'react';

export default class ProductRow extends Component {

    recommendations = this.props.recommendations.map(function (now, index) {        
        return (
            <div className="content_product col-sm-2" key={index}>
                <div className="row-container product list-unstyled clearfix">
                    <div className="row-left">
                        <a href="product.html" className="hoverBorder container_item">
                            <div className="hoverBorderWrapper">
                                <img src={now.image1} className="not-rotation img-responsive front" alt={now.title} />
                                <div className="mask"></div>
                                <img src={now.image2} className="rotation img-responsive" alt={now.title} />
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
                            <a className="title-5" href="product.html">{now.title}</a>
                        </div>
                        <div className="product-price">
                            <span className="price_sale">
                                <span className="money" data-currency-usd={now.price}>{now.price}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>                                            
        );
      }, this);

    render(){
        return (
            <section className="home_prosli_layout">
                        <div className="home_prosli_wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="prosli_group">
                                        <div className="page-title">
                                            <h2>Recommendations for you</h2>
                                            <a href="../../collections/maybe-you-prefer.html" className="prosli_action">View all products</a>
                                        </div>
                                        <div className="home_prosli_inner">
                                            <div className="home_prosli_content">
                                                {this.recommendations}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>
            
        );
    }
}