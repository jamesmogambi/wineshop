import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions/items";
import CheckoutForm from './CheckoutForm'
import Cart from './Cart'
import selectItems from "../selectors/items";


export class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <div className="checkout-container">
                    <CheckoutForm />
                    <Cart history={this.props.history} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getItems: () => dispatch(getItems()),
});

const mapStateToProps = (state) => {
    console.log(selectItems(state.items.items, state.filters))
    return {
        items: selectItems(state.items.items, state.filters),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);

