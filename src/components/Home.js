import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className="ui inverted header" style={{ fontFamily: 'Gothic', fontWeight: 100, fontSize: '3em' }}>
				<div className="item"><a href="/music" style={{color: 'white'}}>Music</a></div>
				<div className="item"><Link to="/beats" style={{color: 'white'}}>Beats</Link></div>
				<div className="item"><Link to="/merch" style={{color: 'white'}}>Merch</Link></div>
				<div className="item"><Link to="/about" style={{color: 'white'}}>About</Link></div>
			</div>
		);
	}
};

export default Home;