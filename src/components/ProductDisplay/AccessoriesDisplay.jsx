import React from 'react';
import '@styles/ProductDisplay/AccessoriesDisplay.scss'
import { ProductData } from '@pages/sections/products/productData/ProductData';
import addShoppingCart from '@icons/shopping_cart_add.svg';

const AccessoriesDisplay = ({ addToCart }) => {

  const onHandleCart = item => {
    addToCart(item)
  }

  return (
    <React.Fragment>
      <section className="displays">
        <h1 className="displays__titles">Shop Guitar's Accessories.</h1>

        <section className="displays__grids">
          {ProductData.map((card, index) => {
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

                                    <p className="grid__cards--descriptions__prices">{card.price}</p>
                                </div>
                            </a>
                            
                            <button className="grid__cards--button" onClick={() => onHandleCart(card)}>
                                <img className="grid__cards--button__image" src={addShoppingCart} alt="add to shopping cart"/>
                            </button>

                        </div>
                    )
                })}
        </section>
      </section>
      
    </React.Fragment>
    
  )
}

export {AccessoriesDisplay}