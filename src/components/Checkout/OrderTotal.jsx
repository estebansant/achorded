import React from 'react';
import '@styles/Checkout/OrderTotal.scss';
import paypal from '@icons/paypal.svg';
import card from '@icons/credit-card.svg';

const OrderTotal = ({price}) => {

  return (
    <section className="total">

        <div className="total__container">
          <div className="total__container--price">
            <p>Shipping:</p>
            <p>0$ USD</p>
          </div>
          <div className="total__container--price">
            <p>Subtotal:</p>
            <p>{price}$ USD</p>
          </div>
          <div className="total__container--price">
            <p>Total:</p>
            <p>{price}$ USD</p>
          </div>
        </div>

        <form className="payment">
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
          
          <input type="submit" value="Make payment" className="payment__submit"/>
        </form>
    </section>
  )
}

export {OrderTotal}