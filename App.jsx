import React, { Component } from 'react';
import Header from './Header.jsx'
import Form from './Form.jsx'
import Footer from './Footer.jsx'
import store from "./store/index.js";


class App extends Component {
  render() {
    return (

      <div className="App">
      <Header logo={this.props.logo} title={this.props.title} slogan={this.props.slogan} store={this.props.store} />
      <Form />
      <Footer store={store} />
      </div>
    );
  }
}

export default App;
