import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

import { fetchTracks } from '../actions';

class Tracks extends Component {

	constructor(props) {
	    super(props);
	    this.state = { selectedSong: '', loading: true, swiperIndex: 0 };
  	}

	componentDidMount() {
	    this.props.fetchTracks();
	    this.swiperRef =  createRef();
  	}

  	componentDidUpdate() {
	    if(this.state.selectedSong === '')
	    	//this.setState({ swiperIndex: this.swiperRef.current.swiper.realIndex});
	    	//console.log(this.state.swiperIndex);
	    	this.setState({ selectedSong: this.props.tracks[this.swiperRef.current.swiper.realIndex].uri });
  	}

  	renderPlayer(uri) {
  		if(uri){
	  		return (
	  			<iframe onLoad={this.hideSpinner} src={`https://embed.spotify.com/?uri=${uri}`} style={{ marginTop: 40 }} width="100%" height="80px" frameBorder="0"></iframe>
	  		);
  		}
  	}

	renderList() {
		return this.props.tracks.map(track => {
			return (
				<div id={track.uri} key={track.id} style={{backgroundImage: `url(${track.images[1].url})`, opacity: 0.5, height: 250, width: 250}}>
				</div>
			);
		});
	}

	onSlideChange = () => {
		this.setState({ selectedSong: this.props.tracks[this.swiperRef.current.swiper.realIndex].uri });
	}

	hideSpinner = () => {
	    this.setState({
	      loading: false
	    });
  	};

	render() {
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
			<div>
				<Swiper {...params} ref={this.swiperRef} shouldSwiperUpdate on={{transitionStart: this.onSlideChange}}>
					{this.renderList()}
				</Swiper>
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