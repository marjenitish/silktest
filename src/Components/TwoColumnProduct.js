import React, {Component} from 'react';

export default class TwoColumnProduct extends Component {

    twoRow = (category) => {
        return (
            <div className="column_item">
                <div className="column_product product_full">
                    <div className="row-container product list-unstyled clearfix">
                        <div className="row-left">
                            <a href="product.html" className="hoverBorder container_item">
                                <div className="hoverBorderWrapper">
                                    <img src={category[0].image1} className="not-rotation img-responsive front" alt="Sport machine" />
                                    <div className="mask"></div>
                                    <img src={category[0].image1} className="rotation img-responsive" alt="Sport machine" />
                                </div>
                            </a>
                        </div>
                        <div className="row-right animMix">
                            <div className="product-title">
                                <a className="title-5" href="product.html">{category[0].title}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column_product">
                    <div className="row-container ">
                        <div className="product home_product">
                            <div className="row-left">
                                <a href="product.html" className="container_item">
                                    <div className="hoverBorderWrapper">
                                        <img src={category[1].image1} className="not-rotation img-responsive front" alt="Digital equipment" />
                                        <div className="mask"></div>
                                        <img src={category[1].image2} className="rotation img-responsive" alt="Digital equipment" />
                                    </div>
                                </a>
                            </div>
                            <div className="row-right">
                                <div className="product-title">
                                    <a className="title-5" href="product.html">{category[1].title}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                                  
        );
    }
    threeRow = (category) => {
        return(
            category.map(function(category, index){
                if(index >= 2){
                    return (
                        <div className="column_product">
                            <div className="product home_product">
                                <div className="row-left">
                                    <a href="product.html" className="container_item">
                                        <div className="hoverBorderWrapper">
                                            <img src={category.image1} className="not-rotation img-responsive front" alt="Digital equipment" />
                                            <div className="mask"></div>
                                            <img src={category.image2} className="rotation img-responsive" alt="Digital equipment" />
                                        </div>
                                    </a>
                                </div>
                                <div className="row-right">
                                    <div className="product-title">
                                        <a className="title-5" href="product.html">{category.title}</a>
                                    </div>
                                </div>
                            </div>
                        </div>                                                                  
                    );

                }
            })
        ); 
    }
    render(){
        let leftcategories = this.props.leftCategory.categories;
        return (
            <div id="shopify-section-1490953257213" className="shopify-section index-section index-section-procol">
                <div data-section-id="1490953257213" data-section-type="procol-section">
                    <section className="home_procol_layout">
                        <div className="home_procol_wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="home_procol_inner">
                                        <div className="home_procol_content">
                                            <div className="col-sm-6 procol_column">
                                                <div className="group-procol">
                                                    <div className="group-inner">
                                                        <div className="page-title">
                                                            <img src={this.props.leftCategory.icon} alt="" />
                                                            <h2>{this.props.leftCategory.title}</h2>
                                                        </div>
                                                        <div className="column_content style_1">
                                                            {this.twoRow(leftcategories)}
                                                            <div className="column_item">
                                                                <div className="row-container ">
                                                                    {this.threeRow(this.props.leftCategory.categories)}                                                            
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 procol_column">
                                                <div className="group-procol">
                                                    <div className="group-inner">
                                                        <div className="page-title">
                                                            <img src={this.props.rightCategory.icon} alt="" />
                                                            <h2>{this.props.rightCategory.title}</h2>
                                                        </div>
                                                        <div className="column_content style_2">
                                                            <div className="column_item">
                                                                <div className="row-container ">
                                                                    {this.threeRow(this.props.rightCategory.categories)}
                                                                </div>
                                                            </div>
                                                            {this.twoRow(this.props.rightCategory.categories)}
                                                        </div>
                                                    </div>
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