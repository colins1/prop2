import React from 'react';

function Listing ({items}) {
    return (
        <div className="item-list">
            {items.data.map( (itm) => itm.MainImage != undefined ? <div className="item">
                <div key={itm.listing_id} className="item-image">
                <a href={itm.url}>
                    <img src={itm.MainImage.url_570xN}/>
                </a>
                </div>
                <div className="item-details">
                <p className="item-title">{itm.title}</p>
                <p className="item-price">{itm.currency_code == 'USD' ?  `$${itm.price}` : itm.currency_code == 'EUR' ? `€${itm.price}` : `${itm.price} ${itm.currency_code}`}</p>
                <p className={itm.quantity > 20 ? "item-quantity level-high" : itm.quantity > 10 ? "item-quantity level-medium" : "item-quantity level-low"}>{itm.quantity} left</p>
                </div>
            </div> : "")}
        </div>

    );
}

export default Listing