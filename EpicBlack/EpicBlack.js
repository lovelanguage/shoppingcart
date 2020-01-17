import React from 'react';

import './EpicBlack.css';

import  ProductListing from '../../Product/Product-list';
import Data from '../../Data/Products.json';


const EpicBlack = props => (
		
<div className="Sale__container" id="EpicBlack">
  	<p className="Sale__header">New Arrivals Coming Soon!</p>

  	<ProductListing products={Data.products} />
















	  {/*<ul className="Sale__ul-list">
	  <li className="Sale__li-items-1"  style={{backgroundColor: 'white'}}>
	  		<div className="img__pic">
			  <p>Black Bell Sleeves</p>
			   <p className="redline">$25.50</p>
			   <p>$10.25</p>
			  <p> <button> Add to cart</button></p>
		  </div>
	  </li>
	  <li className="Sale__li-items-2" style={{backgroundColor: 'white'}}>
	  		<div className="img__pic">
			  <p>Black Bell Sleeves</p>
			   <p>$25.50</p>
			   <p>
			   <button> Add to cart</button></p>
			</div>
			
	  </li>
	  <li className="Sale__li-items-3" style={{backgroundColor: 'white'}}>
	  		<div className="img__pic">
			  <p>Black Bell Sleeves</p>
			   <p>$25.50</p>
			   <p> <button> Add to cart</button></p>
		  </div>
	  </li>
	  <li className="Sale__li-items-4" style={{backgroundColor: 'white'}}>
	  		<div className="img__pic">
			  <p>Black Bell Sleeves</p>
			   <p>$25.50</p>
			   <p> <button> Add to cart</button></p>
		  </div>
	  </li>
	 
	  </ul>*/}
</div>

	);


export default EpicBlack; 


