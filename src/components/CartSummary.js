import React from 'react';
import { connect } from 'react-redux';
import { emptyCart } from '../actions/cart';
import { cartTotal, totalItems } from "../selectors/cartHelpers";


export class CartSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onEmptyCart = () => {
        this.props.emptyCart();
    };

    onClickCheckout = () => {
        this.props.history.push("/checkout");
    };
    render() {
        const { items, sumItems, totalPrice } = this.props;
        let txt = sumItems === 1 ? "Item" : "Items";
        return (
            <div className="section__cart">
                <div className="delivery">Cart Summary</div>
                <div className="quantity">
                    <span className="quantity__no">{items.length > 0 ? `${sumItems} ` : 'Empty'}</span>
                    <span className="quantity__txt">{items.length > 0 ? `${txt}` : 'Cart'}</span>
                </div>
                <div className="view" onClick={this.onClickCheckout}>
                    View Cart
              </div>
                <div className="total">
                    <span className="total__calc">Cart Subtotal</span>
                    {totalPrice > 0 && <span className="total__cash"> {`$${totalPrice} `}</span>}
                </div>
                <div className="btn">
                    <button className="btn__empty btn-inline" onClick={this.onEmptyCart}>Empty Cart</button>
                    <button className="btn__check btn-inline" onClick={this.onClickCheckout}>Check Out</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.cart,
    totalPrice: cartTotal(state.cart),
    sumItems: totalItems(state.cart)
});

const mapDispatchToProps = (dispatch) => ({
    emptyCart: () => dispatch(emptyCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
