import React from 'react';
import '@styles/ProductDisplay/AccessoriesDisplay.scss'
import { AccessoriesData } from './Data/AccessoriesData.jsx';

const AccessoriesDisplay = () => {
  return (
    <React.Fragment>
      <section className="displays">
        <h1 className="displays__titles">Shop for Guitar's Accessories.</h1>

        <section className="displays__grids">
          {AccessoriesData.map((card, index) => {
                    return(
                        <div className="grid__cards" key={index}>

                          <a href={card.link} className="grid__cards--links">
                                <img className="grid__cards--images"src={card.image} alt={card.alt}/>                                

                                <div className="grid__cards--descriptions">
                                    <h3 className="grid__cards--descriptions__titles">{card.title}</h3>

                                    <div className="grid__cards--descriptios__ratings">
                                      <img className="grid__cards--descriptiosn__ratings--images" src={card.stars} alt="rating" />
                                      <p className="grid__cards--descriptions__ratings--values">{card.rating}</p>
                                    </div>

                                    <p className="grid__cards--descriptions__prices">{card.price}</p>
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

export {AccessoriesDisplay}