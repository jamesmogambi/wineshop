import React from "react";
import { connect } from 'react-redux';
import { startAddItem } from '../actions/cart';


// const ItemsListItem = (props) => {
//     const { no, name, image, cost, details } = props.item
//     const addDetails = (id) => {
//         document.getElementById(`${id}`).style.display = "block";
//     };
//     const removeDetails = (id) => {
//         document.getElementById(`${id}`).style.display = "none";
//     };

//     const addToCart = () => {
//         props.addItem(props.item)
//     };

//     return (
//         <div className="item">
//             <div id={`${no}`} className="detailedDiv">
//                 <span className="detailedDiv__details">{details}</span>
//                 <button className="detailedDiv__back" onClick={() => removeDetails(no)}>Back</button>
//             </div>
//             <img className="item__image" src={`https://storage.googleapis.com/wineshop-assets/wine-bottles/${image}`} alt={`${name}`} />
//             <div className="content">
//                 <span className="content__brandno">{no}</span>
//                 <span className="content__brandname">{name}</span>
//                 <span className="content__pricing">
//                     <div className="inputs bottle">
//                         <span className="inputs__text">Bottle</span>
//                         <span className="inputs__price">${cost.bottle}</span>
//                         <span className="inputs__form">
//                             <input className="form" /> QTY
//                         </span>
//                     </div>
//                     <div className="inputs case">
//                         <span className="inputs__text">Case</span>
//                         <span className="inputs__price">${cost.case}</span>
//                         <span className="inputs__form">
//                             <input className="form"  /><span> QTY</span>
//                         </span>
//                     </div>
//                 </span>
//                 <span className="content__btns">
//                     <button className="btn-detail" onClick={() => addDetails(no)}>Details</button>
//                     <button className="btn-add" onClick={() => addToCart()}>Add To Cart</button>
//                 </span>
//             </div>
//         </div>
//     )
// };


export class ItemsListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pkg: '',
            bottleQty: '',
            caseQty: '',
        };
    }


    onCaseChange = (e) => {
        const pkg = e.target.name;
        const qty = e.target.value;
            this.setState(() => ({ caseQty: qty , pkg, bottleQty: '' }));
    };
    onBottleChange = (e) => {
        const pkg = e.target.name;
        const qty = e.target.value;
        this.setState(() => ({ bottleQty: qty , pkg, caseQty: '' }));
    };


    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
  
    addToCart = () => {
        let quantity, total, price;

        if (this.state.pkg === 'case') {
            quantity = this.state.caseQty > 0 ? parseInt(this.state.caseQty)  : 1;
            price = this.props.item.cost.case * quantity;
            total = Math.round((price + Number.EPSILON) * 100) / 100;

        } else {
            quantity = this.state.bottleQty > 0 ? parseInt(this.state.bottleQty ) : 1;
            price = this.props.item.cost.bottle * quantity;
            total = Math.round((price + Number.EPSILON) * 100) / 100;
        }
        let item = {
            ...this.props.item,
            pkg: this.state.pkg ? this.state.pkg : "bottle",
            quantity,
            total,
            // cost: undefined

        }
        console.log('item to be added', item);
        // this.props.addItem(item)
        this.props.startAddItem(item)

    };
    render() {
        const { no, name, image, cost, details } = this.props.item
        console.log('state', this.state)

        return (
            <div className="item" >
                <div id={`${no}`} className="detailedDiv" ref={this.setDetailedDivRef}>
                    <span className="detailedDiv__details">{details}</span>
                    <button className="detailedDiv__back" onClick={() => this.props.removeDetails(no)} >Back</button>
                </div>
                <img className="item__image" src={`https://storage.googleapis.com/wineshop-assets/wine-bottles/${image}`} alt={`${name}`} />
                <div className="content">
                    <span className="content__brandno">{no}</span>
                    <span className="content__brandname">{name}</span>
                    <span className="content__pricing">
                        <div className="inputs bottle">
                            <span className="inputs__text">Bottle</span>
                            <span className="inputs__price">${cost.bottle}</span>
                            <span className="inputs__form">
                                <input className="form" name="bottle"
                                    value={this.state.bottleQty}
                                    onChange={this.onBottleChange}
                                /> QTY
                        </span>
                        </div>
                        <div className="inputs case">
                            <span className="inputs__text">Case</span>
                            <span className="inputs__price">${cost.case}</span>
                            <span className="inputs__form">
                                <input className="form" name="case"
                                    value={this.state.caseQty}
                                    onChange={this.onCaseChange} /><span> QTY</span>
                            </span>
                        </div>
                    </span>
                    <span className="content__btns">
                        <button className="btn-detail" onClick={() => this.props.addDetails(no)}  >Details</button>
                        <button className="btn-add" onClick={this.addToCart} >Add To Cart</button>
                    </span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddItem: (item) => dispatch(startAddItem(item))
    }
};

export default connect(undefined, mapDispatchToProps)(ItemsListItem);
