import React, { Component, createRef } from 'react';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

import BackButton from './BackButton';

import photos from '../data/photos';

class About extends Component {

	constructor(props) {
	    super(props);
	    this.state = { selectedPhoto: '', loading: true, selectedIndex: 0 };
	    this.swiperRefPhotos = createRef();
  	}

  	componentDidUpdate() {
	    if(this.state.selectedPhoto === '') {
	    	this.setState({ selectedPhoto: photos[this.swiperRefPhotos.current.swiper.realIndex] });
	    	this.setState({ selectedIndex:  this.swiperRefPhotos.current.swiper.realIndex});
	    }
  	}

	renderList() {
		return photos.map((photo) => {
			return (
				<div key={photo} onLoad={this.state.loading ? this.setState({ loading: false }) : null} style={{backgroundImage: `url(images/${photo})`, height: 978 / 3, width: 750 / 3}}>
					{this.state.loading ? 'loading' : ''}
				</div>
			);
		});
	}

	onSlideChange = () => {
		this.setState({ selectedPhoto: photos[this.swiperRefPhotos.current.swiper.realIndex] });
		this.setState({ selectedIndex:  this.swiperRefPhotos.current.swiper.realIndex});
	}

  	renderSwiper() {
  		const params = {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true
			},
			keyboard: true
	};

  		return (
			<div>
				<Swiper {...params} ref={this.swiperRefPhotos} shouldSwiperUpdate on={{transitionStart: this.onSlideChange}}>
					{this.renderList()}
				</Swiper>
			</div>	
  		);
  	}

	render() {
		return (
			<div>
				<BackButton />
				{this.renderSwiper()}
				<div class="ui inverted items">
					<div class="item">
					    <div class="content">
							<div class="description" style={{ color: '#fff', fontWeight: 100, fontSize: '1.5em' }}>
								<p>Artist Yung Dank torrents through the underground city of youth culture, risen from the streets of Johannesburg, South Africa. He captures his sound into a fiery fusion between kickback trap and euphoric synth wave beats.
								His immersive sound is quite addictive to say the least.</p>
								<p></p>
							</div>
					    </div>
				  	</div>
				</div>
			</div>
		);
	}
}

export default About;
