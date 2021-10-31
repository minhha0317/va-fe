import axios from 'axios';
import {
	VIDEOS_GET_FAILED,
	VIDEOS_GET_SUCCESS,
	VIDEOS_REQUEST,
	VIDEO_DETAIL_FAILED,
	VIDEO_DETAIL_REQUEST,
	VIDEO_DETAIL_SUCCESS,
} from '../actionTypes';

export const getPublicVideos = () => async (dispatch) => {
	try {
		dispatch({ type: VIDEOS_REQUEST });
		const res = await axios.get('/api/videos');
		dispatch({ type: VIDEOS_GET_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({
			type: VIDEOS_GET_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getPublicVideoDetail = (videoId) => async (dispatch) => {
	try {
		dispatch({ type: VIDEO_DETAIL_REQUEST });
		const res = await axios.get(`/api/videos/${videoId}`);
		dispatch({ type: VIDEO_DETAIL_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({
			type: VIDEO_DETAIL_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
