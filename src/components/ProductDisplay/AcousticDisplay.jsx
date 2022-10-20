import React from 'react';
import '@styles/ProductDisplay/AcousticDisplay.scss';
import { motion, AnimatePresence } from "framer-motion";
import addShoppingCart from '@icons/shopping_cart_add.svg';
import checkShoppingCart from '@icons/shopping_cart_check.svg';

const AcousticDisplay = ({ addToCart, added, addItem }) => {

  const onHandleCart = item => {
    addToCart(item)
  }

  const AcousticData = added.filter(object => object.id > 10 && object.id < 19)

  return (
    <React.Fragment>
      <section className="displaybis">
        <h1 className="displaybis__title">Shop Acoustic Guitars.</h1>

        <section className="displaybis__grid">
          {AcousticData.map((card, index) => {
                    return(
                        <div className="gridbis__card" key={index}>

                          <a href={card.link} className="gridbis__card--link">
                                <img className="gridbis__card--image"src={card.image} alt={card.alt}/>                                

                                <div className="gridbis__card--description">
                                    <h3 className="gridbis__card--description__title">{card.title}</h3>

                                    <div className="gridbis__card--description__rating">
                                      <img className="gridbis__card--description__rating--image" src={card.stars} alt="rating" />
                                      <p className="gridbis__card--description__rating--value">{card.rating}</p>
                                    </div>

                                    <p className="gridbis__card--description__price">{card.price}$ USD</p>
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
                                className="gridbis__card--button__check"
                                onClick={() => {onHandleCart(card); addItem(card.id)}}
                              >
                                <img className="gridbis__card--button__image" src={checkShoppingCart} alt="add to shopping cart"/>
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
                                className="gridbis__card--button"
                                onClick={() => {onHandleCart(card); addItem(card.id)}}

                              >
                                <img className="gridbis__card--button__image" src={addShoppingCart} alt="add to shopping cart"/>
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

export {AcousticDisplay}