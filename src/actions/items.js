
// SET_ITEMS
export const setItems = (payload) => ({
    type: "SET_ITEMS",
    payload,
});

// ERROR
export const error = (payload) => ({
    type: "ERROR",
    payload,
});

// Fetch items from data source
export const getItems = () => {
    return (dispatch) => {
        fetch("https://storage.googleapis.com/wineshop-assets/wine-shop.json", {
            method: "GET",

        })
            .then((res) => res.json())
            .then((res) => {
                dispatch(setItems(res));
            })
            .catch((err) => {
                dispatch(error(err));
                console.error(err);
            });
    };
};
