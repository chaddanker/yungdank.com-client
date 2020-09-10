import React, { Component, createRef } from 'react';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

import BackButton from './BackButton';

import beats from '../data/beats';

class Beats extends Component {

	constructor(props) {
	    super(props);
	    this.state = { selectedBeat: '', loading: true, swiperIndex: 0 };
	    this.swiperRefBeats = createRef();
  	}

  	componentDidUpdate() {
	    if(this.state.selectedBeat === '')
	    	this.setState({ selectedBeat: beats[this.swiperRefBeats.current.swiper.realIndex] });
  	}

  	replaceDashes(str) {
		const searchRegExp = new RegExp('-', 'g'); 
		const replaceWith = ' ';

		return str.replace(searchRegExp, replaceWith);
  	}

  	renderPlayer(beat) {
  		if(beat){
	  		return (
				<audio ref="audio" onload={this.hideSpinner} controls style={{ width: '100%'}}>
					<source src={`/beats/${beat}`} type="audio/mpeg" />
					Your browser does not support the audio element.
				</audio>
	  		);
  		}
  	}

	renderList() {
		return beats.map(beat => {
			return (
				<div className="beat" id={beat} key={beat} style={{ height: 250, width: 250, backgroundColor: '#ff0b0b'}}>
					<div className="ui inverted centered header" style={{ height: '20%', margin: '40% 0', fontFamily: 'Gothic', fontSize: '2.5em', fontWeight: 100}}>
						{this.replaceDashes(beat).slice(0, beat.length - 4)}
					</div>
				</div>
			);
		});
	}

	onSlideChange = () => {
		this.setState({ 
			selectedBeat: beats[this.swiperRefBeats.current.swiper.realIndex] 
		},() => {
            this.refs.audio.pause();
            this.refs.audio.load();
       });
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
			slideShadows: false
			},
			keyboard: true
	};

  		return (
			<div>
				<BackButton />
				<Swiper {...params} ref={this.swiperRefBeats} shouldSwiperUpdate on={{transitionStart: this.onSlideChange}}>
					{this.renderList()}
				</Swiper>
			</div>	
  		);
  	}

	render() {
		return (
			<div>
				{this.renderSwiper()}
				{this.renderPlayer(this.state.selectedBeat)}
			</div>
		);
	}
}


export default Beats;
