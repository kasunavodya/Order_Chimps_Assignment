//Imports
import React, { Component } from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';

import image2 from '../assets/images/img/2.png';
import image3 from '../assets/images/img/3.png';
import image4 from '../assets/images/img/4.png';
import image5 from '../assets/images/img/5.png';
import image6 from '../assets/images/img/6.png';
import image8 from '../assets/images/img/8.png';
import image7 from '../assets/images/img/7.png';
import image9 from '../assets/images/img/9.png';
import image10 from '../assets/images/img/1.png';
import image18 from '../assets/images/shapes/18.png';

import gal23 from '../assets/images/gallery/23.png';
import layer2 from '../assets/images/shapes/layer2.png';
import shape113 from '../assets/images/shapes/113.png';
import gal26 from '../assets/images/gallery/26.png';
import shape38 from '../assets/images/shapes/38.png';

import menu1 from '../assets/images/menu-item/menu1.png';
import menu2 from '../assets/images/menu-item/menu2.png';
import menu3 from '../assets/images/menu-item/menu3.png';
import menu4 from '../assets/images/menu-item/menu4.png';

import pd3 from '../assets/images/menu-item/pd3.png';
import pd1 from '../assets/images/menu-item/pd1.png';
import pd2 from '../assets/images/menu-item/pd2.png';
import pd4 from '../assets/images/menu-item/pd4.png';

import shape2 from '../assets/images/img/htshape2.png';
import shape12 from '../assets/images/img/htshape12.png';
import shape16 from '../assets/images/img/htshape16.png';
import shape17 from '../assets/images/img/htshape17.png';
import leaf from '../assets/images/img/htleaf.png';
import shape27 from '../assets/images/shapes/27.png';

import foodApp from '../assets/images/shapes/foodApp.png';

import shape22 from '../assets/images/shapes/2.png';

import gal1 from '../assets/images/gallery/1.jpg';
import gal2 from '../assets/images/gallery/2.jpg';

export default class homePage extends Component {

