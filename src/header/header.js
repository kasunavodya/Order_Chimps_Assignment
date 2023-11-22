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

class Header extends Component {

    render() {
        return (

            //Header Section
            <header class="header3">
            <div class="header-bottom home2-header-bottom">
                <div class="container position-relative">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-2 col-md-2 col-sm-4 col-8 margin-bottom-20">
                            <div class="logo" style = {{ marginTop: "10px" }}>
                                <a href="index.html"><img src={logo5} alt="logo"/></a>
                            </div>
                        </div>
                        <div class="col-lg-7 d-none d-lg-block">
                            <nav id="mobile-menu">
                               <p className='text-lg4'><center><b>Deliver to:</b> <i class="fa fa-map-marker" aria-hidden="true" style = {{ color: "#ff8002" }}></i> Current Location <b>Beauchamp Court, Barnet</b></center></p>
                            </nav>
                        </div>
                        <div class="col-lg-3 col-md-9 col-sm-8 col-12">
                            <div
                                class="customer-area3 d-flex align-items-center justify-content-center justify-content-md-end">
                                <span class="position-relative">
                                    <a class="shopping" href="shopping-cart.html"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </span>
                                <a href="#" class="btn2"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;Login</a>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu home2 home3-mobile-menu"></div>
                </div>
            </div>
        </header>
        )
    }

}

export default Header;