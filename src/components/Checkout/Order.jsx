import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { OrderItem } from './OrderItem';
import '@styles/Checkout/Order.scss';

const Order = ({cart, changeAmount, removeItem}) => {
  return (
    <section className="order">
        {cart.length === 0 &&
            <div className="order__empty">
                <p className="order__empty--message">You haven't added any item to your cart. 
                    <br /><br />
                    <a href="/electric-guitars" className="order__empty--message__link">Browse our shop</a> and pick whatever you like. Those items will appear here once you have added them to the cart.
                </p>
            </div>
        }
        <div className="order__scroll">
            <AnimatePresence>
                {cart.map(product => (
                    <motion.div
                        layout
                        key={`${product.id}-Order`}
                        initial={{ opacity: 0, x: -250 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0.2,
                                x: -250
                            }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="order__content--items"
                    >
                        <OrderItem
                            removeItem={removeItem}
                            changeAmount={changeAmount}
                            product={product}
                            key={`orderItem-${product.id}`}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    </section>
  )
}

export {Order}