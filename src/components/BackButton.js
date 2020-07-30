import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
	return (
		<div class="back-button" style={{ position: 'relative', padding: '20px 0'}}>
			<Link to="/" className="ui floated left">
				<i className="ui inverted big left arrow icon"></i>
			</Link>
		</div>
	);
};

export default BackButton;