import React from 'react';
import { connect } from 'react-redux'
import { setTextFilter, sortByPrice, sortByVintage, clearFilters } from '../actions/filters';

export class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onTextChange = (tag) => {
        this.props.setTextFilter(tag);
    };

    onSortChange = (value) => {
        if (value === 'vintage') {
            this.props.sortByVintage();
        } else if (value === 'price') {
            this.props.sortByPrice();
        }
    };

    clearFilters = () => {
        this.props.clearFilters();

    };
    render() {
        return (
            <div className="section__filters">
                <div className="show">
                    <span className="show__me">Show me</span>
                    <span className="show__all" onClick={() => { this.clearFilters() }} >Show All</span>
                </div>
                <div className="tags">
                    {
                        this.props.tags.map((tag, i) => (
                            <button
                                key={i}
                                className="tags__el"
                                onClick={() => { this.onTextChange(tag) }}
                            > {tag} </button>
                        ))
                    }
                </div>
                <div className="order">
                    <span className="order__text">Order by:</span>
                    <button className="order__el" onClick={() => { this.onSortChange('price') }}> Price </button>
                    <button className="order__el" onClick={() => { this.onSortChange('vintage') }}> Vintage </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByVintage: () => dispatch(sortByVintage()),
    sortByPrice: () => dispatch(sortByPrice()),
    clearFilters: () => dispatch(clearFilters()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);


