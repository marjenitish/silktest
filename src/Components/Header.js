import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header id="top" className="header clearfix">
                <div id="shopify-section-theme-header" className="shopify-section">
                    <div data-section-id="theme-header" data-section-type="header-section">
                        <section className="top-header">
                            <div className="top-header-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="top-header-inner">
                                            <ul className="unstyled top-menu">
                                                <li className="nav-item active">
                                                    <a href="index.html">
                                                        <span>Request for Quotations</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item active">
                                                    <a href="index.html">
                                                        <span>Become a Agent</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item active">
                                                    <a href="index.html">
                                                        <span>Help</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item active">
                                                    <a href="index.html">
                                                        <span>Support</span>
                                                    </a>
                                                </li>
                                                <li className="toolbar-customer my-wishlist">
                                                    <a href="wish-list.html">Wishlist</a>
                                                </li>
                                                <li className="toolbar-customer login-account">
                                                    <span id="loginButton" className="dropdown-toggle" data-toggle="dropdown">
                                                        <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                        <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                        <a href="login.html">Login</a>
                                                    </span>
                                                    <div id="loginBox" className="dropdown-menu text-left" styles={{display: 'none'}}>
                                                        <form method="post" action="./login.html" id="customer_login" accept-charset="UTF-8">
                                                            <input type="hidden" value="customer_login" name="form_type" />
                                                            <input type="hidden" name="utf8" value="✓" />
                                                            <div id="bodyBox">
                                                                <ul className="control-container customer-accounts list-unstyled">
                                                                    <li className="clearfix">
                                                                        <input type="email" value="" placeholder="Email Address" name="customer[email]" id="customer_email_box" className="form-control"
                                                                        />
                                                                    </li>
                                                                    <li className="clearfix">
                                                                        <input type="password" value="" placeholder="Password" name="customer[password]" id="customer_password_box" className="form-control password"
                                                                        />
                                                                    </li>
                                                                    <li className="clearfix">
                                                                        <button className="btn btn-1" type="submit">Login</button>
                                                                    </li>
                                                                    <li className="clearfix">
                                                                        <a href="login.html">
                                                                            <span>&gt; Forgot your password ?</span>
                                                                        </a>
                                                                        <a href="register.html">
                                                                            <span>&gt; Register new account</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </li>
                                                <li className="toolbar-customer log-out">
                                                    <a href="register.html">
                                                        <span>/</span> Register</a>
                                                </li>
                                                <li className="currency_group hidden-xs">
                                                    <div className="currencies-switcher">
                                                        <div className="currency btn-group uppercase">
                                                            <a className="currency_wrapper dropdown-toggle" data-toggle="dropdown">
                                                                <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                <span className="currency_code heading hidden-xs">NRS</span>
                                                                <span className="currency_code visible-xs">NRS</span>
                                                                <i className="fa fa-angle-down"></i>
                                                            </a>
                                                            <ul className="currencies dropdown-menu text-left">
                                                                <li className="currency-USD active">
                                                                    <a href="">NRS</a>
                                                                    <input type="hidden" value="NRS" />
                                                                </li>
                                                                <li className="currency-RNB">
                                                                    <a href="">RNB</a>
                                                                    <input type="hidden" value="RNB" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="main-header">
                            <div className="main-header-wrapper">
                                <div className="container clearfix">
                                    <div className="row">
                                        <div className="main-header-inner">
                                            <div className="nav-top">
                                                <div className="nav-logo">
                                                    <a href="index.html">
                                                        <img src="assets/images/logo11.png" style={{width: "150px"}} alt="" title="Sarahmarket 1" />
                                                    </a>
                                                </div>

                                                <div class="group-search-cart">
                                                    <div class="nav-search">
                                                        <form class="search" action="./search.html">
                                                            <input type="hidden" name="type" value="product" />
                                                            <input type="text" name="q" class="search_box" placeholder="Enter your keyword ..." value="" />
                                                            <div class="collections-selector">
                                                                <select class="single-option-selector" data-option="collection-option" id="collection-option" name="collection">
                                                                    <option value="all">Products</option>
                                                                    <option value="best-sellers">Suppliers</option>
                                                                </select>
                                                            </div>
                                                            <button class="search_submit" type="submit">
                                                                <svg aria-hidden="true" role="presentation" class="icon icon-search" viewBox="0 0 37 40">
                                                                    <path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z">

                                                                    </path>
                                                                </svg>
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div class="nav-cart " id="cart-target">
                                                        <div class="cart-info-group">
                                                            <a href="cart.html" class="cart dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                <div class="num-items-in-cart">
                                                                    <div class="items-cart-left">
                                                                        <img class="cart_img" src="assets/images/bg-cart.png" alt="Image Cart" title="Image Cart" />
                                                                        <span class="cart_text icon">
                                                                            <span class="number">2</span>
                                                                        </span>
                                                                    </div>
                                                                    <div class="items-cart-right">
                                                                        <span class="title_cart">My Cart</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div class="dropdown-menu cart-info" style={{display: 'none'}}>
                                                                <div class="cart-content">
                                                                    <div class="items control-container">
                                                                        <div class="row">
                                                                            <a class="cart-close" title="Remove" href="javascript:void(0);">
                                                                                <i class="fa fa-times"></i>
                                                                            </a>
                                                                            <div class="cart-left">
                                                                                <a class="cart-image" href="product.html">
                                                                                    <img src="assets/images/electronic_01_compact.jpg" alt="" title="" />
                                                                                </a>
                                                                            </div>
                                                                            <div class="cart-right">
                                                                                <div class="cart-title">
                                                                                    <a href="product.html">Electronic equipment - L / red</a>
                                                                                </div>
                                                                                <div class="cart-price">
                                                                                    <span class="money" data-currency-usd="$200.00" data-currency="USD">$200.00</span>
                                                                                    <span class="x"> x1</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <a class="cart-close" title="Remove" href="javascript:void(0);">
                                                                                <i class="fa fa-times"></i>
                                                                            </a>
                                                                            <div class="cart-left">
                                                                                <a class="cart-image" href="product.html">
                                                                                    <img src="assets/images/electronic_02_compact.jpg" alt="" title="" />
                                                                                </a>
                                                                            </div>
                                                                            <div class="cart-right">
                                                                                <div class="cart-title">
                                                                                    <a href="product.html">Electronic equipment - L / red</a>
                                                                                </div>
                                                                                <div class="cart-price">
                                                                                    <span class="money" data-currency-usd="$400.00" data-currency="USD">$400.00</span>
                                                                                    <span class="x"> x1</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="subtotal">
                                                                        <span>Subtotal:</span>
                                                                        <span class="cart-total-right money" data-currency-usd="$600.00"
                                                                            data-currency="USD">$600.00</span>
                                                                    </div>
                                                                    <div class="action">
                                                                        <button class="btn" onclick="window.location='./cart.html'">View Cart
                                                                            <i class="fa fa-caret-right"></i>
                                                                        </button>
                                                                        <button class="btn float-right" onclick="window.location='./cart.html'">CHECKOUT
                                                                            <i class="fa fa-caret-right"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
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

                        <section class="navigation-header">
                            <div class="navigation-header-wrapper">
                                <div class="container clearfix">
                                    <div class="row">
                                        <div class="main-navigation-inner">
                                            <div class="navigation_area">
                                                <div class="navigation_left">
                                                    <div class="group_navbtn">
                                                        <a href="collections.html" class="dropdown-toggle" data-toggle="dropdown">
                                                            <span class="dropdown-toggle">
                                                                My Market
                                                            </span>
                                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                                        </a>
                                                        <ul class="navigation_links_left dropdown-menu" styles={{display: 'none'}}>                                                            
                                                            <li class="nav-item _icon">
                                                                <a href="collections.html">
                                                                    <span>Digital</span>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item _icon">
                                                                <a href="collections.html">
                                                                    <span>Furniture</span>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item _icon">
                                                                <a href="collections.html">
                                                                    <span>Mobile Phone</span>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item _icon">
                                                                <a href="collections.html">
                                                                    <span>Other Services</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="navigation_right">
                                                    <ul class="navigation_links">



                                                        <li class="dropdown mega-menu">
                                                            <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Machinery</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-2 dropdown-menu" style={{width: '1170px'}}>
                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega2-collumn1 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Book &amp; office supply</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Science</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Economic</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Office Supply</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn2 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Food Cupboard</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Breakfast Cereals</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Jam, Honey &amp; Spreads</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Crisps, Snacks &amp; Nuts</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li class="dropdown mega-menu">
                                                            <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Electronics</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-2 dropdown-menu" style={{width: '1170px'}}>
                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega2-collumn1 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Book &amp; office supply</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Science</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Economic</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Office Supply</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn2 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Food Cupboard</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Breakfast Cereals</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Jam, Honey &amp; Spreads</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Crisps, Snacks &amp; Nuts</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>


                                                        <li class="dropdown mega-menu">
                                                            <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Transportation</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-2 dropdown-menu" style={{width: '1170px'}}>
                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega2-collumn1 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Book &amp; office supply</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Science</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Economic</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Office Supply</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn2 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Food Cupboard</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Breakfast Cereals</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Jam, Honey &amp; Spreads</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Crisps, Snacks &amp; Nuts</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li class="dropdown mega-menu">
                                                            <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Clothing</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-2 dropdown-menu" style={{width: '1170px'}}>
                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega2-collumn1 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Book &amp; office supply</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Science</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Economic</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Office Supply</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn2 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Food Cupboard</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Breakfast Cereals</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Jam, Honey &amp; Spreads</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Crisps, Snacks &amp; Nuts</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li class="dropdown mega-menu">
                                                            <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Home Products</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-2 dropdown-menu" style={{width: '1170px'}}>
                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega2-collumn1 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Book &amp; office supply</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Science</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Economic</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Office Supply</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn2 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Food Cupboard</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Breakfast Cereals</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Jam, Honey &amp; Spreads</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Crisps, Snacks &amp; Nuts</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    
                                                                    <li class="mega-links mega2-collumn3 col-sm-2">
                                                                        <ul>
                                                                            <li class="list-title">Home &amp; garden</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                        
                                                    </ul>
                                                </div>
                                                <div class="navigation_icon">
                                                    <div class="navigation_icon_group">
                                                        <div class="icon_cart">
                                                            <div class="cart-info-group">
                                                                <a href="cart.html" class="cart dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                    <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                    <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                    <div class="num-items-in-cart">
                                                                        <div class="items-cart-left">
                                                                            <img class="cart_img" src="assets/images/bg-cart.png" alt="Image Cart" title="Image Cart" />
                                                                            <span class="cart_text icon">
                                                                                <span class="number">2</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div class="dropdown-menu cart-info">
                                                                    <div class="cart-content">
                                                                        <div class="items control-container">
                                                                            <div class="row">
                                                                                <a class="cart-close" title="Remove" href="javascript:void(0);">
                                                                                    <i class="fa fa-times"></i>
                                                                                </a>
                                                                                <div class="cart-left">
                                                                                    <a class="cart-image" href="product.html">
                                                                                        <img src="assets/images/electronic_01_compact.jpg" alt="" title="" />
                                                                                    </a>
                                                                                </div>
                                                                                <div class="cart-right">
                                                                                    <div class="cart-title">
                                                                                        <a href="product.html">Electronic equipment - L / red</a>
                                                                                    </div>
                                                                                    <div class="cart-price">
                                                                                        <span class="money" data-currency-usd="$200.00" data-currency="USD">$200.00</span>
                                                                                        <span class="x"> x1</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <a class="cart-close" title="Remove" href="javascript:void(0);">
                                                                                    <i class="fa fa-times"></i>
                                                                                </a>
                                                                                <div class="cart-left">
                                                                                    <a class="cart-image" href="product.html">
                                                                                        <img src="assets/images/electronic_02_compact.jpg" alt="" title="" />
                                                                                    </a>
                                                                                </div>
                                                                                <div class="cart-right">
                                                                                    <div class="cart-title">
                                                                                        <a href="product.html">Electronic equipment - L / red</a>
                                                                                    </div>
                                                                                    <div class="cart-price">
                                                                                        <span class="money" data-currency-usd="$400.00" data-currency="USD">$400.00</span>
                                                                                        <span class="x"> x1</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="subtotal">
                                                                            <span>Subtotal:</span>
                                                                            <span class="cart-total-right money" data-currency-usd="$600.00"
                                                                                data-currency="USD">$600.00</span>
                                                                        </div>
                                                                        <div class="action">
                                                                            <button class="btn" onclick="window.location='./cart.html'">View Cart
                                                                                <i class="fa fa-caret-right"></i>
                                                                            </button>
                                                                            <button class="btn float-right" onclick="window.location='./cart.html'">CHECKOUT
                                                                                <i class="fa fa-caret-right"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
            </header>
        );
    }
}