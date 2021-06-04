// Items Reducer
const initialState = {
    items: [],
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_ITEMS":
            // const { items } = action.payload;
            return {
                ...state,
                items: action.payload
            };
               case "ERROR":
            // const { items } = action.payload;
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
