import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer } from './reducers/userReducers';
import { videosReducer } from './reducers/videosReducers';

const reducers = combineReducers({
	userLogin: userLoginReducer,
	videos: videosReducer,
});

const initialState = {
	userLogin: {},
	videos: {},
};

const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
