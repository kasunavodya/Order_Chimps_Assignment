import React, { Component } from 'react';

import '../assets/css/style.css';
import '../assets/css/jquery-ui.css';
import '../assets/css/slick.css';
import '../assets/css/all.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/meanmenu.min.css';
import '../assets/css/animate.css';

import logo5 from '../assets/images/logo/logo5.png';

import gal26 from '../assets/images/gallery/26.png';
import gal27 from '../assets/images/shapes/27.png';
import gal28 from '../assets/images/shapes/28.png';
import gal25 from '../assets/images/shapes/25.png';

import shape3 from '../assets/images/shapes/3.png';
import shape22 from '../assets/images/shapes/22.png';
import shape30 from '../assets/images/shapes/30.png';

class Footer extends Component {

    render() {
        return (

            // Footer Section
            <footer class="padding-top-40 padding-bottom-40">
            <div class="fo-shapes">
            <span class="fs-1"><img src={gal26} alt=""/></span>
            <span class="fs-2 item-bounce"><img src={gal27} alt=""/></span>
            <span class="fs-3 item-bounce"><img src={gal28} alt=""/></span>
            <span class="fs-4 item-bounce"><img src={gal25} alt=""/></span>
            <span class="fs-5 item-animateTwo"><img src={shape3} alt=""/></span>
            <span class="fs-6"><img src={shape22} alt=""/></span>
            <span class="fs-7"><img src={shape30} alt=""/></span>
            </div>
            <div class="footer-top d-none d-md-block">
            <div class="container">
                <div class="
                    row
                    align-items-center
                    justify-content-between
                    padding-bottom-25
                    ">
                <div class="col-lg-3 col-md-3">
                    <div class="f-logo">
                    <a href="index.html">
                        <img src={logo5} alt=""/></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="f-title">
                    <h4>Feel Hunger! Order Your<span> Like Food.</span></h4>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3">
                    <a href="shopping-cart.html" class="btn2">Order Now</a>
                </div>
                </div>
                <hr/>
            </div>
            </div>
            <div class="footer-bottom padding-top-22 padding-bottom-30">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-6 col-12 margin-bottom-20">
                    <div class="widget">
                    <h6>address</h6>
                    <p>570 8th Ave,New York, NY 10018 United States</p>
                    <a href="#" class="f-link">view google map</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 margin-bottom-20">
                    <div class="widget">
                    <h6>book a table</h6>
                    <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 margin-bottom-20">
                    <div class="widget">
                    <h6>opening hours</h6>
                    <p>
                        <span>monday-friday: 8am - 4pm</span> <br/><span>saturday: 9am - 5pm</span>
                    </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 margin-bottom-20">
                    <div class="widget">
                    <h6>newsletter</h6>
                    <div class="newsletter d-flex">
                        <form action="#">
                        <input type="email" placeholder="enter your email"/>
                        <button type="submit" style = {{ backgroundColor: "#ff8002" }}>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                        </form>
                    </div>
                    <a href="#" class="f-link">subscribe now</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="copyright-area text-center">
            <p>Copyright © 2023 <a href="index.html">Order Chimps</a></p>
            </div>
        </footer>
        )
    }

}

export default Footer;