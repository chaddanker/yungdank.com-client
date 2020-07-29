import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Tracks from './components/Tracks';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="ui container">
				<h1 className="ui centered header" style={{ fontFamily: 'Gothic', color: 'rgb(255, 255, 255)', fontSize: '5em', fontWeight: 100 }}>yungdank</h1>
				<Tracks />
				<Footer />
			</div>
		);
	}
};

export default App;
