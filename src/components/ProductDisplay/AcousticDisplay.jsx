import React from 'react';
import '@styles/ProductDisplay/AcousticDisplay.scss';
import { AcousticData } from './DisplayData/AcousticData.jsx';

const AcousticDisplay = () => {
  return (
    <React.Fragment>
      <section className="displaybis">
        <h1 className="displaybis__title">Shop for Acoustic Guitars.</h1>

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

                                    <p className="gridbis__card--description__price">{card.price}</p>
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