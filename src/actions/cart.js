
// ADD_ITEM
export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

// UPDATE_ITEM
export const updateItem = (no, updates) => ({
    type: 'UPDATE_ITEM',
    no,
    updates
});


// EMPTY_CART
export const emptyCart = () => ({
    type: 'EMPTY_CART'
});


// modify cart
export const startAddItem = (item) => {
    return (dispatch, getState) => {
        const cart = getState().cart;
        // check if item exists in the cart
        const itemCheck = cart.find((cartItem) => cartItem.no === item.no);

        if ( typeof itemCheck === 'object' && itemCheck !== null) {
            // check the package - if case or bottle to make sure
            // the package type is as same as item that is to be updated
            if (itemCheck.pkg === item.pkg) {
                const newQuantity = itemCheck.quantity + item.quantity;
                const newTotal = itemCheck.total + item.total;
                dispatch(updateItem(item.no,{
                    ...item,
                    quantity: newQuantity,
                    total: newTotal
                }));
                              
           } else {
                   alert(`Choose appropriate package that was added to cart.`);
           }
            
        } else {
            dispatch(addItem(item));
        }

    };
};
