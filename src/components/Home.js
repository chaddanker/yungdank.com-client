import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BgVideo from './BgVideo';

class Home extends Component {
	render() {
		return (
			<div style={{marginBottom: '3em'}}>
				<div className="ui inverted header" style={{ fontFamily: 'Gothic', fontWeight: 100, fontSize: '3em' }}>
					<div className="item"><Link to="/music" style={{color: 'white'}}>Music</Link></div>
					<div className="item"><Link to="/beats" style={{color: 'white'}}>Beats</Link></div>
					<div className="item"><Link to="/merch" style={{color: 'white'}}>Merch</Link></div>
					<div className="item"><Link to="/about" style={{color: 'white'}}>About</Link></div>
					<div className="item"><Link to="/contact" style={{color: 'white'}}>Contact</Link></div>
					<BgVideo />
				</div>
			</div>
		);
	}
};

export default Home;