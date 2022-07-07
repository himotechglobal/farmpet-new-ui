import React, { Component } from 'react';
import logo from "../images/footerlogo.png";
import '../css/style.css'
class Footer extends Component {
	render() {
		 

		 
		 
		return (



			<section className='wrap-11'>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-6 col-sm-12">
							<div className="bag-41">
								<img src={logo} alt="" />

								<div class="select">
									<div class="selectBtn" data-type="firstOption">English</div>
									<div class="selectDropdown">
										<div class="option" data-type="firstOption">Hindi</div>
										<div class="option" data-type="secondOption">French</div>
										<div class="option" data-type="thirdOption">Arabic</div>
									</div>
								</div>

							</div>

						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="bag-42">
								<h2>Support</h2>
								<ul>
									<li><a href="">Privacy Policy</a></li>
									<li><a href="">Terms of Service</a></li>
									<li><a href="">Support</a></li>
									<li><a href="">FAQ</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="bag-42">
								<h2>Company</h2>
								<ul>
									<li><a href="">About Us</a></li>
									 
								</ul>
							</div>
						</div>
						<div className="col-lg-1 col-md-6 col-sm-12">
							<div className="bag-42">
								<h2>Contact</h2>
								<ul>
									<li><a href="">Facebook</a></li>
									<li><a href="">Twitter</a></li>
									<li><a href="">Instagram</a></li>
								</ul>
							</div>
						</div>

						{/* <div className="col-md-12"> */}
						{/* <div className="bag-43">
							<p>Made with❤️ from the African Diaspora 🌍 </p>
							
						</div> */}
						{/* <div className="bag-44">
						<p>© Copyright Farmpet 2022. All Rights Reserved</p>
						</div>
						<div className="bag-45">
							<h2>Terms and Conditions</h2>
							<h2>Privacy Policy</h2>
						</div> */}
						{/* </div> */}


					</div>
					<div className='bottom'>
						<div className='bottom-list'>
							<div className='btm-left'>
								<p>© Copyright Farmpet 2022. All Rights Reserved</p>
							</div>
							<div className='btmright'>
								<a href='#'>Terms and Conditions</a>
								<a href='#'>Privacy Policy</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Footer;