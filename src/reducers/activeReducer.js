import { CHANGE_ACTIVE } from '../actions/types';

export default (state, action) => {
	switch(action.payload){
		case CHANGE_ACTIVE: return action.payload;
		default: return state;
	}
};