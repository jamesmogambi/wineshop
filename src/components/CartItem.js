import React from "react";

export const CartItem = ({ item, incrementItem, decrementItem, removeItem }) => {
    let { no, name, image, pkg, quantity, total } = item;
    let totalPrice = Math.round((total + Number.EPSILON) * 100) / 100;
    return (
        <div className="cart-item">
            <div className="buttons">
                <span className="delete-btn" onClick={() => removeItem(no)}>
                    <img src="images/remove.svg" alt="" />
                </span>
                <span className="like-btn"></span>
            </div>
            <div className="cart-image">
                <img height="100%" src={`https://storage.googleapis.com/wineshop-assets/wine-bottles/${image}`} alt={`${name}`} />
            </div>
            <div className="description">
                <span>{name}</span>
                <span>{pkg}</span>
            </div>
            <div className="item-quantity">
                <button className="plus-btn cart-btn" type="button" name="button" onClick={() => incrementItem(no, pkg)}>
                    <img src="images/plus.svg" alt="" />
                </button>
                <input value={quantity} readOnly/>
                <button className="minus-btn cart-btn" type="button" name="button" onClick={() => decrementItem(no, pkg)}>
                    <img src="images/minus.svg" alt="" />
                </button>
            </div>
            <div className="total-price">{`$${totalPrice}`}</div>
        </div>
    );
}
export default CartItem;
