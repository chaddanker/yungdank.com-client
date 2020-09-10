import React from 'react';

const Header = () => {
	return (
		<div style={{marginBottom: `${window.innerWidth < 400 ? '1em' : '3em'}`}}>
			<h1 className="ui centered header" style={{ fontFamily: 'Gothic', color: 'rgb(255, 255, 255)', fontSize: '5em', fontWeight: 100, marginBottom: 20 }}>yungdank</h1>
		</div>
	);
};

export default Header;