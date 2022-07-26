import React from 'react';
import '@styles/ProductDisplay/ElectricDisplay.scss';
import { ElectricData } from './Data/ElectricData.jsx';

const ElectricDisplay = () => {
  return (
    <React.Fragment>
      <h1 className="title">Shop for Electric Guitars</h1>
      <p className="description">Browse between different models of electric guitars, pick the one that suits you best, <br/>
      and gor for it!</p>

      <section className="grid">

        {ElectricData.map((card, index) => {
                  return(
                      <div className="grid__card" key={index}>

                              <img className="grid__card--image"src={card.image} alt={card.alt}/>

                              <div className="grid__card--description">
                                  <h3 className="grid__card--title">{card.title}</h3>

                                  <div className="grid__card--rating">
                                    <img className="grid__card--rating__image" src={card.stars} alt="rating" />
                                    <p className="grid__card--rating__value">{card.rating}</p>
                                  </div>

                                  <p className="grid__card--price">{card.price}</p>
                              </div>
                          
                          <a href={card.link} className="grid__card--link">
                            <button>Shop</button>
                          </a>
                          
                      </div>
                  )
              })}

      </section> 
    </React.Fragment>
    
  )
}

export {ElectricDisplay}