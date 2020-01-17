import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStroopwafel, faCheckSquare, faCoffee, faSearch, faCaretLeft,faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from './components/Navigation/Navigation';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';

import Signin from './components/Signin/Signin';
import Cartpage from './components/Cartpage/Cartpage';

import HomeContainer from './components/HomeContainer/HomeContainer';
import Grid from './components/Grid/Grid';
import NewArrivals from './components/NewArrivals/NewArrivals';
 
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'  

import EpicBlack from './components/EpicBlack/EpicBlack';
{/*import Women from './components/Women/Women';
import Men from './components/Men/Men';
import Accessories from './components/Accessories/Accessories';*/}



library.add(fab,faStroopwafel, faCheckSquare, faCoffee,faSearch, faCaretLeft, faCaretRight);

 
class App extends Component {
  constructor() {
    super();
    this.state={
    sideDrawerOpen: false,
    searchfield:'',
    
    
    }
  }

  drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

 onSearchChange(event) {
  console.log(event.target.value);
 }

  render() {

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop =  <Backdrop click={this.backdropClickHandler}/>
          }
  const LoginContainer = () => (
    <div className="contain">
    <Route path="/Signin" component={Signin} />
    <Route path="/Cartpage" component={Cartpage} />
    
    

      
    </div>
  );

  const DefaultContainer = () => (
     <div className="contain">
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} searchChange={this.onSearchChange}  /> 
       <SideDrawer show={this.state.sideDrawerOpen}/>
        { backdrop }
        <Route exact path='/' component={ HomeContainer } /> 
        <Route  path='/epicblack' component={ EpicBlack } />
        <Route  path='/newarrivals' component={ NewArrivals } />
       {/* <Route  path='/women' component={ Women } />
        <Route  path='/men' component={ Men } />
        <Route  path='/accessories' component={ Accessories } />*/}
        
           <Footer />
      </div>
  );


    return (
     
    <BrowserRouter>
      <div className="App" style={{height: '100%'}}>       
        <Switch>
        <Route  path='/(Signin)' component={ LoginContainer } />
        <Route  path='/(cartpage)' component={LoginContainer} />
        <Route component={DefaultContainer} />
            </Switch> 
             </div>
             </BrowserRouter> 
               
    );
  }
}

export default App;



