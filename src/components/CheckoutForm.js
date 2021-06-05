import React from 'react';

export default class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            notes: '',
            cardName: '',
            cardNumber: '',
            expMonth: '',
            expYear: '',
            cvv: '',
            error: ''

        };
    }

    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(() => ({ ...state, [name]: value }));
    };


    onSubmit = (e) => {
        e.preventDefault();
        const { fullName, phone, address, city, state, zip, notes, cardName, cardNumber, expMonth, expYear, cvv, error } = this.state;
        if (!fullName || !phone || !address || !city || !state || !zip || !notes || !cardName || !cardNumber || !expMonth || !expYear || !cvv) {
            this.setState(() => ({ error: 'Please fill all the fields.' }));
            alert('Please fill all the fields.');
        } else {
            console.log("Checkout...onsubmit")
        }
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div className="row">
                        <div className="col-50">
                            <h3>Billing Address</h3>
                            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                            <input type="text" id="fname" name="fullName" placeholder="John M. Doe"
                                value={this.state.fullName}
                                onChange={this.onChange}
                            />
                            <label htmlFor="phone"><i className="fa fa-phone-square "></i> Phone</label>
                            <input type="text" id="phone" name="phone" placeholder="+254700 000 000"
                                value={this.state.phone}
                                onChange={this.onChange}
                            />
                            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"
                                value={this.state.address}
                                onChange={this.onChange}
                            />
                            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                            <input type="text" id="city" name="city" placeholder="New York"
                                value={this.state.city}
                                onChange={this.onChange}
                            />

                            <div className="row">
                                <div className="col-50">
                                    <label htmlFor="state">State</label>
                                    <input type="text" id="state" name="state" placeholder="NY"
                                        value={this.state.state}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="col-50">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" id="zip" name="zip" placeholder="10001"
                                        value={this.state.zip}
                                        onChange={this.onChange}
                                    />
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
                            <input type="text" id="cname" name="cardName" placeholder="John More Doe"
                                value={this.state.cardName}
                                onChange={this.onChange}
                            />
                            <label >Credit card number</label>
                            <input type="text" id="ccnum" name="cardNumber" placeholder="1111-2222-3333-4444"
                                value={this.state.cardNumber}
                                onChange={this.onChange}
                            />
                            <label >Exp Month</label>
                            <input type="text" id="expmonth" name="expMonth" placeholder="September"
                                value={this.state.expMonth}
                                onChange={this.onChange}
                            />
                            <div className="row">
                                <div className="col-50">
                                    <label >Exp Year</label>
                                    <input type="text" id="expyear" name="expYear" placeholder="2018"
                                        value={this.state.expYear}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="col-50">
                                    <label >CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="352"
                                        value={this.state.cvv}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <label>
                        <div className="row">
                            <textarea className="delivery-notes" id="w3review" name="notes" placeholder="Delivery notes ...."
                                value={this.state.notes}
                                onChange={this.onChange}
                            ></textarea>
                        </div>
                        <input type="checkbox" checked="checked" name="sameadr" readOnly /> Shipping address same as billing
        </label>
                    <div className="row">
                        <button className=" checkout-btn" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
