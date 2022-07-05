import React from 'react'
import Header from "../header";
import Img21 from '../../images/img21.png'
import Img22 from '../../images/img22.png'
import Img8 from '../../images/img8.png'
import Img9 from '../../images/img9.png'
import Img23 from '../../images/bg3.png'
import Img24 from '../../images/img24.png'
import Footer from '../footer';
 const Features = () => { 
  return (
    
  <div>
  <Header />

  <section className="wrap-12">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bag-46">
          <h2>
          Myfarmpet features
          </h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bag-47">
            <div className="bag-48">
            <img src={Img21} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
         <div className="bag-51">
           <div className="bag-49">
           <h2>Pen Section</h2>
           <p>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</p>
          </div>
          <div className="bag-50">
          <a href="">
          <img src={Img8} alt="" />
          <img src={Img9} alt="" />
          <h6>Get the App</h6>
          </a>
          </div>
         </div>
        </div>



        <div className="col-md-6">
         <div className="bag-52">
           <div className="bag-49">
           <h2>The Farmers Market</h2>
           <p>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</p>
          </div>
          <div className="bag-50">
          <a href="">
          <img src={Img8} alt="" />
          <img src={Img9} alt="" />
          <h6>Get the App</h6>
          </a>
          </div>
         </div>
        </div>
        <div className="col-md-6">
          <div className="bag-47">
            <div className="bag-48">
            <img src={Img22} alt="" />
            </div>
          </div>
        </div>



        <div className="col-md-6">
          <div className="bag-47">
            <div className="bag-48">
            <img src={Img23} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
         <div className="bag-51">
           <div className="bag-49">
           <h2>Loan Section (Akawo)</h2>
           <p>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</p>
          </div>
          <div className="bag-50">
          <a href="">
          <img src={Img8} alt="" />
          <img src={Img9} alt="" />
          <h6>Get the App</h6>
          </a>
          </div>
         </div>
        </div>

        

        <div className="col-md-6">
         <div className="bag-52">
           <div className="bag-49">
           <h2>Loan Section (Akawo)</h2>
           <p>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</p>
          </div>
          <div className="bag-50">
          <a href="">
          <img src={Img8} alt="" />
          <img src={Img9} alt="" />
          <h6>Get the App</h6>
          </a>
          </div>
         </div>
        </div>
        <div className="col-md-6">
          <div className="bag-47">
            <div className="bag-48">
            <img src={Img24} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <Footer/>
  </div>

  )
}

export default Features;