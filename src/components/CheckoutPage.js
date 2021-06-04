import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions/items";
import Filters from './Filters'
import CheckoutForm from './CheckoutForm'
import ItemsList from './ItemsList'
import Cart from './Cart'
import selectItems from "../selectors/items";


export class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // componentWillMount() {
    //     this.props.getItems();
    // }

    render() {
        // console.log("render items", this.props.items)
        return (
            <div>
                <div className="checkout-container">
                    <CheckoutForm />
                    <Cart history={this.props.history} />
                </div>
                {/* /* <div className="section">
                    <Filters tags={this.state.tags} />
                    <CartSummary />
                </div>
        <ItemsList items={this.props.items} /> */ }
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

