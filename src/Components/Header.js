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
                                                        <span>Sourcing Solutions</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item active">
                                                    <a href="index.html">
                                                        <span>Services &amp; Membership</span>
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
                                                                <span className="currency_code heading hidden-xs">USD</span>
                                                                <span className="currency_code visible-xs">USD</span>
                                                                <i className="fa fa-angle-down"></i>
                                                            </a>
                                                            <ul className="currencies dropdown-menu text-left">
                                                                <li className="currency-USD active">
                                                                    <a href="">USD</a>
                                                                    <input type="hidden" value="USD" />
                                                                </li>
                                                                <li className="currency-GBP">
                                                                    <a href="">GBP</a>
                                                                    <input type="hidden" value="GBP" />
                                                                </li>
                                                                <li className="currency-AUD">
                                                                    <a href="">AUD</a>
                                                                    <input type="hidden" value="AUD" />
                                                                </li>
                                                                <li className="currency-EUR">
                                                                    <a href="">EUR</a>
                                                                    <input type="hidden" value="EUR" />
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
                                                        <img src="assets/images/logo.png" alt="" title="Sarahmarket 1" />
                                                    </a>
                                                    <h1 styles={{display: 'none'}}>
                                                        <a href="index.html">Sarahmarket 1</a>
                                                    </h1>
                                                </div>

                                                <div class="group-search-cart">
                                                    <div class="nav-search">
                                                        <form class="search" action="./search.html">
                                                            <input type="hidden" name="type" value="product" />
                                                            <input type="text" name="q" class="search_box" placeholder="Enter your keyword ..." value="" />
                                                            <div class="collections-selector">
                                                                <select class="single-option-selector" data-option="collection-option" id="collection-option" name="collection">
                                                                    <option value="all">All Categories</option>
                                                                    <option value="best-sellers">Best Sellers</option>
                                                                    <option value="digital">Digital</option>
                                                                    <option value="electronic">Electronic</option>
                                                                    <option value="fashions">Fashions</option>
                                                                    <option value="furniture">Furniture</option>
                                                                    <option value="maybe-you-prefer">Maybe You Prefer</option>
                                                                    <option value="new-products">New Products</option>
                                                                    <option value="sport">Sport</option>
                                                                    <option value="todays-trending">Today's Trending</option>
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
                                                                Shop By Category
                                                            </span>
                                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                                        </a>
                                                        <ul class="navigation_links_left dropdown-menu" styles={{display: 'none'}}>
                                                            <li class="nav-item dropdown navigation _icon">
                                                                <a href="collections-all.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                    <span>Hot Deals</span>
                                                                    <i class="fa fa-angle-down"></i>
                                                                    <i class="sub-dropdown1  visible-sm visible-md visible-lg"></i>
                                                                    <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                </a>
                                                                <ul class="dropdown-menu" styles={{display: 'none'}}>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Health &amp; Beauty</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Family Food</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Baby Care &amp; Mon</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="nav-item dropdown navigation _icon">
                                                                <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                    <span>Fashions</span>
                                                                    <i class="fa fa-angle-down"></i>
                                                                    <i class="sub-dropdown1  visible-sm visible-md visible-lg"></i>
                                                                    <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                </a>
                                                                <ul class="dropdown-menu" styles={{display: 'none'}}>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Men's jackets</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Jewelry</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Men's Clothing</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Women's Accessories</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="nav-item dropdown navigation _icon">
                                                                <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                    <span>Sport</span>
                                                                    <i class="fa fa-angle-down"></i>
                                                                    <i class="sub-dropdown1  visible-sm visible-md visible-lg"></i>
                                                                    <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                </a>
                                                                <ul class="dropdown-menu" styles={{display: 'none'}}>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Sports machine</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Sport shoes 2017</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Sports bra </a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Water sports</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="nav-item dropdown navigation _icon">
                                                                <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                    <span>Electronic</span>
                                                                    <i class="fa fa-angle-down"></i>
                                                                    <i class="sub-dropdown1  visible-sm visible-md visible-lg"></i>
                                                                    <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                </a>
                                                                <ul class="dropdown-menu" styles={{display: 'none'}}>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Electronic equipment</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Electronic cigarette</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Electronics tv</a>
                                                                    </li>
                                                                    <li class="li-sub-mega">
                                                                        <a tabindex="-1" href="collections.html">Electronics utilities</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
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
                                                        <li class="nav-item active">
                                                            <a href="index.html">
                                                                <span>Home</span>
                                                            </a>
                                                        </li>
                                                        <li class="nav-item dropdown navigation">
                                                            <a href="blog.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Blogs</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1  visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <ul class="dropdown-menu">
                                                                <li class=" dropdown li-sub-mega">
                                                                    <a href="blog.html">
                                                                        <span>Home &amp; Garden</span>
                                                                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                                                                        <i class="sub-dropdown1  visible-sm visible-md visible-lg"></i>
                                                                        <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li class="li-sub-mega">
                                                                            <a tabindex="-1" href="collections.html">Kitchen</a>
                                                                        </li>
                                                                        <li class="li-sub-mega">
                                                                            <a tabindex="-1" href="collections.html">Bed Room</a>
                                                                        </li>
                                                                        <li class="li-sub-mega">
                                                                            <a tabindex="-1" href="collections.html">Garden</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="li-sub-mega">
                                                                    <a tabindex="-1" href="blog.html">Baby &amp; Mom</a>
                                                                </li>
                                                                <li class="li-sub-mega">
                                                                    <a tabindex="-1" href="blog.html">Beauty &amp; Skin Care</a>
                                                                </li>
                                                                <li class="li-sub-mega">
                                                                    <a tabindex="-1" href="blog.html">Food</a>
                                                                </li>
                                                                <li class="li-sub-mega">
                                                                    <a tabindex="-1" href="blog.html">News</a>
                                                                </li>
                                                                <li class="li-sub-mega">
                                                                    <a tabindex="-1" href="blog.html">Smartphone &amp; Tablet</a>
                                                                </li>
                                                                <li class="li-sub-mega">
                                                                    <a tabindex="-1" href="blog.html">Furniture</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown mega-menu">
                                                            <a href="about-us.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Pages</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-1 dropdown-menu" styles={{ width: "1170px", display: "none", backgroundImage:
                                                                "assets/images/mega3_bg.png" }}>
                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega1-collumn1 col-sm-3">
                                                                        <ul>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="about-us.html">About Us</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="faqs.html">Shopping Guide</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="lookbook.html">Delivery Information</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="services.html">Privacy Policy</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="contact.html">Sitemap</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega1-collumn2 col-sm-3">
                                                                        <ul>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="account.html">My account</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="login.html">Login</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="cart.html">My cart</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="wish-list.html">Wishlist</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="cart.html">Checkout</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega1-collumn3 col-sm-6">
                                                                        <div class="col-image">
                                                                            <img src="assets/images/logo.png" alt="" />
                                                                        </div>
                                                                        <div class="col-caption">Vivamus nec libero gravida, semper est sed, mollis magna. Integer
                                                                            et iaculis eros.
                                                                            <br/> Vivamus sodales nunc mi, a congue velit velit sem, vestibulum
                                                                            tristique</div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li class="dropdown mega-menu">
                                                            <a href="collections.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Category</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-2 dropdown-menu" styles={{width: '1170px'}}>
                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega2-collumn1 col-sm-3">
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
                                                                    <li class="mega-links mega2-collumn2 col-sm-3">
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
                                                                    <li class="mega-links mega2-collumn3 col-sm-3">
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
                                                                    <li class="mega2-collumn4 col-sm-3">
                                                                        <div class="products_right_item">
                                                                            <div class="row-container ">
                                                                                <div class="product home_product">
                                                                                    <div class="row-left">
                                                                                        <a href="products.html" class="container_item">
                                                                                            <div class="hoverBorderWrapper">
                                                                                                <img src="assets/images/digital_01_compact.jpg" class="not-rotation img-responsive front" alt="Digital equipment" />
                                                                                                <div class="mask"></div>
                                                                                                <img src="assets/images/digital_02_compact.jpg" class="rotation img-responsive" alt="Digital equipment" />
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div class="row-right">
                                                                                        <div class="product-title">
                                                                                            <a class="title-5" href="products.html">Digital equipment</a>
                                                                                        </div>
                                                                                        <div class="rating-star">
                                                                                            <span class="spr-badge" id="spr_badge_9807768067" data-rating="0.0">
                                                                                                <span class="spr-starrating spr-badge-starrating">
                                                                                                    <i class="spr-icon spr-icon-star-empty"></i>
                                                                                                    <i class="spr-icon spr-icon-star-empty"></i>
                                                                                                    <i class="spr-icon spr-icon-star-empty"></i>
                                                                                                    <i class="spr-icon spr-icon-star-empty"></i>
                                                                                                    <i class="spr-icon spr-icon-star-empty"></i>
                                                                                                </span>
                                                                                                <span class="spr-badge-caption">No reviews</span>
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="product-price">
                                                                                            <span class="price">
                                                                                                <span class="money" data-currency-usd="$200.00">$200.00</span>
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
                                                        <li class="dropdown mega-menu">
                                                            <a href="collections-all.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Products</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-3 dropdown-menu" styles={{ width: "1170px", display: "none", backgroundImage:
                                                                "assets/images/mega3_bg.png" }}>

                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega3-collumn1 col-sm-3">
                                                                        <ul>
                                                                            <li class="list-title">Category</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Foods</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Hot Deal</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Fashion</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Travel</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Other Services</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Healthy &amp; Beauty</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega3-collumn2 col-sm-3">
                                                                        <ul>
                                                                            <li class="list-title">Pages</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="collections.html">Shopping cart</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="cart.html">Checkout</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="cart.html">Track order</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="account.html">My account</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="login.html">Login</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="register.html">Register</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega3-collumn3 col-sm-6">
                                                                        <div class="dis_table">
                                                                            <div class="dis_tablecell">
                                                                                <div class="col-caption">
                                                                                    <span class="title">
                                                                                        Come &amp; Discover
                                                                                    </span>
                                                                                    <span class="content">
                                                                                        The new style
                                                                                    </span>
                                                                                </div>
                                                                                <a class="btn btn1" href="">Shop now</a>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li class="dropdown mega-menu">
                                                            <a href="super-deal.html" class="dropdown-toggle dropdown-link" data-toggle="dropdown">
                                                                <span>Top Brands</span>
                                                                <i class="fa fa-angle-down"></i>
                                                                <i class="sub-dropdown1 visible-sm visible-md visible-lg"></i>
                                                                <i class="sub-dropdown visible-sm visible-md visible-lg"></i>
                                                            </a>
                                                            <div class="megamenu-container megamenu-container-4 dropdown-menu" styles={{display: 'none', width: '1170px'}}>
                                                                <ul class="sub-mega-menu">
                                                                    <li class="mega-links mega4-collumn1 col-sm-3">
                                                                        <ul>
                                                                            <li class="list-title">Blogs</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Home &amp; Garden</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Baby &amp; Mom</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Beauty &amp; Skin Care</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Food</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">News</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Smartphone &amp; Tablet</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="blog.html">Furniture</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega-links mega4-collumn2 col-sm-3">
                                                                        <ul>
                                                                            <li class="list-title">List Pages</li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="about-us.html">About us</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="contact.html">Contact</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="faqs.html">FAQs</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="lookbook.html">Lookbook</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="price-table.html">Price Table</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="services.html">Services</a>
                                                                            </li>
                                                                            <li class="list-unstyled li-sub-mega">
                                                                                <a href="super-deal.html">Super Deal</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li class="mega4-collumn3 col-sm-6">
                                                                        <div class="blog-item-inner">
                                                                            <div class="blog-top">
                                                                                <a class="blog-img" href="article.html">
                                                                                    <img src="assets/images/blog_01.jpg" alt="Pellentesque vitae enim quis risus" />
                                                                                </a>
                                                                            </div>
                                                                            <div class="blog-content">
                                                                                <a href="article.html" class="blog-title clearfix">Pellentesque vitae enim quis risus</a>
                                                                                <div class="blog_group">
                                                                                    <span class="blog-date">
                                                                                        Apr 02, 2017
                                                                                    </span>
                                                                                    <span class="blog-comment">
                                                                                        <i class="fa fa-comments-o"></i>
                                                                                        <span>1</span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="blog-item-inner">
                                                                            <div class="blog-top">
                                                                                <a class="blog-img" href="article.html">
                                                                                    <img src="assets/images/blog_02.jpg" alt="Pellentesque vitae enim quis risus" />
                                                                                </a>
                                                                            </div>
                                                                            <div class="blog-content">
                                                                                <a href="article.html" class="blog-title clearfix">Pellentesque vitae enim quis risus</a>
                                                                                <div class="blog_group">
                                                                                    <span class="blog-date">
                                                                                        Apr 02, 2017
                                                                                    </span>
                                                                                    <span class="blog-comment">
                                                                                        <i class="fa fa-comments-o"></i>
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