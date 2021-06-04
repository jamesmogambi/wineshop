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
        case 'INCREMENT_ITEM':
            return state.map((cartItem) => {
                if (cartItem.no === action.no) {
                    let itemCost = action.pkg === "case" ? cartItem.cost.case : cartItem.cost.bottle;
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1,
                        total: cartItem.total + itemCost
                    };
                } else {
                    return cartItem;
                };
            });
        case 'DECREMENT_ITEM':
            return state.map((cartItem) => {
                if (cartItem.no === action.no) {
                    let itemCost = action.pkg === "case" ? cartItem.cost.case : cartItem.cost.bottle;
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1,
                        total: cartItem.total - itemCost
                    };
                } else {
                    return cartItem;
                };
            });
        case 'REMOVE_ITEM':
            return state.filter(({ no }) => no !== action.no);
        case 'EMPTY_CART':
            return [];

        default:
            return state;
    }
};
