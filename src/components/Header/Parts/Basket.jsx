import React from 'react';
import { BasketItem } from './BasketItem';
import '@styles/Header/Basket.scss';
import x from '@icons/x_icon.svg';

const Basket = ({cart, onToggleBasket, price, changeAmount, removeItem}) => {

  return (
    <aside className="basket">
        <div className="basket__scroll">
            <div className="x__container">
                <img src={x} alt="close" className="x__container--image" onClick={onToggleBasket}/>
            </div>
            <div className="basket__header">
                <h4 className="basket__header--title">My Cart</h4>
            </div>
            <div className="basket__content">
                {cart.map(product => (
                    <BasketItem
                        removeItem={removeItem}
                        changeAmount={changeAmount}
                        product={product}
                        key={`basketItem-${product.id}`}
                    />
                ))}
                <div className="basket__content--order">
                    <p>Total</p>
                    <p>{price}$ USD</p>
                </div>
                <button className="basket__content--checkout">
                    <a href="/checkout">
                        Go to Checkout
                    </a>
                </button>
            </div>
        </div>
    </aside>
  )
}

export {Basket}