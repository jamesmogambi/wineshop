
// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: '',
 
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_PRICE':
      return {
        ...state,
        sortBy: 'price'
      };
    case 'SORT_BY_VINTAGE':
      return {
        ...state,
        sortBy: 'vintage'
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        text: '',
        sortBy: '',
      };
      default:
      return state;
  }
};