    render() {
        return (
            <div>
                <Header />
                <main>

                    {/* main Section    */}
                    <section class="banner-area">
                        <div class="banner-shapes">
                            <span class="b-shape-1 item-animateOne"><img src={image5} alt="" /></span>
                            <span class="b-shape-2 item-animateTwo"><img src={image6} alt="" /></span>
                            <span class="b-shape-3 item-bounce"><img src={image7} alt="" /></span>
                            <span class="b-shape-4"><img src={image9} alt="" /></span>
                            <span class="b-shape-5"><img src={image18} alt="" /></span>
                        </div>
                        <div class="container padding-top-145">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-md-12 col-lg-6 col-xl-6">
                                    <div class="banner-content">
                                        <h1>Are You <span>Starving?</span></h1>
                                        <div class="price">Within a few clicks, <br /> find meals that are accessible near you.</div>
                                        <div class="buyone-shape">
                                            <div class="banner-tag">
                                                <input type="text" class="form-control" id="address" placeholder="Enter Your Address" />
                                            </div>
                                            <button class="banner-badge" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Find Food</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-none d-lg-block col-lg-6 col-xl-6">
                                    <div class="banner-img">
                                        <div class="pizza-shapes">
                                            <span class="p-shape-1"><img src={image2} alt="" /></span>
                                            <span class="p-shape-2"><img src={image3} alt="" /></span>
                                            <span class="p-shape-3"><img src={image4} alt="" /></span>
                                            <span class="p-shape-4"><img src={image8} alt="" /></span>
                                        </div>
                                        <img src={image10} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Food Section */}
                    <section class="banner-gallery padding-top-100 padding-bottom-120">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 col-md-12">
                                    <div class="row margin-top-30">
                                        <div class="col-lg-4 col-md-4">
                                            <div class="gallery-img-3">
                                                <h5>Greys Vage</h5>
                                                <a href="shopping-cart.html">6 Days Remaining</a>
                                                <img src={gal23} alt="" />
                                                <img src={layer2} alt="" class="s12" />
                                                <img src={shape113} alt="" class="s13" />
                                                <span class="gprice-2">15%</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <div class="
                                    gallery-img-2
                                    d-flex
                                    align-items-end
                                    justify-content-end
                                ">
                                                <img src={gal26} alt="" />
                                                <img src={shape38} alt="" class="s11" />
                                                <span class="gprice-1">10%</span>
                                                <div class="gimg-content">
                                                    <h5>Greys Vage</h5>
                                                    <a href="shopping-cart.html">6 Days Remaining</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <div class="gallery-img-3">
                                                <h5>Greys Vage</h5>
                                                <a href="shopping-cart.html">7 Days Remaining</a>
                                                <img src={gal23} alt="" />
                                                <img src={layer2} alt="" class="s12" />
                                                <img src={shape113} alt="" class="s13" />
                                                <span class="gprice-2">25%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="
                                    gallery-img-2
                                    d-flex
                                    align-items-end
                                    justify-content-end
                                ">
                                        <img src={gal26} alt="" />
                                        <img src={shape38} alt="" class="s11" />
                                        <span class="gprice-1">20%</span>
                                        <div class="gimg-content">
                                            <h5>Greys Vage</h5>
                                            <a href="shopping-cart.html">8 Days Remaining</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How Does It Work Section */}
                    <div class="foods-counter menus-area">
                        <div class="common-title-area text-center padding-40">
                            <h2>How does<span> it work</span> </h2>
                        </div>
                        <div class="container">
                            <div class="row foods-wrapper menus-wrapper">
                                <div class="col-lg-3 col-md-6">
                                    <div class="single-food single-menus">
                                        <img src={menu1} alt="" />
                                        <h6>Select Location</h6>
                                        <p>Free Delivery in you Location</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="single-food single-menus">
                                        <img src={menu2} alt="" />
                                        <h6>Choose Order</h6>
                                        <p>We Provide Best Quality Food</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="single-food single-menus">
                                        <img src={menu3} alt="" />
                                        <h6>Pay Advanced</h6>
                                        <p>100% Money Back Guarantee</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="single-food single-menus">
                                        <img src={menu4} alt="" />
                                        <h6>Enjoy Meals</h6>
                                        <p>Food Khan Provide Best Food</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Popular Items Section*/}
                    <div class="tab-content" id="nav-tabContent-1" style={{ padding: "100px" }}>
                        <div class="common-title-area text-center padding-40">
                            <h2>Popular<span> Items</span> </h2>
                        </div>
                        <div class="tab-pane fade show active" id="food1" role="tabpanel" aria-labelledby="food1-tab">
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div class="single-dishes">
                                        <div class="dish-img">
                                            <img src={pd1} style={{ width: "inherit" }} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5> <a href="single-food.html">Chicken Recipe
                                            </a></h5>
                                            <p>It is a long established fact that a reader BBQ food Chicken.</p>
                                            <span class="price badge-color">price :$15.00</span>
                                        </div>
                                        <span class="badge badge-bg-color">new</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="single-food.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                        <div class="menu-btn text-center" style={{ marginTop: "30px" }}>
                                            <a href="shopping-cart.html" class="btn2 btn-outline-primary">order now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div class="single-dishes">
                                        <div class="dish-img">
                                            <img src={pd2} style={{ width: "inherit" }} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-food.html">Garlic Burger
                                            </a></h5>
                                            <p>It is a long established fact that a reader BBQ food Chicken.</p>
                                            <span class="price">price :$15.00</span>

                                        </div>
                                        <span class="badge">hot</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="single-food.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                        <div class="menu-btn text-center" style={{ marginTop: "30px" }}>
                                            <a href="shopping-cart.html" class="btn2 btn-outline-primary">order now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div class="single-dishes">
                                        <div class="dish-img">
                                            <img src={pd3} style={{ width: "inherit" }} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5> <a href="single-food.html">Vegetable Pizza
                                            </a></h5>
                                            <p>It is a long established fact that a reader BBQ food Chicken.</p>
                                            <span class="price">price :$15.00</span>

                                        </div>
                                        <span class="badge"></span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="single-food.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                        <div class="menu-btn text-center" style={{ marginTop: "30px" }}>
                                            <a href="shopping-cart.html" class="btn2 btn-outline-primary">order now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                    <div class="single-dishes">
                                        <div class="dish-img">
                                            <img src={pd4} style={{ width: "inherit" }} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-food.html">Chickpea Soup
                                            </a></h5>
                                            <p>It is a long established fact that a reader BBQ food Chicken.</p>
                                            <span class="price">price :$15.00</span>
                                        </div>
                                        <span class="badge">sale</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="single-food.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                        <div class="menu-btn text-center" style={{ marginTop: "30px" }}>
                                            <a href="shopping-cart.html" class="btn2 btn-outline-primary">order now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Restaurants Section */}
                    <section class="drink-items-section padding-bottom-120 padding-top-110">
                        <div class="drink-items-shapes">
                            <span class="fs-1 item-animateOne"><img src={shape2} alt="" /></span>
                            <span class="fs-2"><img src={shape16} alt="" /></span>
                            <span class="fs-3 item-animateTwo"><img src={shape17} alt="" /></span>
                            <span class="fs-4"><img src={leaf} alt="" /></span>
                        </div>
                        <div class="container">
                            <div class="common-title-area3 text-center padding-bottom-50 wow fadeInUp">
                                <h2>Featured <span>Restaurants</span> </h2>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".2s">
                                    <div class="single-dishes home3-single-dishes">
                                        <div class="dish-img">
                                            <img src={shape12} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-dish.html">Gunna Can
                                            </a></h5><span class="rating"> <i class="fas fa-star"></i> 46</span>
                                            <p>It is a long established fact that a reader BBQ Chicken.</p>
                                            <span style={{ padding: "5px", backgroundColor: "#ff8002", fontSize: "12px", color: "#fff", borderRadius: "10px" }}>&nbsp; Open Tomorrow &nbsp;</span>
                                        </div>
                                        <span class="badge">20% Off</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="shopping-cart.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".4s">
                                    <div class="single-dishes home3-single-dishes">
                                        <div class="dish-img">
                                            <img src={shape12} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-dish.html">Dr Pepper Can

                                            </a></h5><span class="rating"> <i class="fas fa-star"></i> 40</span>
                                            <p>It is a long established fact that a reader BBQ Chicken.</p>
                                            <span style={{ padding: "5px", backgroundColor: "#ff8002", fontSize: "12px", color: "#fff", borderRadius: "10px" }}>&nbsp; Open Tomorrow &nbsp;</span>
                                        </div>
                                        <span class="badge">15% Off</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="shopping-cart.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".6s">
                                    <div class="single-dishes home3-single-dishes">
                                        <div class="dish-img">
                                            <img src={shape12} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-dish.html">Ocem Blue
                                            </a></h5><span class="rating"> <i class="fas fa-star"></i> 20</span>
                                            <p>It is a long established fact that a reader BBQ Chicken.</p>
                                            <span style={{ padding: "5px", backgroundColor: "#ff8002", fontSize: "12px", color: "#fff", borderRadius: "10px" }}>&nbsp; Open Tomorrow &nbsp;</span>
                                        </div>
                                        <span class="badge">10% Off</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="shopping-cart.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".8s">
                                    <div class="single-dishes home3-single-dishes">
                                        <div class="dish-img">
                                            <img src={shape12} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-dish.html">Calyps Ocem



                                            </a></h5><span class="rating"> <i class="fas fa-star"></i> 46</span>
                                            <p>It is a long established fact that a reader BBQ Chicken.</p>
                                            <span style={{ padding: "5px", backgroundColor: "#ff8002", fontSize: "12px", color: "#fff", borderRadius: "10px" }}>&nbsp; Open Tomorrow &nbsp;</span>
                                        </div>
                                        <span class="badge">15% Off</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="shopping-cart.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".2s">
                                    <div class="single-dishes home3-single-dishes">
                                        <div class="dish-img">
                                            <img src={shape12} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-dish.html">Gunna Can
                                            </a></h5><span class="rating"> <i class="fas fa-star"></i> 30</span>
                                            <p>It is a long established fact that a reader BBQ Chicken.</p>
                                            <span style={{ padding: "5px", backgroundColor: "#ff8002", fontSize: "12px", color: "#fff", borderRadius: "10px" }}>&nbsp; Open Tomorrow &nbsp;</span>
                                        </div>
                                        <span class="badge">20% Off</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="shopping-cart.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".4s">
                                    <div class="single-dishes home3-single-dishes">
                                        <div class="dish-img">
                                            <img src={shape12} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-dish.html">Dr Pepper Can

                                            </a></h5><span class="rating"> <i class="fas fa-star"></i> 26</span>
                                            <p>It is a long established fact that a reader BBQ Chicken.</p>
                                            <span style={{ padding: "5px", backgroundColor: "#0ced4c", fontSize: "12px", color: "#fff", borderRadius: "10px" }}>&nbsp; Open Now &nbsp;</span>
                                        </div>
                                        <span class="badge">15% Off</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="shopping-cart.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".6s">
                                    <div class="single-dishes home3-single-dishes">
                                        <div class="dish-img">
                                            <img src={shape12} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-dish.html">Ocem Blue
                                            </a></h5><span class="rating"> <i class="fas fa-star"></i> 16</span>
                                            <p>It is a long established fact that a reader BBQ Chicken.</p>
                                            <span style={{ padding: "5px", backgroundColor: "#ff8002", fontSize: "12px", color: "#fff", borderRadius: "10px" }}>&nbsp; Open Tomorrow &nbsp;</span>
                                        </div>
                                        <span class="badge">10% Off</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="shopping-cart.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".8s">
                                    <div class="single-dishes home3-single-dishes">
                                        <div class="dish-img">
                                            <img src={shape12} alt="" />
                                        </div>
                                        <div class="dish-content">
                                            <h5><a href="single-dish.html">Calyps Ocem
                                            </a></h5><span class="rating"> <i class="fas fa-star"></i> 16</span>
                                            <p>It is a long established fact that a reader BBQ Chicken.</p>
                                            <span style={{ padding: "5px", backgroundColor: "#0ced4c", fontSize: "12px", color: "#fff", borderRadius: "10px" }}>&nbsp; Open Now &nbsp;</span>
                                        </div>
                                        <span class="badge">15% Off</span>
                                        <div class="cart-opt">
                                            <span>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="shopping-cart.html"><i class="fas fa-shopping-basket"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mx-auto margin-top-30"><a href="food-page.html" class="btn2">View All&nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i></a></div>
                            </div>
                        </div>
                    </section>

                    {/* Mobile App Section */}
                    <section class="delicious-area">
                        <div class="container">
                            <div class="deli-shapes">
                                <span class="ds-1"><img src="assets/images/shapes/transparent1.png" alt="" /></span>
                                <span class="ds-2 item-animateOne"><img src={shape27} alt="" /></span>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-lg-6  wow fadeInLeft">

                                    <div class="delicious-left">
                                        <h2>Install The
                                            <span> App</span>
                                        </h2>
                                        <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                    </div><br />
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <a href="shopping-cart.html" class="btn2 btn-outline-primary"><i class="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp;GOOGLE PLAY</a> &nbsp;&nbsp;
                                            <a href="shopping-cart.html" class="btn2 btn-outline-primary"><i class="fa-brands fa-apple"></i>&nbsp;&nbsp;APP STORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 d-none d-lg-block  wow fadeInRight">
                                    <div class="delicious-right">
                                        <img src={foodApp} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Place Order Section    */}
                    <section class="about-area about-area2 padding-top-120">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-12  wow fadeInLeft">
                                    <div class="about-left">
                                        <div class="about-l-shapes">
                                            <span class="als-1"><img src={shape22} alt="" /></span>
                                        </div>
                                        <div class="row">
                                            <div
                                                class="col-lg-4 col-md-4 col-sm-4 col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                                                <div class="about-gallery-1">
                                                    <img src={gal1} alt="" />
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-8 col-sm-8 col-8 margin-bottom-20">
                                                <div class="about-gallery-2">
                                                    <img src={gal2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12  wow fadeInRight">
                                    <div class="about-right">
                                        <div class="about-r-shapes">
                                            <span class="as-1"><img src={shape22} alt="" /></span>
                                        </div>
                                        <div class="history-tab">
                                            <div class="tab-content" id="historyTabContent">
                                                <div class="tab-pane fade show active" id="history-tab-pane" role="tabpanel"
                                                    aria-labelledby="history-tab" tabindex="0">
                                                    <div class="his-content">
                                                        <h2>Best Deals
                                                            <span> Crispy Sandwiches</span>
                                                        </h2>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                                        </p>
                                                        <div
                                                            class="sig-wrapper d-flex flex-wrap justify-content-around align-items-left text-align: right">
                                                            <a href="food-page.html" class="btn2">Proceed To Order</a>
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

                    <section class="about-area about-area2">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-12  wow fadeInRight">
                                    <div class="about-right">
                                        <div class="about-r-shapes">
                                            <span class="as-1"><img src={shape22} alt="" /></span>
                                        </div>
                                        <div class="history-tab">
                                            <div class="tab-content" id="historyTabContent">
                                                <div class="tab-pane fade show active" id="history-tab-pane" role="tabpanel"
                                                    aria-labelledby="history-tab" tabindex="0">
                                                    <div class="his-content">
                                                        <h2>Celebrate Parties
                                                            <span> with Fried Chicken</span>
                                                        </h2>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                                        </p>
                                                        <div
                                                            class="sig-wrapper d-flex flex-wrap justify-content-around align-items-left text-align: right">
                                                            <a href="food-page.html" class="btn2">Proceed To Order</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12  wow fadeInLeft">
                                    <div class="about-left">
                                        <div class="about-l-shapes">
                                            <span class="als-1"><img src={shape22} alt="" /></span>
                                        </div>
                                        <div class="row">
                                            <div
                                                class="col-lg-4 col-md-4 col-sm-4 col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                                                <div class="about-gallery-1">
                                                    <img src={gal1} alt="" />
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-8 col-sm-8 col-8 margin-bottom-20">
                                                <div class="about-gallery-2">
                                                    <img src={gal2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        )
    }
}





