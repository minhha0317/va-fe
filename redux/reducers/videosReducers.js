import {
	VIDEOS_GET_FAILED,
	VIDEOS_GET_SUCCESS,
	VIDEOS_REQUEST,
	VIDEO_DETAIL_FAILED,
	VIDEO_DETAIL_REQUEST,
	VIDEO_DETAIL_SUCCESS,
} from '../actionTypes';

export const videosReducer = (state = {}, action) => {
	switch (action.type) {
		case VIDEOS_REQUEST || VIDEO_DETAIL_REQUEST:
			return { ...state, loading: true };
		case VIDEOS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				videoList: action.payload,
				error: null,
			};
		case VIDEOS_GET_FAILED:
			return { ...state, loading: false, error: action.payload };
		case VIDEO_DETAIL_SUCCESS:
			return { ...state, loading: false, currentVideo: action.payload };
		case VIDEO_DETAIL_FAILED:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
