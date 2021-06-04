// Cart Reducer

const cartReducerDefaultState = [];

export default (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ];
        case 'UPDATE_ITEM':
            console.log('update item', action.updates);

            return state.map((cartItem) => {
                if (cartItem.no === action.no) {
                    return {
                        ...cartItem,
                        ...action.updates
                    };
                } else {
                    return cartItem;
                };
            });
        case 'EMPTY_CART':
            return [];
           
        default:
            return state;
    }
};
