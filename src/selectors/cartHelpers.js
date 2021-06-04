export const cartTotal = (items) => {
    let initialValue = 0
    let sum = items.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.total
    }, initialValue);
    let totalPrice = Math.round((sum + Number.EPSILON) * 100) / 100;
    return totalPrice;
};

export const totalItems = (items) => {
    let initialValue = 0
    let sum = items.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.quantity
    }, initialValue);
    let result = Math.round((sum + Number.EPSILON) * 100) / 100;
    return result;
};
