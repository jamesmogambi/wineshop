// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_PRICE
export const sortByPrice = () => ({
  type: 'SORT_BY_PRICE'
});

// SORT_BY_VINTAGE
export const sortByVintage = () => ({
  type: 'SORT_BY_VINTAGE'
});

// SET_END_DATE
export const clearFilters = () => ({
  type: 'CLEAR_FILTERS',
});
