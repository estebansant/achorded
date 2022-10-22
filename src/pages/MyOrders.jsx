import React from 'react';
import '@styles/Orders/MyOrders.scss';

const MyOrders = ({orders, cart}) => {

  const[display, setDisplay] = React.useState(false);

  const handleItems = (index) =>{
    setDisplay(!display);
  }

  return (
    <main>
      <h1>My Orders</h1>
      {orders.map((acquired, index) => {
          return(
            <div key={index}>
              <h2>Order #{index + 1}</h2>
              <div>
                <p>Placed on {acquired.day} at {acquired.hour}</p>
                <p onClick={() => handleItems(index)}>Show items ({acquired.items.length})</p>
              </div>
              <div>
                <p>Cost: <br /> {acquired.amount}$ USD</p>
                <p>Payed with: {acquired.payment}</p>
              </div>
              {display &&
                orders.map((data) => data.items.map((bought, i) => {
                  return(
                    <div key={i}>
                      {bought.title}
                    </div>
                  )
                }))
              }
            </div>
          )
        })
      }
    </main>
  )
}

export {MyOrders}