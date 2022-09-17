import React from 'react';
import '@styles/Checkout/Checkout.scss';

const Checkout = ({children}) => {
  return (
    <main>
      <section className='checkout__container'>
        {children}
      </section>
    </main>
  )
}

export {Checkout}