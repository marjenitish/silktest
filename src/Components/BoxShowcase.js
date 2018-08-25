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
              image: "assets/images/home3_slideshow_1.jpg"
            },
            {
              title1: "Get machinery to become a",
              title2: "Pro machinery",
              caption: "Machinery sed arcu a elit porttitor mattis eu id nibh. Vestibulum ultricies nulla sed dapibus vestibulum.",
              flex_action: "Explore",
              image: "assets/images/home3_slideshow_1.jpg"
            }
          ],
          boxShowCase: [
            {
              image: "assets/images/home3_slideshow_banner_1.jpg"
            },
            {
              image: "assets/images/home3_slideshow_banner_2.jpg"
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
										<div className="home-sidemenu-inner col-sm-3">
											<ul className="navigation_links_left">
                                                <li className="dropdown mega-menu _icon">
                                                <a href="super-deal.html" className="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                    <img src="assets/images/home3_icon_electronics.png" alt="electronics" />
													<span>Machinery / Industrial</span>
                                                    <i className="fa fa-angle-right"></i>
                                                    <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                    <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                </a>
                                                <div className="megamenu-container megamenu-container-4 dropdown-menu" 
                                                    style={{    display: 'none', 
                                                                width: '900px', 
                                                                boxShadow: '0px 6px 12px 10px rgba(0,0,0,.175)',
                                                                position: 'fixed',
                                                                marginLeft: '-1035px',
                                                                display: 'none',
                                                                width: '900px',
                                                                top: '162px'
                                                            }}>
                                                                <ul className="sub-mega-menu" style={{padding: '10px'}}>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Tools</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6"  style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Machinery</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Measurement Instrument</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>

                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Hardware</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                
                                                                </ul>
                                                    </div>
                                                        
											</li>
                                                
                                            <li className="dropdown mega-menu _icon">
                                                <a href="super-deal.html" className="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                    <img src="assets/images/home3_icon_electronics.png" alt="electronics" />
													<span>Agriculture and Foods</span>
                                                    <i className="fa fa-angle-right"></i>
                                                    <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                    <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                </a>
                                                <div className="megamenu-container megamenu-container-4 dropdown-menu" 
                                                    style={{    display: 'none', 
                                                                width: '900px', 
                                                                boxShadow: '0px 6px 12px 10px rgba(0,0,0,.175)',
                                                                position: 'fixed',
                                                                marginLeft: '-1035px',
                                                                display: 'none',
                                                                width: '900px',
                                                                top: '162px'
                                                            }}>
                                                                <ul className="sub-mega-menu" style={{padding: '10px'}}>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Tools</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6"  style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Machinery</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Measurement Instrument</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>

                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Hardware</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                
                                                                </ul>
                                                    </div>
                                                       
											</li>
                                            
                                            <li className="dropdown mega-menu _icon">
                                                <a href="super-deal.html" className="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                    <img src="assets/images/home3_icon_electronics.png" alt="electronics" />
													<span>Electronics</span>
                                                    <i className="fa fa-angle-right"></i>
                                                    <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                    <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                </a>
                                                <div className="megamenu-container megamenu-container-4 dropdown-menu" 
                                                    style={{    display: 'none', 
                                                                width: '900px', 
                                                                boxShadow: '0px 6px 12px 10px rgba(0,0,0,.175)',
                                                                position: 'fixed',
                                                                marginLeft: '-1035px',
                                                                display: 'none',
                                                                width: '900px',
                                                                top: '162px'
                                                            }}>
                                                                <ul className="sub-mega-menu" style={{padding: '10px'}}>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Tools</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6"  style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Machinery</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Measurement Instrument</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>

                                                                    <li className="mega-links mega4-collumn1 col-sm-6" style={{marginBottom: '10px'}}>
                                                                        <ul>
                                                                            <li style={{color: '#3476B5', fontWeight: 'bold'}} className="list-title">Hardware</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Agriculture Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Building Material</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Electronics Machinery</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Engineering and Construction</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Packaging Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Printing Machine</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Metal and Metallurgy Machine</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                
                                                                </ul>
                                                    </div>
                                                       
											</li>
                                             
												
												<li className="nav-item _icon">
													<a href="collections-all.html">
														<img src="assets/images/home3_icon_sports.png" alt="sports-outdoors" />
														<span>Sports & Outdoors</span>
													</a>
												</li>
												<li className="nav-item _icon">
													<a href="collections-all.html">
														<img src="assets/images/home3_icon_smartphone.png" alt="smartphone-tablets" />
														<span>Smartphone & Tablets</span>
													</a>
												</li>
												<li className="nav-item _icon">
													<a href="collections-all.html">
														<img src="assets/images/home3_icon_health.png" alt="health-beauty" />
														<span>Health & Beauty</span>
													</a>
												</li><li className="nav-item _icon">
													<a href="collections-all.html">
														<img src="assets/images/home3_icon_bags.png" alt="bags-shoes-accessories" />
														<span>Bags, Shoes & Accessories</span>
													</a>
												</li>
												<li className="nav-item _icon">
													<a href="collections-all.html">
														<img src="assets/images/home3_icon_laptops.png" alt="laptops-accessories" />
														<span>Laptops & Accessories</span>
													</a>
												</li>
												<li className="nav-item _icon">
													<a href="collections-all.html">
														<img src="assets/images/home3_icon_jewelry.png" alt="jewelry-watches" />
														<span>Jewelry &amp; Watches</span>
													</a>
												</li>
												<li className="nav-item nav-view-more">
													<a href="collections-all.html">
														<span>View More</span>
													</a>
												</li>
											</ul>
										</div>
										<div className="home-slideshow-inner col-sm-6">
											<div className="home-slideshow">
												<div id="home_main-slider" className="carousel slide  main-slider">
													<ol className="carousel-indicators">
														<li data-target="#home_main-slider" data-slide-to="0" className="carousel-1"></li>
														<li data-target="#home_main-slider" data-slide-to="1" className="carousel-2 active"></li>
													</ol>
													<div className="carousel-inner">
                                                        {this.renderSlideshow(boxShowCaseSliders)}
													</div>
													<a className="left carousel-control" href="index-3.html#home_main-slider" data-slide="prev">
														<span className="icon-prev"></span>
													</a>
													<a className="right carousel-control" href="index-3.html#home_main-slider" data-slide="next">
														<span className="icon-next"></span>
													</a>
												</div>
											</div>
										</div>
										<div className="home-banner-inner col-sm-3">
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