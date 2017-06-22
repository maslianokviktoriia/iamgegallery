import { combineReducers } from 'redux';

import galleryReducer from './Gallery/reducer';

export default combineReducers({
	gallery: galleryReducer,
});