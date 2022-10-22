import React from 'react';
import '@styles/Orders/MyOrders.scss';

const MyOrders = ({orders, cart}) => {

  return (
    <main>
      <h1 className="main__title">My Orders</h1>
      {orders.map((bought, index) => {
          return(
            <div className="mymyorder" key={index}>
              <h2 className="myorder__title">Order #{index + 1}</h2>
              <div className="myorder__left">
                <p className="myorder__left--date">Placed on {bought.day} at {bought.hour}</p>
                <div className="myorder__left--items">
                  <input type="checkbox" className="myorder__left--items__checkbox"/>
                  <p className="myorder__left--items__text">Show items ({bought.items.length})</p>
                  <div className="myorder__products">
                    {bought.items &&
                        bought.items.map((item, i) => {
                          return(
                            <div key={i}>
                              {item.title}
                            </div>
                          )
                        })
                    }
                  </div>
                </div>
              </div>
              <div className="myorder__right">
                <p className="myorder__right--cost">Cost: <br /> {bought.amount}$ USD</p>
                <p className="myorder__right--payment">Payed with: {bought.payment}</p>
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export {MyOrders}