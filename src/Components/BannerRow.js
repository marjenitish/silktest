import React, {Component} from 'react';

export default class BannerRow extends Component {
    render(){
        return (
            <div className="shopify-section index-section index-section-banner">
                <div data-section-id="1491192677181" data-section-type="banner-section">
                    <section className="home_banner_layout">
                        <div className="home_banner_wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="home_banner_inner">
                                        <div className="home_banner_content">
                                            <div className="col-sm-12 banner_item">
                                                <a href={this.props.banner.url}>
                                                    <img src={this.props.banner.image} alt="" />
                                                </a>
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