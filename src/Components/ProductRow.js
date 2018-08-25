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
                    </div>
                    <div className="row-right animMix">
                        <div className="product-title">
                            <a className="title-5" href="product.html">{now.title}</a>
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
                                        <div className="page-title" style={{marginBottom: '0px'}}>
                                            <h2>{this.props.categoryName}</h2>
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