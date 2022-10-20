import React from 'react';
import '@styles/ProductDisplay/AccessoriesDisplay.scss'
import { motion, AnimatePresence } from "framer-motion";
import addShoppingCart from '@icons/shopping_cart_add.svg';
import checkShoppingCart from '@icons/shopping_cart_check.svg';

const AccessoriesDisplay = ({ addToCart, added, addItem }) => {

  const onHandleCart = item => {
    addToCart(item)
  }

  const AccessoriesData = added.filter(object => object.id > 18);

  return (
    <React.Fragment>
      <section className="displays">
        <h1 className="displays__titles">Shop Guitar's Accessories.</h1>

        <section className="displays__grids">
          {AccessoriesData.map((card, index) => {
                    return(
                        <div className="grid__cards" key={index}>

                          <a href={card.link} className="grid__cards--links">
                                <img className="grid__cards--images"src={card.image} alt={card.alt}/>                                

                                <div className="grid__cards--descriptions">
                                    <h3 className="grid__cards--descriptions__titles">{card.title}</h3>

                                    <div className="grid__cards--descriptions__ratings">
                                      <img className="grid__cards--descriptions__ratings--images" src={card.stars} alt="rating" />
                                      <p className="grid__cards--descriptions__ratings--values">{card.rating}</p>
                                    </div>

                                    <p className="grid__cards--descriptions__prices">{card.price}$ USD</p>
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
                                className="grid__cards--button__check"
                                onClick={() => {onHandleCart(card); addItem(card.id)}}
                              >
                                <img className="grid__cards--button__image" src={checkShoppingCart} alt="add to shopping cart"/>
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
                                className="grid__cards--button"
                                onClick={() => {onHandleCart(card); addItem(card.id)}}

                              >
                                <img className="grid__cards--button__image" src={addShoppingCart} alt="add to shopping cart"/>
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

export {AccessoriesDisplay}