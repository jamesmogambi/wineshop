import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions/items";
import { incrementItem, decrementItem, removeItem } from "../actions/cart";
import CartItem from './CartItem'
import { cartTotal } from '../selectors/cartHelpers'


export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    onClickIncrement = (no, pkg) => {
        this.props.incrementItem(no, pkg);
    };
    onClickDecrement = (no, pkg) => {
        this.props.decrementItem(no, pkg);
    };
    onRemoveItem = (no) => {
        this.props.removeItem(no);
    };

    onClickBack = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="shopping-cart">
                <div className="title">
                    Shopping Bag
  </div>
                { this.props.cart.length === 0 ? (
                    <div className="cart-alert">Your Cart is empty</div>
                ) : (
                    this.props.cart.map((item, i) => {
                        if (item.quantity !== 0) {
                            return <CartItem
                                item={item}
                                key={i}
                                incrementItem={this.onClickIncrement}
                                decrementItem={this.onClickDecrement}
                                removeItem={this.onRemoveItem}
                            />
                        }

                    })
                )
                }

                <div className="title grand-total" >
                    <span> {`Total $${this.props.totalPrice}`}</span>
                    <button className="btn-detail" onClick={this.onClickBack}>Back</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getItems: () => dispatch(getItems()),
    incrementItem: (no, pkg) => dispatch(incrementItem(no, pkg)),
    decrementItem: (no, pkg) => dispatch(decrementItem(no, pkg)),
    removeItem: (no) => dispatch(removeItem(no)),
});

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        totalPrice: cartTotal(state.cart),
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

