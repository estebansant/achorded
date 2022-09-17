import React from 'react';
import '@styles/Header/BasketItem.scss';
import trash from '@icons/trash.svg';

const OrderItem = ({product, removeItem, changeAmount}) => {
  return (
    <div className="order__card">
        <div className="order__card--item">
            <img src={product.image} alt={product.alt} className="order__card--item__image"/>
            <div className="order__card--item__details">
                <h4>{product.title}</h4>
                <p>{product.price}$ USD</p>
                <div className="order__card--item__quantity">
                  <button
                    className="order__card--item__quantity--minus"
                    onClick={() => changeAmount(product, -1)}>
                      -
                  </button>
                  <span className="order__card--item__quantity--amount">{product.amount}</span>
                  <button
                    className="order__card--item__quantity--plus"
                    onClick={() => changeAmount(product, 1)}>
                      +
                  </button>
                </div>
            </div>
        </div>
        <div className="order__card--trash">
            <img
              src={trash}
              alt="delete item"
              className="order__card--trash__image"
              onClick={() => removeItem(product.id)}/>
        </div>
    </div>
  )
}

export {OrderItem}