import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { OrderItem } from './OrderItem';
import '@styles/Checkout/Order.scss';

const Order = ({cart, changeAmount, removeItem}) => {
  return (
    <section className="order">
        <AnimatePresence>
            <motion.div
                layout
                className="order__content--items"
            >
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
            </motion.div>
        </AnimatePresence>
    </section>
  )
}

export {Order}