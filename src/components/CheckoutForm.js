import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
            <form >

                <div className="row">
                    <div className="col-50">
                        <h3>Billing Address</h3>
                        <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                        <label for="email"><i className="fa fa-phone-square "></i> Phone</label>
                        <input type="text" id="email" name="email" placeholder="+254700 000 000"/>
                                <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                                    <label for="city"><i className="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="New York"/>

                                        <div className="row">
                                            <div className="col-50">
                                                <label for="state">State</label>
                                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
                                                <div className="col-50">
                                                    <label for="zip">Zip</label>
                                                    <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
                            </div>
                           
                                            </div>

                                            <div className="col-50">
                                                <h3>Payment</h3>
                                                <label >Accepted Cards</label>
                                                <div className="icon-container">
                            <i className="fa fa-cc-visa" style={{ color: "navy" }} ></i>
                            <i className="fa fa-cc-amex" style={{ color: "blue" }} ></i>
                            <i className="fa fa-cc-mastercard" style={{ color: "red" }} ></i>
                            <i className="fa fa-cc-discover" style={{ color: "orange" }} ></i>
                                                </div>
                                                <label >Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                                                    <label >Credit card number</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                                                        <label >Exp Month</label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                                                            <div className="row">
                                                                <div className="col-50">
                                                                    <label >Exp Year</label>
                                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
                                                                    <div className="col-50">
                                                                        <label >CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
                                                                    </div>
                                                                </div> 

                                                            </div>
                    <label>
                        <div className="row">
                            <textarea className="delivery-notes" id="w3review" name="deliverynotes" placeholder="Delivery notes ...." ></textarea>
                        </div>
                            <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
                    <div className="row">
                        <button className=" checkout-btn" >Submit</button>

                    </div>

                        {/* <input type="submit" value="Continue to checkout" className="btn"/> */}
            </form>
            </div>
            // <form className="form" onSubmit={this.onSubmit}>
                                                                    //     {this.state.error && <p className="form__error">{this.state.error}</p>}
            //     <input
            //         type="text"
            //         placeholder="Description"
            //         autoFocus
            //         className="text-input"
            //         value={this.state.description}
            //         onChange={this.onDescriptionChange}
            //     />
            //     <input
            //         type="text"
            //         placeholder="Amount"
            //         className="text-input"
            //         value={this.state.amount}
            //         onChange={this.onAmountChange}
            //     />
            //     <SingleDatePicker
            //         date={this.state.createdAt}
            //         onDateChange={this.onDateChange}
            //         focused={this.state.calendarFocused}
            //         onFocusChange={this.onFocusChange}
            //         numberOfMonths={1}
            //         isOutsideRange={() => false}
            //     />
            //     <textarea
            //         placeholder="Add a note for your expense (optional)"
            //         className="textarea"
            //         value={this.state.note}
            //         onChange={this.onNoteChange}
            //     >
            //     </textarea>
            //     <div>
            //         <button className="button">Save Expense</button>
            //     </div>
            // </form>
        )
    }
}
