import { combineReducers } from 'redux';

import tracksReducer from './tracksReducer';
import emailReducer from './emailReducer';

export default combineReducers({
	tracks: tracksReducer,
	emailSent: emailReducer
});
