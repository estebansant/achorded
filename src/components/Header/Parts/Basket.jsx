import React from 'react';
import { BasketItem } from './BasketItem';
import { motion, AnimatePresence } from "framer-motion";
import '@styles/Header/Basket.scss';
import x from '@icons/x_icon.svg';

const Basket = ({cart, onToggleBasket, price, changeAmount, removeItem}) => {

  return (
    <aside className="basket">
        <div className="x__container">
                <img src={x} alt="close" className="x__container--image" onClick={onToggleBasket}/>
            </div>
        <div className="basket__scroll">
            <div className="basket__header">
                <h4 className="basket__header--title">My Cart</h4>
            </div>
            <div className="basket__content">
                <AnimatePresence>
                    {cart.length === 0 &&
                        <motion.p
                            key="message"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0.2,
                                    y: "-120%",
                                    transition: {duration: 0.2}
                                }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="basket__content--message"
                        >
                            Your cart is empty. <br /><br /> Browse our catalogue, add the items that you like to your cart and start shopping!
                        </motion.p>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {cart.map(product => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: "130%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            exit={{ opacity: 0.2,
                                    x: "130%"
                                }}
                            transition={{ duration: 0.4, ease: "easeInOut" }} 
                        >
                            <BasketItem
                                removeItem={removeItem}
                                changeAmount={changeAmount}
                                product={product}
                                key={`basketItem-${product.id}`}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div className="basket__content--price">
                    <p>Total</p>
                    <p>{price}$ USD</p>
                </div>
                <a href="/checkout" className="basket__content--checkout">
                    <p>Go to Checkout</p>
                </a>
            </div>
        </div>
    </aside>
  )
}

export {Basket}