import React, { useState } from "react";
import Header from "../header.js";
import Footer from "../footer.js";
import Tabs from "../Tabs.js"
import butnarrow from "../../images/butnarrow.png";
import aboutimg from "../../images/aboutimg.png";
import Img1 from "../../images/img1.png";
import Img2 from "../../images/img2.png";
import Img3 from "../../images/img3.png";
import Img4 from "../../images/img4.png";
import Img5 from "../../images/img5.png";
import Img6 from "../../images/img6.png";
import Img8 from '../../images/img8.png'
import Img9 from '../../images/img9.png'
import Img10 from "../../images/img10.png";
import Img11 from "../../images/img11.png";
import Img12 from "../../images/img12.png";
import Img13 from "../../images/img13.png";
import Img14 from "../../images/img14.png";
import Img15 from "../../images/img15.png";
import Img16 from "../../images/img16.png";
import Img17 from "../../images/img17.png";
import Img18 from "../../images/img18.png";
import Img19 from "../../images/img19.png";
import Img20 from "../../images/img20.png";
import Circle1 from "../../images/circle1.png";
import Circle2 from "../../images/circle2.png";
import Circle3 from "../../images/circle3.png";
import Circle4 from "../../images/circle4.png";
import Circle5 from "../../images/circle5.png";
import arrow from "../../images/arrow.png";
import  Slide  from "../Slide";

function Home() {
  return (
    <div>
      <Header />
      <div className="home-main-wrp">
        <section id="bnr-wrp">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="bnr">
                  <h3>
                    Worlds first<br></br>digital farming<br></br>experience
                  </h3>
                  <p>Start farming from the comfort of your home</p>
                  <div className="bnr-butn-wrp">
                    <div className="get-started">
                      <a href="#">Get Started</a>
                    </div>
                    <div className="view">
                      <a href="#">
                        View Real Life Farm
                        <span>
                          <img src={butnarrow}></img>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="bag-1">
                  <img src={Img1} alt="" />
                  <h3>About US</h3>
                  <h2>
                    Who we are <span>MyFarmPet</span>
                  </h2>
                  <p>
                    Farmpet farming is a way to buy and own real profit earning
                    assets. This allows you to enter the world of farming
                    without getting a real farm and having to get idea on how
                    farming works but yet still bring in profits.
                  </p>
                </div>
                <div className="bag-2">
                  <button className=" btn btn-primary">
                    Read More <img src={arrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bag-3">
                  <img src={Img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="bag-4">
                  <img src={Img1} alt="" />
                  <h5>Featured</h5>
                  <div className="bag-5">
                    <p>
                      Who do policy holders <br />
                      recommend <span>us?</span>
                    </p>
                    <div className="bag-6">
                      <p>
                        Due to our insurance coverage, more than millions of
                        people could become users. These factors lead to
                        policyholders recommending the premium brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 bag-8">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="bag-7">
                      <img src={Img3} alt="" />
                      <h3>Live Assets</h3>
                      <p>
                        Assets are existing on a live farm with insurance cover{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="bag-7">
                      <img src={Img4} alt="" />
                      <h3>Daily Dividends</h3>
                      <p>Investor receives daily dividends from asset. </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="bag-7">
                      <img src={Img5} alt="" />
                      <h3>Funds Distribution</h3>
                      <p>
                        User can send and receive funds from other users within
                        the app. They can also withdraw this fund into their
                        bank accounts
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="bag-7">
                      <img src={Img6} alt="" />
                      <h3>Instant Buy and Sale</h3>
                      <p>
                        Assets can only be purchased through the app and can be
                        sold at anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="wrap-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bag-9">
                            <img src={Img1} alt="" />
                            <h5>How it works</h5>
                            <h2>Start <span>Farming</span> in just few steps</h2>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="bag-10">
                       <Tabs/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="wrap-7">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="bag-20">
                <img src={Img1} alt="" />
                <h3>Myfarmpet Importance</h3>
                <p>General Benefits of using <span>MyFarmPet</span></p>
                </div>
              </div>
              <div className="col-md-7 col-sm-12">
              <div className="bag-21">
               <div className="row">
                  <div className="col-md-6 col-sm-12">
              <div className="bag-22">
              <img src={Img10} alt="" />
              <h2>Farmpet farm gets</h2>
              <p>Farmpet farm gets an asset and grow it ready to start producing.</p>
              <a href="">Learn More</a>
              </div>
                  </div>                
                  <div className="col-md-6 col-sm-12">
              <div className="bag-22">
              <img src={Img11} alt="" />
              <h2>Farmpet farm gets</h2>
              <p>The assets has insurance in place to cover in case of loss.</p>
              <a href="">Learn More</a>
              </div>
                  </div>                
                  <div className="col-md-6 col-sm-12">
              <div className="bag-22">
              <img src={Img12} alt="" />
              <h2>Farmpet farm gets</h2>
              <p>Investor purchase the assets and receive daily rewards from the assets.</p>
              <a href="">Learn More</a>
              </div>
                  </div>                
                  <div className="col-md-6 col-sm-12">
              <div className="bag-22 bag-23">
              <img src={Img13} alt="" />
              <h2>Farmpet farm gets</h2>
              <p>Assets can be sold anytime.</p>
              <a href="">Learn More</a>
              </div>
                  </div>    


                               
                               
                  </div>
               </div>
              </div>

              <div className="col-md-5">
               <div className="bag-24">
               <img src={Img14} alt="" />
               </div>
              </div>
            
            </div>
          </div>
        </section>

<Slide/>

     

        <section className="wrap-9">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="bag-36">
                    <img src={Img19} alt="" />
                  </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="bag-37">
                    <img src={Img1} alt="" />
                    <h2>Download Myfarmpet</h2>
                    <p>Let's help you become <span>financially free</span> and save you the stress of actual farming.</p>
                    <div className="bag-38">
                      <p>Join our 200,000+ users farming and setting long term goals!</p>
                    </div>
                    <div className="bag-39">
                      <button className="btn btn-primary"><img src={Img8} alt="" /> GOOGLE PLAYSTORE</button>
                      <button className="btn btn-primary"><img src={Img9} alt="" /> APPLE STORE</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>


        <section className="wrap-10">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="bag-40">
                  <h2>Subscribe to our News Letter</h2>
                  <p>What are you waiting for, subscribe now!</p>
                  <img src={Img20} alt="" />
                  <input type="text" name="" id="" className="form-control " placeholder="Email Address"
                  />
                  <button className="btn btn-primary" type="button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Footer/>

      </div>
    </div>
  );
}

export default Home;
