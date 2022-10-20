import React from 'react';
import '@styles/ProductDisplay/ElectricDisplay.scss';
import { motion, AnimatePresence } from "framer-motion";
import addShoppingCart from '@icons/shopping_cart_add.svg';
import checkShoppingCart from '@icons/shopping_cart_check.svg';

const ElectricDisplay = ({ addToCart, added, addItem }) => {

  const onHandleCart = item => {
    addToCart(item)
  }
  
  const ElectricData = added.filter(object => object.id <= 10)
  
  return (
    <React.Fragment>
      <section className="display">
        <h1 className="display__title">Shop for Electric Guitars.</h1>

        <section className="display__grid">
          {ElectricData.map((card, index) => {
                    return(
                        <div className="grid__card" key={index}>

                          <a href={card.link} className="grid__card--link">
                                <img className="grid__card--image"src={card.image} alt={card.alt}/>                                

                                <div className="grid__card--description">
                                    <h3 className="grid__card--description__title">{card.title}</h3>

                                    <div className="grid__card--description__rating">
                                      <img className="grid__card--description__rating--image" src={card.stars} alt="rating" />
                                      <p className="grid__card--description__rating--value">{card.rating}</p>
                                    </div>

                                    <div className="grid__card--description__price">
                                      <p className="grid__card--description__price--content">{card.price}$ USD</p>
                                    </div>
                                </div>
                          </a>
                          <AnimatePresence>
                            {card.inCart &&
                              <motion.button
                                key={card.id}
                                initial={{ opacity: 0, y: "-50%" }}
                                animate={{ opacity: 1, y: "0%" }}
                                exit={{ opacity: 0.2,
                                        x: "120%",
                                        transition: {duration: 0.15}
                                    }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="grid__card--button__check"
                                onClick={() => {onHandleCart(card); addItem(card.id)}}
                              >
                                <img className="grid__card--button__image" src={checkShoppingCart} alt="add to shopping cart"/>
                              </motion.button>
                            }
                            {!card.inCart && 
                              <motion.button
                                key='a-{card.id}'
                                initial={{ opacity: 0, y: "50%" }}
                                animate={{ opacity: 1, y: "0%" }}
                                exit={{ opacity: 0.2,
                                        scale: "0%",
                                        transition: {duration: 0.15}
                                    }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}                        
                                className="grid__card--button"
                                onClick={() => {onHandleCart(card); addItem(card.id)}}

                              >
                                <img className="grid__card--button__image" src={addShoppingCart} alt="add to shopping cart"/>
                              </motion.button>
                            }
                          </AnimatePresence>

                        </div>
                    )
                })}
        </section>
      
      </section>
      
    </React.Fragment>
    
  )
}

export {ElectricDisplay}