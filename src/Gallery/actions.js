import { DATA_LOADED, FILTER_BY_COMMENTS } from './constants';

export const loadData = () => {
	return (dispatch) => {
		fetch('https://www.reddit.com/r/aww.json')
		  .then((response) => {
		    return response.json()
		  }).then((data) => {
		  	dispatch({
		  		type: DATA_LOADED,
		  		data,
		  	});
		  });
	}
};

export const filterByComments = (value) => {
	return {
		type: FILTER_BY_COMMENTS,
		value,
	};
};