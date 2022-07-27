import React from 'react';
import '@styles/ProductDisplay/ElectricDisplay.scss';
import { ElectricData } from './Data/ElectricData.jsx';

const ElectricDisplay = () => {
  return (
    <React.Fragment>
      <section className="display">
        <h1 className="display__title">Shop for Electric Guitars.</h1>
        <p className="display__description">Browse between different models of electric guitars, pick the one that suits you best, and gor for it!</p>

        <section className="grid__wrapper">
          <div className="display__grid">
            {ElectricData.map((card, index) => {
                      return(
                          <div className="grid__card" key={index}>

                                  <img className="grid__card--image"src={card.image} alt={card.alt}/>

                                  <div className="grid__card--description">
                                      <h3 className="grid__card--description__title">{card.title}</h3>

                                      <div className="grid__card--description__rating">
                                        <img className="grid__card--description__rating--image" src={card.stars} alt="rating" />
                                        <p className="grid__card--description__rating--value">{card.rating}</p>
                                      </div>

                                      <p className="grid__card--description__price">{card.price}</p>
                                  </div>
                              
                              <a href={card.link} className="grid__card--link">
                                <button>Shop</button>
                              </a>
                              
                          </div>
                      )
                  })}
          </div>
          

        </section>
      </section>
      
    </React.Fragment>
    
  )
}

export {ElectricDisplay}