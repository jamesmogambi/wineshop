// Items Reducer
const initialState = {
    items: [],
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_ITEMS":
            return {
                ...state,
                items: action.payload
            };
               case "ERROR":
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
