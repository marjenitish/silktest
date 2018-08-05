import React, {Component} from 'react';

export default class BoxShowcase extends Component {


    renderSlideshow = this.props.boxShowCaseSliders.map(function (now, index) {
        console.log(index);
        var status = "item image";
        if(index == 0){
            var status = "item image active";
        }
        return (
            <div className={status}>
            <img src={now.image} alt="" title="Image Slideshow" />
            <div className="slideshow-caption position-right">
                <div className="slide-caption">
                    <div className="group-caption">
                        <div className="content">
                            <span className="title_1">
                                {now.title1}
                            </span>
                            <span className="title_2">
                                {now.title2}
                            </span>
                            <span className="caption">
                                {now.caption}
                            </span>
                        </div>
                        <div className="flex-action">
                            <a className="btn" href="collections-all.html">{now.flex_action}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        );
      }, this);

      renderBoxShowCase = this.props.boxShowCase.map(function(now){
          return(
            <div className="banner-1">
                <a href="collections-all.html">
                    <img src={now.image} alt="" />
                </a>
            </div>  
          );

      }, this);

    render(){
        console.log('props',this.props.cases);
        return (
            <div id="shopify-section-1490952756465" className="shopify-section index-section index-section-slideshow">
                <div data-section-id="1490952756465" data-section-type="slideshow-section">
                    <section className="home_slideshow main-slideshow">
                        <div className="home-slideshow-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="group-home-slideshow">
                                        <div className="home-slideshow-inner col-sm-8">
                                            <div className="home-slideshow">
                                                <div id="home_main-slider" className="carousel slide  main-slider">
                                                    <ol className="carousel-indicators">
                                                        <li data-target="#home_main-slider" data-slide-to="0" className="carousel-1"></li>
                                                        <li data-target="#home_main-slider" data-slide-to="1" className="carousel-2 active"></li>
                                                    </ol>
                                                    <div className="carousel-inner">
                                                        
                                                        {this.renderSlideshow}
                                                    </div>
                                                    <a className="left carousel-control" href="index.html#home_main-slider" data-slide="prev">
                                                        <span className="icon-prev"></span>
                                                    </a>
                                                    <a className="right carousel-control" href="index.html#home_main-slider" data-slide="next">
                                                        <span className="icon-next"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-banner-inner col-sm-4">
                                            <div className="banner-content">
                                                {this.renderBoxShowCase}
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