import { FETCH_TRACKS } from './types';

import axios from 'axios';

const spotify = axios.create({
	baseURL: 'https://api.spotify.com/v1/'
});

const myAPI = axios.create({
	baseURL: 'http://localhost:8888/'
});

export const fetchToken = () => async dispatch => {
	const response = await myAPI.get('auth_token');

	console.log(response.data.auth_token);

};

export const fetchTracks = () => async dispatch => {
	const response = await myAPI.get('tracks');

	console.log(response.data);
	dispatch({ type: FETCH_TRACKS, payload: response.data.tracks });
};
