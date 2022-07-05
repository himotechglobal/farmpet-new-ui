import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import sc1  from '../images/sc1.png';
import sc2  from '../images/sc2.png';
import sc3  from '../images/sc3.png';
import sc4  from '../images/sc4.png';
import global  from '../images/global.png';
import mediums  from '../images/mediums.png';
import logo from "../images/footerlogo.png";
import '../css/style.css'
class Footer extends Component {
  render() {
	const select = document.querySelectorAll('.selectBtn');
	const option = document.querySelectorAll('.option');
	let index = 1;
	
	select.forEach(a => {
		a.addEventListener('click', b => {
			const next = b.target.nextElementSibling;
			next.classList.toggle('toggle');
			next.style.zIndex = index++;
		})
	})
	option.forEach(a => {
		a.addEventListener('click', b => {
			b.target.parentElement.classList.remove('toggle');
			
			const parent = b.target.closest('.select').children[0];
			parent.setAttribute('data-type', b.target.getAttribute('data-type'));
			parent.innerText = b.target.innerText;
		})
	})
	 return (
		


		<section className='wrap-11'>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12">
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
									<li><a href="">Blog</a></li>
									<li><a href="">Contact</a></li>
									<li><a href="">Agriculture</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-12">
							<div className="bag-42">
								<h2>Contact</h2>
								<ul>
									<li><a href="">Facebook</a></li>
									<li><a href="">Twitter</a></li>
									<li><a href="">Instagram</a></li>
									<li><a href="">Linked In</a></li>
								</ul>
							</div>
						</div>

					<div className="col-md-12">
						{/* <div className="bag-43">
							<p>Made with❤️ from the African Diaspora 🌍 </p>
							
						</div> */}
						<div className="bag-44">
						<p>© Copyright MyFarmPet 2022. All Rights Reserved</p>
						</div>
						<div className="bag-45">
							<h2>Terms and Conditions</h2>
							<h2>Privacy Policy</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}

export default Footer;