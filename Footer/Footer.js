import React from 'react';
import './Footer.css';


const Footer = props => ( 
	<div className="footer">
		<div className="col-1-of-2">
	  		<ul className="footer__list">
	  	 		<li className="footer_item"><a href='/' className="footer__link">Company</a></li>
	  	 		<li className="footer_item"><a href='/' className="footer__link">Contact Us</a></li>
				<li className="footer_item"><a href='/' className="footer__link">Carrers</a></li>
 				<li className="footer_item"><a href='/' className="footer__link">Privacy Policy</a></li>
				<li className="footer_item"><a href='/' className="footer__link">Terms</a></li>
	  		</ul>
	  	</div>
		<div className="col-1-of-2">
			<p className="copyright">Copyright 2018. Designed by Erica Breed. </p>
		</div> 
	</div>
	  
	  );

export default Footer;