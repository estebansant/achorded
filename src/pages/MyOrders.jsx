import React from 'react';
import '@styles/Orders/MyOrders.scss';
import { motion, AnimatePresence } from "framer-motion";
import arrow from '@icons/chevron_down.svg';

const MyOrders = ({orders}) => {

  const[display, setDisplay] = React.useState(false);

  const handleDisplay = (id) => {
    setDisplay({[id]: !display[id]})
  }

  return (
    <main>
      <section className="main__section--wrapper">        
        <h1 className="main__title">My Orders</h1>
        <section className="myorder__wrapper">
          {orders.length === 0 &&
            <p className="myorder__message">You haven't placed any order yet. <br /><br /> The items that you buy will appear on this page, once the payment process is completed.</p>
          }
          <AnimatePresence>
          {orders.map((bought, index) => {
            return(
              <div className="myorder" key={index}>
                <h2 className="myorder__title">Order #{index + 1}</h2>

                <div className="myorder__content--container">

                  <div className="myorder__left">
                    <p className="myorder__left--date"><strong>Placed on</strong> {bought.day} at {bought.hour}</p>
                    <div className="myorder__left--items" onClick={() => handleDisplay(index)}>
                      <img src={arrow} alt="arrow down" className="myorder__left--items__arrow"/>
                      <p className="myorder__left--items__text">Show items ({bought.items.length})</p>
                    </div>
                  </div>

                  <div className="myorder__right">
                    <p className="myorder__right--content"><strong>Total cost:</strong> <br /> {bought.amount}$ USD</p>
                    <p className="myorder__right--content"><strong>Payed with:</strong> <br />{bought.payment}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {display[index] &&
                    <motion.div 
                      layout
                      key={index}
                      initial={{ opacity: 0, x: "-50%" }}
                      animate={{ opacity: 1, x: "0%" }}
                      exit={{ opacity: 0.2, x: "-50%"}}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="myorder__left--items__products"
                    >
                      {bought.items.map((item, i) => {
                        return(
                          <div key={i} className="product__card">
                            <img src={item.image} alt={item.alt} className="product__card--image"/>
                            <div className="product__card--content">
                              <h4 className="product__card--content__title">{item.title}</h4>
                              <p className="product__card--content__text">{item.price}$ USD</p>
                              <p className="product__card--content__text">{item.amount}
                                {item.amount===1 &&
                                " unit"
                                }
                                {item.amount>1 &&
                                " units"
                                }
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
              )
            })
          }
          </AnimatePresence>
        </section>
      </section>
    </main>
  )
}

export {MyOrders}