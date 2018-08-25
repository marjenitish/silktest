import React, {Component} from 'react';

export default class BoxShowcase extends Component {

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
          ]
        };
    }

    renderSlideshow = (boxShowCaseSliders) => boxShowCaseSliders.map(function (now, index) {
        console.log(index);
        var status = "item image";
        if(index === 0){
            status = "item image active";
        }
        return (
            <div className={status} key={index}>
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

    renderBoxShowCase = (boxShowCase) => boxShowCase.map(function(now, index){
        return(
            <div className="banner-1" key={index}>
                <a href="collections-all.html">
                    <img src={now.image} alt="" />
                </a>
            </div>  
        );

    }, this);

    render(){
        let boxShowCaseSliders = this.state.boxShowCaseSliders;
        let boxShowCase = this.state.boxShowCase;

        return (
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
                                                        
                                                        {this.renderSlideshow(boxShowCaseSliders)}
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
                                                {this.renderBoxShowCase(boxShowCase)}
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