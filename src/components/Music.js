import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

import BackButton from './BackButton';

import { fetchTracks } from '../actions';

class Tracks extends Component {

	constructor(props) {
	    super(props);
	    this.state = { selectedSong: '', loading: true, swiperIndex: 0 };
  	}

	componentDidMount() {
	    this.props.fetchTracks();
	    this.swiperRef = createRef();
  	}

  	componentDidUpdate() {
	    if(this.state.selectedSong === '')
	    	this.setState({ selectedSong: this.props.tracks[this.swiperRef.current.swiper.realIndex].uri });
  	}

  	renderPlayer(uri) {
  		if(uri){
	  		return (
	  			<div>
	  				<iframe title="spotify-player" onLoad={this.hideSpinner} src={`https://embed.spotify.com/?uri=${uri}`} style={{ marginTop: 40 }} width="100%" height="80px" frameBorder="0"></iframe>
				</div>
	  		);
  		}
  	}

	renderList() {
		return this.props.tracks.map(track => {
			return (
				<div id={track.uri} key={track.id} style={{backgroundImage: `url(${track.images[1].url})`, height: 250, width: 250}}>
				</div>
			);
		});
	}

	onSlideChange = () => {
		const index = this.swiperRef.current ? this.swiperRef.current.swiper.realIndex : 0;
		this.setState({ selectedSong: this.props.tracks[index].uri });
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
		}

		return (
		<Swiper {...params} ref={this.swiperRef} shouldSwiperUpdate on={{transitionStart: this.onSlideChange}}>
			{this.renderList()}
		</Swiper>
		);
	}

	render() {

		return (
			<div>
				<BackButton />
				{this.renderSwiper()}
				{this.state.loading ? <div className="ui active inline loader"></div> : null}
				{this.renderPlayer(this.state.selectedSong)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tracks: state.tracks
	};
}

export default connect(mapStateToProps, { fetchTracks })(Tracks);