import { DATA_LOADED, FILTER_BY_COMMENTS } from './constants';


const initialState = {
  currentFilter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADED:
    	const sortedImages = action.data.data.children
    		.sort((a,b) => (a.data.num_comments > b.data.num_comments) ? 1 : ((b.data.num_comments > a.data.num_comments) ? -1 : 0));

      return {
      	...state,
      	data: sortedImages,
        filteredData: sortedImages,
      };
    case FILTER_BY_COMMENTS:
      return {
        ...state,
        filteredData: state.data.filter((image) => image.data.num_comments >= action.value),
        currentFilter: action.value,
      }
    default:
      return state;
  };
}