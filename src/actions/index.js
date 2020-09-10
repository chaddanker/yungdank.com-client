import { FETCH_TRACKS, EMAIL_SENT } from './types';

import { myAPI, emailAPI } from '../apis';

export const fetchTracks = () => async dispatch => {
	const response = await myAPI.get('tracks');

	dispatch({ type: FETCH_TRACKS, payload: response.data });
};

export const sendEmail = (form) => async dispatch => {
	const response = await emailAPI.post('send', form);

	dispatch({ type: EMAIL_SENT, payload: response.data });
};