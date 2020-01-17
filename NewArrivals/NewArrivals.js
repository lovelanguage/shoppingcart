import React from 'react';
import './NewArrivals.css';




const NewArrivals = props => {
	return ( 

  <div className="NewArrivals__container" id="NewArrivals">	
 	
  	<p className="NewArrivals__header">New Arrivals</p>
	  <ul className="NewArrivals__ul-list">

	  <li className="NewArrivals__li-items-1" >
		 <div className="img__pic">
			  <p>Khaki Trousers</p>
			   <p>$12.00</p>
		  </div>
	  </li>

	  <li className="NewArrivals__li-items-2" style={{backgroundColor: 'white'}}>
	  <div className="img__pic">
			  <p>Khaki Trousers</p>
			   <p>$12.00</p>
		  </div>
		  </li>
	  <li className="NewArrivals__li-items-3" style={{backgroundColor: 'white'}}>
	  	<div className="img__pic">
			  <p>Over Sized Sweatshirt</p>
			   <p>$15.00</p>
		  </div>
	  </li>
	  <li className="NewArrivals__li-items-4" style={{backgroundColor: 'white'}}>
	  	<div className="img__pic">
			  <p>Black Bell Sleeves</p>
			   <p>$25.50</p>
		  </div>
	  </li>
	  </ul>
</div>

	 
	  

  
  );
  }


export default NewArrivals;