import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

import Music from './components/Music';
import Beats from './components/Beats';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Merch from './components/Merch';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {

	render() {
		return (
			<div>
				<div className="ui container">					
					<BrowserRouter>
						<Header />
						<Route exact path="/" component={Home} />
						<Route exact path="/music" component={Music} />
						<Route exact path="/beats" component={Beats} />
						<Route exact path="/merch" component={Merch} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
					</BrowserRouter>
					<Footer />
				</div>
			</div>
		);
	}
};

export default App;
