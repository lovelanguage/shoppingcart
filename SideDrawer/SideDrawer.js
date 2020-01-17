import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if(props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
	<nav className={drawerClasses}>
		<ul>
			<li><a href="NewArrivals">New Arrivals</a></li>
			<li><a href="EpicBlack">Epic Black</a></li>
			<li><a href="Women">Women</a></li>
			<li><a href="Men">Men</a></li>
			<li><a href="Accessories">Accessories</a></li>
		</ul>
	</nav>
	);
	};

export default sideDrawer; 
