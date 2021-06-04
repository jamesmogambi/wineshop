import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions/items";
import Filters from './Filters'
import CartSummary from './CartSummary'
import ItemsList from './ItemsList'
import selectItems from "../selectors/items";


export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['White', 'Red', 'Sparkling'],
        };
    }
    // componentWillMount() {
    //     this.props.getItems();
    // }
    onClickBack = () => {
        this.props.history.push("/");
       
    };
    render() {
        // console.log("render items", this.props.items)
        return (
            <div className="shopping-cart">
                {/* <!-- Title --> */}
                <div className="title">
                    Shopping Bag
  </div>

                {/* <!-- Product #1 --> */}
                <div className="cart-item">
                    <div className="buttons">
                        <span className="delete-btn">
                            <img src="images/remove.svg" alt="" />
                        </span>
                        <span className="like-btn"></span>
                    </div>
                    <div className="cart-image">
                        <img src="images/hunters.png" height="100%" alt="" />
                    </div>

                    <div className="description">
                        <span>Common Projects</span>
                        {/* <span>Bball High</span> */}
                        <span>White</span>
                    </div>

                    <div className="item-quantity">
                        <button className="plus-btn cart-btn" type="button" name="button">
                            <img src="images/plus.svg" alt="" />
                        </button>
                        <input value="1"></input>
                        <button className="minus-btn cart-btn" type="button" name="button">
                            <img src="images/minus.svg" alt="" />
                        </button>

                    </div>

                    <div className="total-price">$549</div>
                </div>

                {/* <!-- Product #2 --> */}
                <div className="cart-item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                        <span className="like-btn"></span>
                    </div>

                    <div className="image">
                        <img src="/hunters.png" alt="" />
                    </div>

                    <div className="description">
                        <span>Maison Margiela</span>
                        <span>Future Sneakers</span>
                        <span>White</span>
                    </div>

                    <div className="item-quantity">
                        <button className="plus-btn" type="button" name="button">
                            <img src="plus.svg" alt="" />
                        </button>
                        <input type="text" name="name" value="1" />
                        <button className="minus-btn" type="button" name="button">
                            <img src="minus.svg" alt="" />
                        </button>
                    </div>

                    <div className="total-price">$870</div>
                </div>

                {/* <!-- Product #3 --> */}
                <div className="cart-item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                        <span className="like-btn"></span>
                    </div>

                    <div className="image">
                        <img src="item-3.png" alt="" />
                    </div>

                    <div className="description">
                        <span>Our Legacy</span>
                        <span>Brushed Scarf</span>
                        <span>Brown</span>
                    </div>

                    <div className="item-quantity">
                        <button className="plus-btn" type="button" name="button">
                            <img src="plus.svg" alt="" />
                        </button>
                        <input type="text" name="name" value="1" />
                        <button className="minus-btn" type="button" name="button">
                            <img src="minus.svg" alt="" />
                        </button>
                    </div>

                    <div className="total-price">$349</div>
                </div>

                {/* <!-- Product #4 --> */}
                <div className="cart-item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                        <span className="like-btn"></span>
                    </div>

                    <div className="image">
                        <img src="item-1.png" alt="" />
                    </div>

                    <div className="description">
                        <span>Common Projects</span>
                        <span>Bball High</span>
                        <span>White</span>
                    </div>

                    <div className="item-quantity">
                        <button className="plus-btn" type="button" name="button">
                            <img src="plus.svg" alt="" />
                        </button>
                        <input type="text" name="name" value="1" />
                        <button className="minus-btn" type="button" name="button">
                            <img src="minus.svg" alt="" />
                        </button>
                    </div>

                    <div className="total-price">$549</div>

                </div>

                {/* <!-- Product #1 --> */}
                <div className="cart-item">
                    <div className="buttons">
                        <span className="delete-btn">
                            <img src="images/remove.svg" alt="" />
                        </span>
                        <span className="like-btn"></span>
                    </div>
                    <div className="cart-image">
                        <img src="images/hunters.png" height="100%" alt="" />
                    </div>

                    <div className="description">
                        <span>Common Projects</span>
                        <span>Bball High</span>
                        <span>White</span>
                    </div>

                    <div className="item-quantity">
                        <button className="plus-btn cart-btn" type="button" name="button">
                            <img src="images/plus.svg" alt="" />
                        </button>
                        <input value="1"></input>
                        <button className="minus-btn cart-btn" type="button" name="button">
                            <img src="images/minus.svg" alt="" />
                        </button>

                    </div>

                    <div className="total-price">$549</div>
                </div>
                <div className="title grand-total" >
                    {/* <div >
                        Total : $549</div> */}
                    <span> Total : $549</span>
                    <button className="btn-detail" onClick={this.onClickBack}>Back</button>

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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

