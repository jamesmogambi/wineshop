import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions/items";
import Filters from './Filters'
import CartSummary from './CartSummary'
import ItemsList from './ItemsList'
import selectItems from "../selectors/items";


export class ItemsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['White', 'Red', 'Sparkling'],
        };
    }
    componentWillMount() {
        this.props.getItems();
    }

    render() {
        return (
            <div>
                <div className="section">
                    <Filters tags={this.state.tags} />
                    <CartSummary history={this.props.history} />
                </div>
                <ItemsList items={this.props.items} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getItems: () => dispatch(getItems()),
});

const mapStateToProps = (state) => {
    return {
        items: selectItems(state.items.items, state.filters),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);

