import React from 'react';
import '@styles/Orders/MyOrders.scss';

const MyOrders = ({orders, cart}) => {
  return (
    <main>
      <h1>My Orders</h1>
      {orders.map((a, index) => {
          return(
            <div key={index}><h2>{a.title}</h2></div>
          )
        })
      }
    </main>
  )
}

export {MyOrders}