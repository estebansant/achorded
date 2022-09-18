import React from 'react';
import '@styles/Checkout/Checkout.scss';

const Checkout = ({children}) => {
  return (
    <main className="checkout__main">
      <section className="checkout__container">
        {children}
      </section>
    </main>
  )
}

export {Checkout}