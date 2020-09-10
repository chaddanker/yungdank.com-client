import axios from 'axios';

export const myAPI = axios.create({
	baseURL: 'https://yungdank-json.herokuapp.com/'
});

export const emailAPI = axios.create({
	baseURL: 'https://yungdank-api.herokuapp.com/'
});