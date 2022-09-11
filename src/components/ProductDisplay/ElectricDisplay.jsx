import React from 'react';
import '@styles/ProductDisplay/ElectricDisplay.scss';
import { ItemData } from '@pages/sections/products/ProductData/ItemData';
import addShoppingCart from '@icons/shopping_cart_add.svg';
import checkShoppingCart from '@icons/shopping_cart_check.svg';

const ElectricDisplay = ({ addToCart }) => {

    const [added, setAdded] = React.useState(ItemData);

  const addItem = (id) => {

      const index = added.findIndex(object => object.id === id);
        const array = added;
        array[index].inCart = true;

        setAdded([...array]);
}
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

                          <button className="grid__card--button" onClick={() => {onHandleCart(card); addItem(card.id);}}>
                            {card.inCart &&
                              <img className="grid__card--button__image" src={checkShoppingCart} alt="add to shopping cart"/>
                            }
                            {!card.inCart && 
                              <img className="grid__card--button__image" src={addShoppingCart} alt="add to shopping cart"/>
                            }
                          </button>

                        </div>
                    )
                })}
        </section>
      
      </section>
      
    </React.Fragment>
    
  )
}

export {ElectricDisplay}