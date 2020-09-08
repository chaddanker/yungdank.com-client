import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

import BackButton from './BackButton';

import photos from '../photos';

class Beats extends Component {

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

  	renderCard() {
  		return (
			<div>
				<div class="ui centered card">
				  <div class="image">
				    <img src={`images/${this.state.selectedPhoto}`} />
				  </div>
				  <div class="content">
				    <a class="header">Kristy</a>
				    <div class="meta">
				      <span class="date">Joined in 2013</span>
				    </div>
				    <div class="description">
				    Artist Yung Dank torrents through the underground city of youth culture, risen from the streets of Johannesburg, South Africa. He captures his sound into a fiery fusion between kickback trap and euphoric synth wave beats.
					His immersive sound is quite addictive to say the least.
				    </div>
				  </div>
				  <div class="extra content">
				    <a>
				      <i class="user icon"></i>
				      22 Friends
				    </a>
				  </div>
				</div>
			</div>
  		);  	
  	}

	renderList() {
		return photos.map((photo) => {
			return (
				<div key={photo} style={{backgroundImage: `url(images/${photo})`, height: 978 / 3, width: 750 / 3}}>
				</div>
			);
		});
	}

	onSlideChange = () => {
		this.setState({ selectedPhoto: photos[this.swiperRefPhotos.current.swiper.realIndex] });
		this.setState({ selectedIndex:  this.swiperRefPhotos.current.swiper.realIndex});
	}

	hideSpinner = () => {
	    this.setState({
	      loading: false
	    });
  	};

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

export default Beats;

/** to do: make swiper component reusable **/