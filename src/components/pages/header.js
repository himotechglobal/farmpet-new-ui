import React, { Component } from "react";
 

import { ToastContainer } from "react-toastify";
import "../css/style.css";
import "../css/responsive.css";
// import '../css/navbar.css'
import $ from "jquery";
import { Link, Router } from "react-router-dom";
import logo from "../images/footerlogo.png";
import burger from "../images/humburger.png";
import connect from "../images/connect.png";
import gcircle from "../images/gcircle.png";
import crosss from "../images/crosss.png";
import apple from "../images/apple.png";
import playstore from "../images/play-store.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    changePickupStoreMenu();

    function changePickupStoreMenu() {
      var body = $("body"),
        mask = $('<div class="mask"></div>'),
        toggleSlideRight = document.querySelector(".toggle-slide-right"),
        slideMenuRight = document.querySelector(".slide-menu-right"),
        activeNav = "";
      $("body").append(mask);

      /* slide menu right */
      toggleSlideRight.addEventListener("click", function () {
        $("body").addClass("smr-open");
        $(".mask").fadeIn();
        activeNav = "smr-open";
      });

      /* hide active menu if close menu button is clicked */
      $(document).on("click", ".close-menu", function (el, i) {
        $("body").removeClass(activeNav);
        activeNav = "";
        $(".mask").fadeOut();
      });
    }
  };

  render() {
    return (
      <div className="border-b">
        <div className="">
          <div className="header-box">
            <div className="header-c1">
              <div className="logo-box">
                <a href="/">
                  <img src={logo} />
                </a>
              </div>
            </div>

            <div className="header-wrp23">
              <div className="header-c2">
                <ul className="menu-list-d">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Features">Features</Link>
                  </li>
                  <li>
                    <a href="/#products">Products</a>
                  </li>
                  <li>
                    <a href="/#howitworks">How it Works</a>
                  </li>
                   
                </ul>
                <div className="burger-area">
                  <a href="#" className="burgers toggle-slide-right">
                    {" "}
                    <img src={burger} />
                  </a>
                </div>
              </div>
              <div className="header-c3">
                <ul className="hdr-butn">
                  <li>
                    <a href="#">
                      <img src={apple}></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={playstore}></img>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu slide-menu-right menu-list-wrp">
            <button class="close-menu">
              <img src={crosss} className="img-close" />
            </button>
            <ul className="menu-list2">
              <li>
                <Link to="/" className="close-menu">Home</Link>
              </li>
              <li>
                <Link to="/Features" className="close-menu">Features</Link>
              </li>
              <li>
                <a href="/#products" className="close-menu">Products</a>
              </li>
              <li>
                <a href="/#howitworks" className="close-menu">How it Works</a>
              </li>
               
              <li>
                <a href="#" className="close-menu">
                  <img src={apple}></img>
                </a>
              </li>
              <li>
                <a href="#" className="close-menu">
                  <img src={playstore}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
