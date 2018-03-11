import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import { updateUser, updateTime } from "./actions/index.js";
import store from "./store/index.js";
import { connect } from "react-redux"; 

class Header extends React.Component { 

	constructor() {
		super();
		this.state = [];
	}

	componentDidMount(){
		store.dispatch( updateTime(new Date().toString()) );
	}

	

   render() { 
	   if(this.state.redirect == "/") {
		   return (<Redirect to="/" />)
	   }
      return (
      	<header>
      	<h1 title={this.props.title} className="header-container">
	      	<div className="logo"><img src={this.props.logo} /></div>
	      	<div className="slogan">{this.props.slogan}</div>
	      	<div className="clear"></div>

      	</h1>        	
		  
		  
		  {
			  
		  (()=>{ if(this.props.username)
					return (
						<div className="greeting">Welcome, {this.props.username} | <a href="javascript:;" onClick={()=>{		
							store.dispatch( updateUser({"username":""}));
							this.setState({"redirect": "/"});
						}}>Logout</a>!</div>
			)
					else return (
						<div className="greeting">Welcome, Guest!</div>
			)
		})()
		}


      	</header>
      );
   }

    

}

const mapStateToProps2 = (state) => {
	return { 
		username: state.user.username,
	};
};

const Header2=connect(mapStateToProps2)(Header);

export default Header2;
