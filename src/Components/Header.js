import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header id="top" className="header clearfix">
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
                                                            <form method="post" action="./login.html" id="customer_login" acceptCharset="UTF-8">
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
                                                    <a href="index-3.html"><img src="assets/images/logo_3.png" alt="" title="SilkMarket" /></a>
                                                    <h1 style={{ display: 'none' }}><a href="index-3.html">SilkMarket 3</a></h1>
                                                </div>
                                                <div className="group-search-cart">
                                                    <div className="nav-search">
                                                    <form className="search" action="./search.html">
                                                            <input type="hidden" name="type" value="product" />
                                                            <input type="text" name="q" className="search_box" placeholder="Enter your keyword ..." value="" />
                                                            <div className="collections-selector">
                                                                <select className="single-option-selector" data-option="collection-option" id="collection-option" name="collection">
                                                                    <option value="all">Products</option>
                                                                    <option value="best-sellers">Suppliers</option>
                                                                </select>
                                                            </div>
                                                            <button className="search_submit" type="submit">
                                                                <svg aria-hidden="true" role="presentation" className="icon icon-search" viewBox="0 0 37 40">
                                                                    <path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z">

                                                                    </path>
                                                                </svg>
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div className="nav-cart " id="cart-target">
                                                        <div className="cart-info-group">
                                                            <a href="cart.html" className="cart dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i className="sub-dropdown visible-sm visible-md visible-lg"></i> 
                                                                <div className="num-items-in-cart">
                                                                    <div className="items-cart-left">
                                                                        <img className="cart_img" src="assets/images/bg-cart-2.png" alt="Image Cart" title="Image Cart" />
                                                                        <span className="cart_text icon"><span className="number">2</span></span>       
                                                                    </div>
                                                                    <div className="items-cart-right">
                                                                        <span className="title_cart">Shopping Cart</span>        
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="dropdown-menu cart-info" style={{ display: 'none' }}>
                                                                <div className="cart-content">
                                                                    <div className="items control-container">
                                                                        <div className="row">
                                                                            <a className="cart-close" title="Remove" href="javascript:void(0);">
                                                                                <i className="fa fa-times"></i>
                                                                            </a>
                                                                            <div className="cart-left">
                                                                                <a className="cart-image" href="product.html">
                                                                                    <img src="assets/images/electronic_01_compact.jpg" alt="" title="" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="cart-right">
                                                                                <div className="cart-title"><a href="product.html">Electronic equipment - L / red</a></div>
                                                                                <div className="cart-price"><span className="money" data-currency-usd="$200.00" data-currency="USD">$200.00</span><span className="x"> x1</span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <a className="cart-close" title="Remove" href="javascript:void(0);">
                                                                                <i className="fa fa-times"></i>
                                                                            </a>
                                                                            <div className="cart-left">
                                                                                <a className="cart-image" href="product.html">
                                                                                    <img src="assets/images/electronic_02_compact.jpg" alt="" title="" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="cart-right">
                                                                                <div className="cart-title"><a href="product.html">Electronic equipment - L / red</a></div>
                                                                                <div className="cart-price"><span className="money" data-currency-usd="$400.00" data-currency="USD">$400.00</span><span className="x"> x1</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="subtotal"><span>Subtotal:</span><span className="cart-total-right money" data-currency-usd="$600.00" data-currency="USD">$600.00</span></div>
                                                                    <div className="action"><button className="btn">View Cart<i className="fa fa-caret-right"></i></button><button className="btn float-right">CHECKOUT<i className="fa fa-caret-right"></i></button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mobile-navigation">
                                                <button id="showLeftPush" className="visible-xs"><i className="fa fa-bars fa-2x"></i></button>
                                                <div className="nav-logo visible-xs">
                                                    <div><a href="index-3.html"><img src="assets/images/logo_3_mobile.png" alt="" title="SilkMarket" /></a></div>
                                                </div>
                                                <div className="icon_cart visible-xs">
                                                    <div className="cart-info-group">
                                                        <a href="cart.html" className="cart dropdown-toggle dropdown-link">
                                                            <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                            <i className="sub-dropdown visible-sm visible-md visible-lg"></i> 
                                                            <div className="num-items-in-cart">
                                                                <div className="items-cart-left">
                                                                    <img className="cart_img" src="assets/images/bg-cart-2.png" alt="Image Cart" title="Image Cart" />
                                                                    <span className="cart_text icon"><span className="number">2</span></span>       
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="nav-search visible-xs">
                                                    <form className="search" action="./search.html">
                                                        <input type="hidden" name="type" value="product" />
                                                        <input type="text" name="q" className="search_box" placeholder="Enter your keyword ..." value="" />
                                                        <button className="search_submit" type="submit">
                                                            <svg aria-hidden="true" role="presentation" className="icon icon-search" viewBox="0 0 37 40"><path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path></svg>
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="mobile-navigation-inner">
                                                    <div className="mobile-navigation-content">
                                                        <div className="mobile-top-navigation visible-xs">
                                                            <div className="mobile-content-top">
                                                                <div className="mobile-language-currency">
                                                                    <div className="currencies-switcher">
                                                                        <div className="currency btn-group uppercase">
                                                                            <a className="currency_wrapper dropdown-toggle" data-toggle="dropdown">
                                                                                <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                                <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                                <span className="currency_code heading hidden-xs">USD</span>
                                                                                <span className="currency_code visible-xs">USD</span>
                                                                                <i className="fa fa-angle-down"></i>
                                                                            </a>
                                                                            <ul className="currencies dropdown-menu text-left">
                                                                                <li className="currency-USD active">
                                                                                    <a href="javascript:;">USD</a>
                                                                                    <input type="hidden" value="USD" />
                                                                                </li>
                                                                                <li className="currency-GBP">
                                                                                    <a href="javascript:;">GBP</a>
                                                                                    <input type="hidden" value="GBP" />
                                                                                </li>
                                                                                <li className="currency-AUD">
                                                                                    <a href="javascript:;">AUD</a>
                                                                                    <input type="hidden" value="AUD" />
                                                                                </li>
                                                                                <li className="currency-EUR">
                                                                                    <a href="javascript:;">EUR</a>
                                                                                    <input type="hidden" value="EUR" />
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mobile-top-account">
                                                                    <div className="is-mobile-login">
                                                                        <ul className="customer">
                                                                            <li className="logout">
                                                                                <a href="login.html"><i className="fa fa-user" aria-hidden="true"></i>
                                                                                    <span>Login</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="account">
                                                                                <a href=".register.html"><i className="fa fa-user-plus" aria-hidden="true"></i>
                                                                                    <span>Register</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="is-mobile-cart">
                                                                                <a href="cart.html">
                                                                                    <div className="num-items-in-cart">
                                                                                        <i className="fa fa-shopping-cart"></i>
                                                                                        <span>Cart</span>
                                                                                        <div className="ajax-subtotal" style={{ display: 'none' }}></div>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="nav-menu visible-xs leftnavi" id="is-mobile-nav-menu">
                                                            <div className="is-mobile-menu-content">
                                                                <div className="mobile-content-link">
                                                                    <ul className="nav navbar-nav hoverMenuWrapper">
                                                                        <li className="nav-item active">
                                                                            <a href="index-3.html">
                                                                                Home
                                                                            </a>
                                                                        </li>
                                                                        <li className="nav-item navigation navigation_mobile">
                                                                            <a href="blog.html" className="menu-mobile-link">
                                                                                Blogs
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="arrow">
                                                                                <i className="fa fa-angle-down"></i>
                                                                            </a>
                                                                            <ul className="menu-mobile-container" style={{ display: 'none' }}>
                                                                                <li className=" li-sub-mega navigation_mobile_1">
                                                                                    <a href="blog.html" className="menu-mobile-link">
                                                                                        <span>Home &amp; Garden</span>
                                                                                    </a>
                                                                                    <a href="javascript:void(0)" className="arrow_1">
                                                                                        <i className="fa fa-angle-down"></i>
                                                                                    </a>
                                                                                    <ul className="menu-mobile-container_1" style={{ display: 'none' }}>
                                                                                        <li className=" li-sub-mega">
                                                                                            <a tabIndex="-1" href="collections-all.html">Kitchen</a>
                                                                                        </li>
                                                                                        <li className=" li-sub-mega">
                                                                                            <a tabIndex="-1" href="collections-all.html">Bed Room</a>
                                                                                        </li>
                                                                                        <li className=" li-sub-mega">
                                                                                            <a tabIndex="-1" href="collections-all.html">Garden</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li className=" li-sub-mega">
                                                                                    <a tabIndex="-1" href="blog.html">Baby &amp; Mom</a>
                                                                                </li>
                                                                                <li className=" li-sub-mega">
                                                                                    <a tabIndex="-1" href="blog.html">Beauty &amp; Skin Care</a>
                                                                                </li>
                                                                                <li className=" li-sub-mega">
                                                                                    <a tabIndex="-1" href="blog.html">Food</a>
                                                                                </li>
                                                                                <li className=" li-sub-mega">
                                                                                    <a tabIndex="-1" href="blog.html">News</a>
                                                                                </li>
                                                                                <li className=" li-sub-mega">
                                                                                    <a tabIndex="-1" href="blog.html">Smartphone &amp; Tablet</a>
                                                                                </li>
                                                                                <li className=" li-sub-mega">
                                                                                    <a tabIndex="-1" href="blog.html">Furniture</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li className="nav-item  navigation_mobile">
                                                                            <a href="about-us.html" className="menu-mobile-link">
                                                                                Pages
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="arrow">
                                                                                <i className="fa fa-angle-down"></i>
                                                                            </a>
                                                                            <div className="menu-mobile-container" style={{ display: 'none' }}>
                                                                                <ul className="sub-mega-menu">
                                                                                    <li className="mega1-collumn1">
                                                                                        <ul>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="about-us.html">About Us</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="faqs.html">Shopping Guide</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="lookbook.html">Delivery Information</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="services.html">Privacy Policy</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="contact.html">Sitemap</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li className="mega1-collumn2">
                                                                                        <ul>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="account.html">My account</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="login.html">Login</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="cart.html">My cart</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="wish-list.html">Wishlist</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="cart.html">Checkout</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                        <li className="nav-item  navigation_mobile">
                                                                            <a href="collections.html" className="menu-mobile-link">
                                                                                Category
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="arrow">
                                                                                <i className="fa fa-angle-down"></i>
                                                                            </a>
                                                                            <div className="menu-mobile-container" style={{ display: 'none' }}>
                                                                                <ul className="sub-mega-menu">
                                                                                    <li className="mega2-collumn1">
                                                                                        <ul>
                                                                                            <li className="list-title">Book &amp; office supply</li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Science</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Economic</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Office Supply</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li className="mega2-collumn2">
                                                                                        <ul>
                                                                                            <li className="list-title">Food Cupboard</li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Breakfast Cereals</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Jam, Honey &amp; Spreads</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Crisps, Snacks &amp; Nuts</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li className="mega2-collumn3">
                                                                                        <ul>
                                                                                            <li className="list-title">Home &amp; garden</li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Kitchen</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Bed Room</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Garden</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                        <li className="nav-item  navigation_mobile">
                                                                            <a href="collections-all.html" className="menu-mobile-link">
                                                                                Products
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="arrow">
                                                                                <i className="fa fa-angle-down"></i>
                                                                            </a>
                                                                            <div className="menu-mobile-container" style={{ display: 'none' }}>
                                                                                <ul className="sub-mega-menu">
                                                                                    <li className="mega3-collumn1">
                                                                                        <ul>
                                                                                            <li className="list-title">Category</li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Foods</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Hot Deal</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Fashion</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Travel</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Other Services</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Healthy &amp; Beauty</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li className="mega3-collumn2">
                                                                                        <ul>
                                                                                            <li className="list-title">Pages</li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="collections.html">Shopping cart</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="cart.html">Checkout</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="cart.html">Track order</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="account.html">My account</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="login.html">Login</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="register.html">Register</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                        <li className="nav-item  navigation_mobile">
                                                                            <a href="super-deal.html" className="menu-mobile-link">
                                                                                Top Brands
                                                                            </a>
                                                                            <a href="javascript:void(0)" className="arrow">
                                                                                <i className="fa fa-angle-down"></i>
                                                                            </a>
                                                                            <div className="menu-mobile-container" style={{ display: 'none' }}>
                                                                                <ul className="sub-mega-menu">
                                                                                    <li className="mega4-collumn1">
                                                                                        <ul>
                                                                                            <li className="list-title">Blogs</li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="blog.html">Home &amp; Garden</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="blog.html">Baby &amp; Mom</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="blog.html">Beauty &amp; Skin Care</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="blog.html">Food</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="blog.html">News</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="blog.html">Smartphone &amp; Tablet</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="blog.html">Furniture</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li className="mega4-collumn2">
                                                                                        <ul>
                                                                                            <li className="list-title">List Pages</li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="about-us.html">About us</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="contact.html">Contact</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="faqs.html">FAQs</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="lookbook.html">Lookbook</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="price-table.html">Price Table</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="services.html">Services</a>
                                                                                            </li>
                                                                                            <li className="list-unstyled li-sub-mega">
                                                                                                <a href="super-deal.html">Super Deal</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
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
                        
                        <section className="navigation-header">
                            <div className="navigation-header-wrapper">
                                <div className="container clearfix">
                                    <div className="row">
                                        <div className="main-navigation-inner">
                                            <div className="navigation_area">
                                                <div className="navigation_left">
                                                    <div className="group_navbtn">
                                                        <a href="collections.html" className="dropdown-toggle" data-toggle="dropdown">                     
                                                            <span className="dropdown-toggle">
                                                            Categories
                                                            </span>
                                                            <i className="fa fa-bars" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="navigation_right">
                                                    <ul className="navigation_links">
                                                        <li className="nav-item active">
                                                            <a href="index-3.html">
                                                                <span>Home</span>
                                                            </a>
                                                        </li>
                                                        <li className="nav-item dropdown navigation">
                                                            <a href="blog.html" className="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Blogs</span>
                                                                <i className="fa fa-angle-down"></i>
                                                                <i className="sub-dropdown1  visible-sm visible-md visible-lg"></i>
                                                                <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className=" dropdown li-sub-mega">
                                                                    <a href="blog.html">
                                                                        <span>Home &amp; Garden</span>
                                                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                                        <i className="sub-dropdown1  visible-sm visible-md visible-lg"></i>
                                                                        <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li className="li-sub-mega">
                                                                            <a tabIndex="-1" href="collections.html">Kitchen</a>
                                                                        </li>
                                                                        <li className="li-sub-mega">
                                                                            <a tabIndex="-1" href="collections.html">Bed Room</a>
                                                                        </li>
                                                                        <li className="li-sub-mega">
                                                                            <a tabIndex="-1" href="collections.html">Garden</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="li-sub-mega">
                                                                    <a tabIndex="-1" href="blog.html">Baby &amp; Mom</a>
                                                                </li>
                                                                <li className="li-sub-mega">
                                                                    <a tabIndex="-1" href="blog.html">Beauty &amp; Skin Care</a>
                                                                </li>
                                                                <li className="li-sub-mega">
                                                                    <a tabIndex="-1" href="blog.html">Food</a>
                                                                </li>
                                                                <li className="li-sub-mega">
                                                                    <a tabIndex="-1" href="blog.html">News</a>
                                                                </li>
                                                                <li className="li-sub-mega">
                                                                    <a tabIndex="-1" href="blog.html">Smartphone &amp; Tablet</a>
                                                                </li>
                                                                <li className="li-sub-mega">
                                                                    <a tabIndex="-1" href="blog.html">Furniture</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown mega-menu">
                                                            <a href="about-us.html" className="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Pages</span>
                                                                <i className="fa fa-angle-down"></i>
                                                                <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div className="megamenu-container megamenu-container-1 dropdown-menu"
                                                            style={{
                                                                backgroundImage: `url('assets/images/mega3_bg.png')`,
                                                                width: '1170px'
                                                            }} >
                                                                <ul className="sub-mega-menu">
                                                                    <li className="mega-links mega1-collumn1 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="about-us.html">About Us</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="faqs.html">Shopping Guide</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="lookbook.html">Delivery Information</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="services.html">Privacy Policy</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="contact.html">Sitemap</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega1-collumn2 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="account.html">My account</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="login.html">Login</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="cart.html">My cart</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="wish-list.html">Wishlist</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="cart.html">Checkout</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega1-collumn3 col-sm-6">
                                                                        <div className="col-image"><img src="assets/images/logo_3.png" alt="" /></div>
                                                                        <div className="col-caption">Vivamus nec libero gravida, semper est sed, mollis magna. Integer et iaculis eros. <br /> Vivamus sodales nunc mi, a congue velit velit sem, vestibulum tristique</div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="dropdown mega-menu">
                                                            <a href="collections.html" className="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Category</span>
                                                                <i className="fa fa-angle-down"></i>
                                                                <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div className="megamenu-container megamenu-container-2 dropdown-menu" style={{width: '1170px'}}>
                                                                <ul className="sub-mega-menu">
                                                                    <li className="mega-links mega2-collumn1 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-title">Book &amp; office supply</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Science</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Economic</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Office Supply</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega2-collumn2 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-title">Food Cupboard</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Breakfast Cereals</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Jam, Honey &amp; Spreads</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Crisps, Snacks &amp; Nuts</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega2-collumn3 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-title">Home &amp; garden</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Kitchen</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Bed Room</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Garden</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega2-collumn4 col-sm-3">
                                                                        <div className="products_right_item">
                                                                            <div className="row-container ">
                                                                                <div className="product home_product">
                                                                                    <div className="row-left">
                                                                                        <a href="products.html" className="container_item">
                                                                                            <div className="hoverBorderWrapper">
                                                                                                <img src="assets/images/digital_01_compact.jpg" className="not-rotation img-responsive front" alt="Digital equipment" />
                                                                                                <div className="mask"></div>
                                                                                                <img src="assets/images/digital_02_compact.jpg" className="rotation img-responsive" alt="Digital equipment" />
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="row-right">
                                                                                        <div className="product-title"><a className="title-5" href="products.html">Digital equipment</a></div>
                                                                                        <div className="rating-star">
                                                                                            <span className="spr-badge" id="spr_badge_9807768067" data-rating="0.0"><span className="spr-starrating spr-badge-starrating"><i className="spr-icon spr-icon-star-empty" ></i><i className="spr-icon spr-icon-star-empty" ></i><i className="spr-icon spr-icon-star-empty" ></i><i className="spr-icon spr-icon-star-empty" ></i><i className="spr-icon spr-icon-star-empty" ></i></span><span className="spr-badge-caption">No reviews</span>
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="product-price">
                                                                                            <span className="price">
                                                                                                <span className="money" data-currency-usd="$200.00">$200.00</span>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="dropdown mega-menu">
                                                            <a href="collections-all.html" className="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Products</span>
                                                                <i className="fa fa-angle-down"></i>
                                                                <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div className="megamenu-container megamenu-container-3 dropdown-menu" 
                                                            style={{
                                                                backgroundImage: `url('assets/images/mega3_bg.png')`,
                                                                display: 'none',
                                                                width: '1170px'
                                                            }}>
                                                                <ul className="sub-mega-menu">
                                                                    <li className="mega-links mega3-collumn1 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-title">Category</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Foods</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Hot Deal</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Fashion</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Travel</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Other Services</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Healthy &amp; Beauty</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega3-collumn2 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-title">Pages</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Shopping cart</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="cart.html">Checkout</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="cart.html">Track order</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="account.html">My account</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="login.html">Login</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="register.html">Register</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega3-collumn3 col-sm-6">
                                                                        <div className="dis_table">
                                                                            <div className="dis_tablecell">
                                                                                <div className="col-caption">
                                                                                    <span className="title">
                                                                                        Come &amp; Discover
                                                                                    </span>
                                                                                    <span className="content">
                                                                                        The new style
                                                                                    </span>
                                                                                </div>
                                                                                <a className="btn btn1" href="">Shop now</a>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="dropdown mega-menu">
                                                            <a href="super-deal.html" className="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Top Brands</span>
                                                                <i className="fa fa-angle-down"></i>
                                                                <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i className="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div className="megamenu-container megamenu-container-4 dropdown-menu" style={{ display: 'none', width: '1170px'}}>
                                                                <ul className="sub-mega-menu">
                                                                    <li className="mega-links mega4-collumn1 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-title">Blogs</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Home &amp; Garden</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Baby &amp; Mom</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Beauty &amp; Skin Care</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Food</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">News</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Smartphone &amp; Tablet</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Furniture</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega-links mega4-collumn2 col-sm-3">
                                                                        <ul>
                                                                            <li className="list-title">List Pages</li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="about-us.html">About us</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="contact.html">Contact</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="faqs.html">FAQs</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="lookbook.html">Lookbook</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="price-table.html">Price Table</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="services.html">Services</a>
                                                                            </li>
                                                                            <li className="list-unstyled li-sub-mega">
                                                                                <a href="super-deal.html">Super Deal</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="mega4-collumn3 col-sm-6">
                                                                        <div className="blog-item-inner">
                                                                            <div className="blog-top">
                                                                                <a className="blog-img" href="article.html">
                                                                                    <img src="assets/images/blog_01.jpg" alt="Pellentesque vitae enim quis risus" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="blog-content">
                                                                                <a href="article.html" className="blog-title clearfix">Pellentesque vitae enim quis risus</a>
                                                                                <div className="blog_group">
                                                                                    <span className="blog-date">
                                                                                        Apr 02, 2017
                                                                                    </span>
                                                                                    <span className="blog-comment">
                                                                                        <i className="fa fa-comments-o"></i>  
                                                                                        <span>1</span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="blog-item-inner">
                                                                            <div className="blog-top">
                                                                                <a className="blog-img" href="article.html">
                                                                                    <img src="assets/images/blog_02.jpg" alt="Pellentesque vitae enim quis risus" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="blog-content">
                                                                                <a href="article.html" className="blog-title clearfix">Pellentesque vitae enim quis risus</a>
                                                                                <div className="blog_group">
                                                                                    <span className="blog-date">
                                                                                        Apr 02, 2017
                                                                                    </span>
                                                                                    <span className="blog-comment">
                                                                                        <i className="fa fa-comments-o"></i>  
                                                                                        <span>0</span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="navigation_icon">
                                                    <div className="navigation_icon_group">
                                                        <div className="icon_cart">
                                                            <div className="cart-info-group">
                                                                <a href="cart.html" className="cart dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                    <i className="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                    <i className="sub-dropdown visible-sm visible-md visible-lg"></i> 
                                                                    <div className="num-items-in-cart">
                                                                        <div className="items-cart-left">
                                                                            <img className="cart_img" src="assets/images/bg-cart.png" alt="Image Cart" title="Image Cart" />
                                                                            <span className="cart_text icon"><span className="number">2</span></span>       
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="dropdown-menu cart-info">
                                                                    <div className="cart-content">
                                                                        <div className="items control-container">
                                                                            <div className="row">
                                                                                <a className="cart-close" title="Remove" href="javascript:void(0);">
                                                                                    <i className="fa fa-times"></i>
                                                                                </a>
                                                                                <div className="cart-left">
                                                                                    <a className="cart-image" href="product.html">
                                                                                        <img src="assets/images/electronic_01_compact.jpg" alt="" title="" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="cart-right">
                                                                                    <div className="cart-title"><a href="product.html">Electronic equipment - L / red</a></div>
                                                                                    <div className="cart-price"><span className="money" data-currency-usd="$200.00" data-currency="USD">$200.00</span><span className="x"> x1</span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <a className="cart-close" title="Remove" href="javascript:void(0);">
                                                                                    <i className="fa fa-times"></i>
                                                                                </a>
                                                                                <div className="cart-left">
                                                                                    <a className="cart-image" href="product.html">
                                                                                        <img src="assets/images/electronic_02_compact.jpg" alt="" title="" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="cart-right">
                                                                                    <div className="cart-title"><a href="product.html">Electronic equipment - L / red</a></div>
                                                                                    <div className="cart-price"><span className="money" data-currency-usd="$400.00" data-currency="USD">$400.00</span><span className="x"> x1</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="subtotal"><span>Subtotal:</span><span className="cart-total-right money" data-currency-usd="$600.00" data-currency="USD">$600.00</span></div>
                                                                        <div className="action"><button className="btn">View Cart<i className="fa fa-caret-right"></i></button><button className="btn float-right">CHECKOUT<i className="fa fa-caret-right"></i></button></div>
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
	        </header>            
        );
    }
}