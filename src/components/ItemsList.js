import React from "react";
import ItemsListItem from './ItemsListItem'

export const ItemsList = ({ items }) => {
    const removeDetails = (id) => {
        document.getElementById(`${id}`).style.display = "none";

    };
    const addDetails = (id) => {
        document.getElementById(`${id}`).style.display = "block";
    };

    return (
        <div className="shop">
            { items.length === 0 ? (
                <h1>Loading ...</h1>
            ) : (
                items.map((item, index) => (
                    <ItemsListItem
                        item={item}
                        key={index}
                        removeDetails={removeDetails}
                        addDetails={addDetails}
                    />
                ))
            )
            }
        </div>
    );
}
export default ItemsList;
