import React from 'react';
import '@styles/Header/BasketItem.scss';
import trash from '@icons/trash.svg';

const BasketItem = ({product, removeItem, changeAmount}) => {
  return (
    <div className="basket__card">
        <div className="basket__card--item">
            <img src={product.image} alt={product.alt} className="basket__card--item__image"/>
            <div className="basket__card--item__details">
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <div className="basket__card--item__quantity">
                  <button
                    className="basket__card--item__quantity--minus"
                    onClick={() => changeAmount(product, -1)}>
                      -
                  </button>
                  <span className="basket__card--item__quantity--amount">{product.amount}</span>
                  <button
                    className="basket__card--item__quantity--plus"
                    onClick={() => changeAmount(product, 1)}>
                      +
                  </button>
                </div>
            </div>
        </div>
        <div className="basket__card--trash">
            <img
              src={trash}
              alt="delete item"
              className="basket__card--trash__image"
              onClick={() => removeItem(product.id)}/>
        </div>
    </div>
  )
}

export {BasketItem}