import React from 'react';

function kitcut(text, limit) {
    text = text.trim();
    if( text.length <= limit) return text;
    text = text.slice(0, limit);
    return text.trim() + "...";
}

function Listing ({items}) {
    return (
        <div className="item-list">
            {items.data.map( (itm) => itm.MainImage !== undefined ? <div className="item">
                <div key={itm.listing_id} className="item-image">
                <a href={itm.url}>
                    <img src={itm.MainImage.url_570xN} alt=""/>
                </a>
                </div>
                <div className="item-details">
                <p className="item-title">{kitcut(itm.title, 50)}</p>
                <p className="item-price">{itm.currency_code === 'USD' ?  `$${itm.price}` : itm.currency_code === 'EUR' ? `€${itm.price}` : `${itm.price} ${itm.currency_code}`}</p>
                <p className={itm.quantity > 20 ? "item-quantity level-high" : itm.quantity > 10 ? "item-quantity level-medium" : "item-quantity level-low"}>{itm.quantity} left</p>
                </div>
            </div> : "")}
        </div>

    );
}

export default Listing