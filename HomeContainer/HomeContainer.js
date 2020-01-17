import React from 'react';
import './HomeContainer.css';
import './Banner.css';
import { Link } from 'react-router-dom'

const HomeContainer = props => ( 

	
 <div>
    <div className="banner__nav"> 
	    <div className="banner__nav-li">
		     <p><a href='#shop'>
		     Seen it on the Street Wear
		    </a>
		    </p>
	    	 <p className="banner__nav-para"><a href="#shop">Save Up To 50% OFF</a></p>
	    </div>
	    <div className="banner__nav-li">
		      <p><a href='#shop'>
		    FREE Shipping on Orders OVER $60
		    </a>
		    </p>
	    </div>
	    <div className="banner__nav-li">
	   		 <p className="banner__nav-para">Save Up To 75% OFF retail prices</p>
	    </div>
    </div>
  
	  <div className="HomeContainer">
		  <div className="HomeContainer__img"></div>
		   <div className="HomeContainer__content">
			   <p className="HomeContainer__font1">Free shipping on all online orders</p>
			   <button className="HomeContainer__button">SHOP NOW</button>
			   
	       </div>
	  </div>
	<div className="GridContainer__bottom-banner">
			<p className="GridContainer__content-4">Fall sale</p>
	</div>
				<div>
				<div className="Grid" id="shop">
				  <div className="GridContainer">
				  <div className="GridContainer__img"></div>
				  <div className="GridContainer__img-2"></div>
				 
				</div>
				</div>
				<div className="Grid-button">
				   <button className="GridContainer__button"><a href="/EpicBlack">SHOP WOMEN</a></button>
				   <button className="GridContainer__button-2"><a href="/EpicBlack">SHOP MEN</a></button>
				</div>
		</div>
 </div>
  );
	
  
  


export default HomeContainer;