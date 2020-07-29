import { FETCH_TRACKS } from './types';

import axios from 'axios';

const myAPI = axios.create({
	baseURL: 'https://yungdank-api.herokuapp.com/'
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
