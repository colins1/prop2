import React from 'react';

function Listing ({items}) {
    return (
        <div className="item-list">
            {items.data.map( (itm) => <div className="item">
                <div className="item-image">
                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                    <img src={itm.MainImage.url_570xN}/>
                </a>
                </div>
                <div className="item-details">
                <p className="item-title">{itm.title}</p>
                <p className="item-price">$3.99</p>
                <p className="item-quantity level-medium">12 left</p>
                </div>
            </div>)}
        </div>

    );
}

/*listing_id — уникальный идентификатор предложения, число;
url — ссылка на предложение, строка;
MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
title — название предложения, строка;
currency_code — код валюты, строка;
price — цена, строка;
quantity — доступное количество, число.
*/

export default Listing