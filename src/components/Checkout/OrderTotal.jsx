import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import '@styles/Checkout/OrderTotal.scss';
import paypal from '@icons/paypal.svg';
import card from '@icons/credit-card.svg';
import x from '@icons/x_icon.svg';

const OrderTotal = ({price, cart, addOrders, setCart}) => {

  const [payed, setPayed] = React.useState(false);
  const [emptyCheckout, setEmptyCheckout] = React.useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();

    if(cart.length === 0){   
      setEmptyCheckout(true);
    } else {
      setPayed(!payed);
    }
  }

  const onTogglePayed = () => {
    setPayed(!payed);
  }
  const onToggleEmptyCheckout = () => {
    setEmptyCheckout(!emptyCheckout);
  }

  const handleCheckout = (payload) => {
    addOrders(payload)
    setTimeout(() => {
      setCart([])
    }, 0)
  }

  return (
    <section className="total">

        <div className="total__container">
          <div className="total__container--price">
            <p className="total__container--price__subtotal">Shipping:</p>
            <p className="total__container--price__subtotal">0$ USD</p>
          </div>
          <div className="total__container--price">
            <p className="total__container--price__subtotal">Subtotal:</p>
            <p className="total__container--price__subtotal">{price}$ USD</p>
          </div>
          <div className="total__container--price">
            <p className="total__container--price__total">Total:</p>
            <p className="total__container--price__total">{price}$ USD</p>
          </div>
        </div>

        <form className="payment" onSubmit={handleSubmit}>
          <div className="payment__wrapper">
            <label className="payment__title">Select payment method:</label>
            <section className="payment__methods">
              <div className="payment__container">
                <label className="payment__container--option">
                  <div className="payment__container--information">
                    <img src={paypal} alt="paypal logo" className="payment__container--image"/>
                    PayPal
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    className="checkbox"
                    required
                  />
                </label>
              </div>
              <div className="payment__container">
                <label className="payment__container--option">
                  <div className="payment__container--information">
                    <img src={card} alt="credit card icon" className="payment__container--image"/>
                    Credit card / Debit card
                  </div>                
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    className="checkbox"
                    required
                  />
                </label>
              </div>
            </section>
          </div>
          
          <input type="submit" value="Make payment" className="payment__submit" onClick={() => handleCheckout(cart)}/>
        </form>

        <AnimatePresence>
          {payed &&
          <motion.div 
            key="background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2,
              transition: {duration: 0.3}
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="modal__background"
          >
            <motion.div 
              key="modal"
              initial={{ opacity: 0, scale: "0%", x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: "100%", x: "-50%", y: "-50%" }}
              exit={{ opacity: 0.2,
                      scale: "0%", x: "-50%", y: "-50%",
                      transition: {duration: 0.3}
                  }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="modal"
            >
              <div className="modal__x">
                <img src={x} alt="close" className="modal__x--image" onClick={onTogglePayed}/>
              </div>
                <h3 className="modal__title">Thanks for your purchase!</h3>
                <p className="modal__message">You can see the orders you have placed in the "<a href="/orders" className="modal__message--link">my orders</a>" page. Click the link to see what you have bought.
                </p>
            </motion.div>
          </motion.div>
          }
        </AnimatePresence>

        <AnimatePresence>
          {emptyCheckout &&
          <motion.div 
            key="empty__background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2,
              transition: {duration: 0.3}
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="modal__background"
          >
            <motion.div 
              key="empty__modal"
              initial={{ opacity: 0, scale: "0%", x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: "100%", x: "-50%", y: "-50%" }}
              exit={{ opacity: 0.2,
                      scale: "0%", x: "-50%", y: "-50%",
                      transition: {duration: 0.3}
                  }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="modal"
            >
              <div className="modal__x">
                <img src={x} alt="close" className="modal__x--image" onClick={onToggleEmptyCheckout}/>
              </div>
                <h3 className="modal__title">You have no items in cart</h3>
                <p className="modal__message">Sorry, but you haven't added any item to your cart, if you want to buy a product, please add it to your cart, proceed to the checkout page and finally make the payment.
                </p>
            </motion.div>
          </motion.div>
          }
        </AnimatePresence>
    </section>
  )
}

export {OrderTotal}