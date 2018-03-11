import React, { Component } from 'react';
import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'

class App extends Component {

 	constructor() {
 		super();
 		this.state={};
 	}

	componentDidMount() {
		  
	}

  render() {

 
    return ( 
        <div className="App">
			<Header logo={this.props.logo} title={this.props.title} slogan={this.props.slogan} user="Guest" />
			<Main reports={this.props.reports} />
			<Footer />
        </div> 
     );
  }
}

export default App;
