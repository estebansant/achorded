import React from 'react';
import '@styles/ProductDisplay/ElectricDisplay.scss';
import addShoppingCart from '@icons/shopping_cart_add.svg';
import checkShoppingCart from '@icons/shopping_cart_check.svg';

const ElectricDisplay = ({ addToCart, added, addItem }) => {

  const ElectricData = added.filter(object => object.id <= 10)

  const onHandleCart = item => {
    addToCart(item)
  }
  
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

                            {card.inCart &&
                              <button className="grid__card--button__check" onClick={() => {onHandleCart(card); addItem(card.id)}}>
                                <img className="grid__card--button__image" src={checkShoppingCart} alt="add to shopping cart"/>
                              </button>
                            }
                            {!card.inCart && 
                              <button className="grid__card--button" onClick={() => {onHandleCart(card); addItem(card.id)}}>
                                <img className="grid__card--button__image" src={addShoppingCart} alt="add to shopping cart"/>
                              </button>
                            }

                        </div>
                    )
                })}
        </section>
      
      </section>
      
    </React.Fragment>
    
  )
}

export {ElectricDisplay}