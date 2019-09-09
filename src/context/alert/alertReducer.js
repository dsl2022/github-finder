import { SET_ALERT, REMOVE_ALERT } from 'context/types';

export default (state, action) => {
	switch (action.type) {
		case SET_ALERT:
			return {
				...state,
				msg: action.payload
			};
		case REMOVE_ALERT:
			return null;

		default:
			return state;
	}
};
