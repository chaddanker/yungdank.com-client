import { EMAIL_SENT } from '../actions/types';

export default (state = "", action) => {
    switch(action.type) {
        case EMAIL_SENT: return action.payload;
        default: return state;
    }
};