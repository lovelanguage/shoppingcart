import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const Navigation = ({drawerClickHandler, searchfield, searchChange}) => ( 
  <header className="navigation">
      <nav className="navigation__toolbar">
       <div className="navigation__toggle">
          <DrawerToggleButton click={drawerClickHandler}/>
       </div>
       <div className="navigation__logo">
          <div><a href="/">SALU</a></div>
       </div>
       <div className="spacer" />
       <div>
            <input className="search__field" 
              type="text" 
              placeholder="search" 
              onChange={searchChange} />
            <button className="search__field-button" 
              type="submit"><FontAwesomeIcon icon="search" 
              size="lg" />
            </button>
       </div>
       <div className="navigation-items-list">
             <ul>
              <li><Link to='/Signin'>Sign In</Link></li>
              <li><Link to='/Cartpage'>Cart</Link></li>
             </ul>
       </div>
      </nav>
      
        <div className="navigation__below">
           <ul className="navigation__below-list">
             
              <li className="navigation__below-items"><Link to='EpicBlack'>Shop Now</Link></li>
             {/* <li className="navigation__below-items"><a href='Women'>Women</a></li>
              <li className="navigation__below-items"><a href='Men'>Men</a></li>
               <li className="navigation__below-items"><a href='newarrivals'>New Arrivals</a></li>
              <li className="navigation__below-items"><a href='Accessories'>Accessories</a></li> */} 
           </ul>
        </div>

    
  </header>
 
  );
  
  


export default Navigation;