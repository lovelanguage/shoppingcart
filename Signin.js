import React from 'react';
import { Link } from 'react-router-dom'
import './Signin.css';




class Signin extends React.Component {
	constructor() {
	super();
	this.state = {
		signInEmail: '',
		signInPassword: ''
	 }
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSudmitSignIn = () => {
		
		fetch('http://localhost:3---/signin', {
			method:'psot',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.signInEmail,
				password:this.state.signInPassword
			})
			.then(response => response.json())
			.then(data => {
				if(data === 'success');
			})
		})
	}


	render(){
	return(
		<div>
	
		 <div className="Signin__logo">
            <div><a href="/">SALU</a></div>
            </div>
           
		<main className="flex justify-center mb6 mt5 black-80">
		
		  <form className="measure mt5 outline w-30 pa3 mr6 b--solid">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="email" 
		        name="email-address"  
		        id="email-address"
		         onChange={this.onEmailChange}
		        />
		       
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" 
		        htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="password"
		         name="password"  
		         id="password"
		          onChange={this.onPasswordChange}
		         />
		      </div>
		    </fieldset>
		    <div className="">
			   <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  >
			   <Link className="link dim dark-gray" to='/'> Sign In</Link>
			    </button>
		      <p className="mt4">*Save 10% on your next order!</p>
		    </div>
		  </form>

		  <form className="measure mt5 outline w-30 pa3 b--solid">
		    <fieldset id="register" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Register</legend>
		        <div className="mt3">
		        <label className="db fw6 lh-copy f6" 
		        htmlFor="name">Name</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="text"
		         name="name"  
		         id="name"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="email" 
		        name="new-email-address"  
		        id="new-email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" 
		        htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="password"
		         name="new-password"  
		         id="new-password"/>
		      </div>
		    </fieldset>
		    <div className="">
		     <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  >
			   <Link onClick={this.onSudmitSignIn} className="link dim dark-gray" to='/'>Register</Link>
			    </button>
		    </div>
		  </form>
		</main>
		</div>
		



	);
  }
}

	export default Signin;
