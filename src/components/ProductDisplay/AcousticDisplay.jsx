import React from 'react';
import '@styles/ProductDisplay/GuitarsDisplay.scss';
import { AcousticData } from './DisplayData/AcousticData.jsx';

const AcousticDisplay = () => {
  return (
    <React.Fragment>
      <section className="display">
        <h1 className="display__title">Shop for Acoustic Guitars.</h1>

        <section className="display__grid">
          {AcousticData.map((card, index) => {
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

                                    <p className="grid__card--description__price">{card.price}</p>
                                </div>
                            </a>
                            
                        </div>
                    )
                })}
        </section>
      
      </section>
      
    </React.Fragment>
    
  )
}

export {AcousticDisplay}