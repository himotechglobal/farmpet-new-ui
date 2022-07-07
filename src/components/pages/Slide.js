import React, { Component } from "react";
import Circle1 from "../images/circle1.png";
import Circle2 from "../images/circle2.png";
import Circle3 from "../images/circle3.png";
import Circle4 from "../images/circle4.png";
import Circle5 from "../images/circle5.png";
import Img16 from "../images/img16.png";
import Img17 from "../images/img17.png";
import Img18 from "../images/img18.png";
import Img15 from "../images/img15.png";
import Img1 from "../images/img1.png";

// export const Slide = () => {
//   return (

//   )
// }

import Slider from "react-slick";

export default class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      // <div>
      //   <Slider {...settings}>
      //     <div>
      //       <section className="wrap-8">
      //         <div className="container">
      //           <div className="row">
      //             <div className="col-md-7">
      //               <div className="bag-25">
      //                 <div className="bag-26">
      //                   <img src={Circle1} alt="" />
      //                 </div>
      //                 <div className="bag-27">
      //                   <img src={Circle2} alt="" />
      //                 </div>
      //                 <div className="bag-28">
      //                   <img src={Circle3} alt="" />
      //                 </div>
      //                 <div className="bag-29">
      //                   <img src={Circle4} alt="" />
      //                 </div>
      //                 <div className="bag-30">
      //                   <img src={Circle5} alt="" />
      //                 </div>

      //                 <div className="bag-31">
      //                   <img src={Img15} alt="" />
      //                 </div>
      //                 <div className="bag-32">
      //                   <img src={Img16} alt="" />
      //                 </div>
      //                 <div className="bag-33">
      //                   <img src={Img17} alt="" />
      //                 </div>
      //                 <div className="bag-34">
      //                   <img src={Img18} alt="" />
      //                 </div>
      //               </div>
      //             </div>
      //             <div className="col-lg-5 col-md-12 col-sm-12">
      //               <div className="bag-35">
      //                 <img src={Img1} alt="" />
      //                 <h2>Testimonials</h2>
      //                 <p>
      //                   This is a friendly farm that you can collect, grow and
      //                   care for. In this game you have to feed your animals and
      //                   complete quests for them, making them healthier and
      //                   happier.
      //                 </p>
      //                 <h6>
      //                   <span>Blessing Christopher</span> - Creative writer &
      //                   Story Teller
      //                 </h6>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </section>
      //     </div>
      //   </Slider>
      // </div>
      <div>
        <Slider {...settings}>


          <section className="wrap-8">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="bag-25">
                    <div className="bag-26">
                      <img src={Circle1} alt="" />
                    </div>
                    <div className="bag-27">
                      <img src={Circle2} alt="" />
                    </div>
                    <div className="bag-28">
                      <img src={Circle3} alt="" />
                    </div>
                    <div className="bag-29">
                      <img src={Circle4} alt="" />
                    </div>
                    <div className="bag-30">
                      <img src={Circle5} alt="" />
                    </div>

                    <div className="bag-31">
                      / <img src={Img15} alt="" />/{" "}
                    </div>
                    <div className="bag-32">
                      <img src={Img16} alt="" />
                    </div>
                    <div className="bag-33">
                      <img src={Img17} alt="" />
                    </div>
                    <div className="bag-34">
                      <img src={Img18} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="bag-35">
                    <img src={Img1} alt="" />
                    <h2>Testimonials</h2>
                    <p>
                      This is a friendly farm that you can collect, grow and care for. In this game you have to feed your animals and complete quests for them, making them healthier and happier.
                    </p>
                    <h6>
                      <span>Blessing Christopher - </span>Creative writer &
                      Story Teller
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <div>
            <section className="wrap-8">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="bag-25">
                      <div className="bag-26">
                        <img src={Circle1} alt="" />
                      </div>
                      <div className="bag-27">
                        <img src={Circle2} alt="" />
                      </div>
                      <div className="bag-28">
                        <img src={Circle3} alt="" />
                      </div>
                      <div className="bag-29">
                        <img src={Circle4} alt="" />
                      </div>
                      <div className="bag-30">
                        <img src={Circle5} alt="" />
                      </div>

                      <div className="bag-31">
                        <img src={Img15} alt="" />{" "}
                      </div>
                      <div className="bag-32">
                        <img src={Img16} alt="" />
                      </div>
                      <div className="bag-33">
                        <img src={Img17} alt="" />
                      </div>
                      <div className="bag-34">
                        <img src={Img18} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="bag-35">
                      <img src={Img1} alt="" />
                      <h2>Testimonials</h2>
                      <p>
                        This is a friendly farm that you can collect, grow and care for. In this game you have to feed your animals and complete quests for them, making them healthier and happier.
                      </p>
                      <h6>
                        <span>Blessing Christopher</span> - Creative writer &
                        Story Teller
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div>
            <section className="wrap-8">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="bag-25">
                      <div className="bag-26">
                        <img src={Circle1} alt="" />
                      </div>
                      <div className="bag-27">
                        <img src={Circle2} alt="" />
                      </div>
                      <div className="bag-28">
                        <img src={Circle3} alt="" />
                      </div>
                      <div className="bag-29">
                        <img src={Circle4} alt="" />
                      </div>
                      <div className="bag-30">
                        <img src={Circle5} alt="" />
                      </div>

                      <div className="bag-31">
                        <img src={Img15} alt="" />{" "}
                      </div>
                      <div className="bag-32">
                        <img src={Img16} alt="" />
                      </div>
                      <div className="bag-33">
                        <img src={Img17} alt="" />
                      </div>
                      <div className="bag-34">
                        <img src={Img18} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="bag-35">
                      <img src={Img1} alt="" />
                      <h2>Testimonials</h2>
                      <p>
                        Welcome to your own farm! This is your farm! Take care of it and unlock new animals to keep on your farm by completing quests.
                      </p>
                      <h6>
                        <span>Jerry Ikwuje</span> - Bank Receptionist
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="wrap-8">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="bag-25">
                      <div className="bag-26">
                        <img src={Circle1} alt="" />
                      </div>
                      <div className="bag-27">
                        <img src={Circle2} alt="" />
                      </div>
                      <div className="bag-28">
                        <img src={Circle3} alt="" />
                      </div>
                      <div className="bag-29">
                        <img src={Circle4} alt="" />
                      </div>
                      <div className="bag-30">
                        <img src={Circle5} alt="" />
                      </div>

                      <div className="bag-31">
                        <img src={Img15} alt="" />{" "}
                      </div>
                      <div className="bag-32">
                        <img src={Img16} alt="" />
                      </div>
                      <div className="bag-33">
                        <img src={Img17} alt="" />
                      </div>
                      <div className="bag-34">
                        <img src={Img18} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="bag-35">
                      <img src={Img1} alt="" />
                      <h2>Testimonials</h2>
                      <p>
                        Hi there! Thanks for checking out my farm. I know it's in a really weird place, but there is no place like it. I started this little place almost 2 years ago when I realized that the only thing I enjoyed about working at an office was looking outside at all of the farmland.
                      </p>
                      <h6>
                        <span>Udej Judith</span> - Poduction Manager
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>
    );
  }
}
