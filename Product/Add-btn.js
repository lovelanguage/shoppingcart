import React from 'react';
import './Addbtn.css';

export default function AddBtn (props){
	return(
	<button
	 onClick={() => props.addToCart(props.product)}> 
	 Add to cart ({ (props.cartItem && props.cartItem.quantity) || 0 }) 
	 </button>
	 );
}