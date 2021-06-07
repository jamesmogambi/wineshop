// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_PRICE
export const sortByPrice = () => ({
  type: 'SORT_BY_PRICE'
});


// SET_END_DATE
export const clearFilters = () => ({
  type: 'CLEAR_FILTERS',
});
