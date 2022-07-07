import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';



import Home from './components/pages/home/home';
import Features from './components/pages/Features/Features';

class App extends Component {

  render() {
    return (
	<Router>
		<div>				
			 
			<Route exact path="/" name="Home Page" component = {Home} />
			<Route exact path="/Features" name="Features Page"  component = {Features} />
			 
		</div>
	</Router>
    );
  }
}

export default App;
