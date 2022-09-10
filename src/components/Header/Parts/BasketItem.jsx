import React from 'react';
import '@styles/Header/BasketItem.scss';
import trash from '@icons/trash.svg';

const BasketItem = ({product}) => {
  return (
    <div className="basket__card">
        <div className="basket__card--item">
            <img src={product.image} alt={product.alt} className="basket__card--item__image"/>
            <div className="basket__card--item__details">
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <span className="basket__card--item__quantity">quantity</span>
            </div>
        </div>
        <div className="basket__card--trash">
            <img src={trash} alt="delete item" className="basket__card--trash__image"/>
        </div>
    </div>
  )
}

export {BasketItem}