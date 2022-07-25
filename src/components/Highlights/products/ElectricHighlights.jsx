import React from 'react';
import '@styles/ProductsHighlights.scss';
import stratocaster from '@images/electric/stratocaster-red.svg';
import telecaster from '@images/electric/telecaster-brown.svg';
import jacksonSoloist from '@images/electric/jackson_soloist-black.svg';

const ElectricHighlights = () => {
  return (
      <React.Fragment>
        <section className="wrapper">
            <div className="showcase">
                <a className="showcase-link" href="/electric-guitars/smokey">
                    <img className="showcase__image" src={stratocaster} alt="stratocaster red electric guitar"/>
                    <div className="showcase__text--container">
                        <h4>The Stratocaster</h4>
                        <p>A trustworthy Fender guitar.</p>
                    </div>
                </a>
            </div>
            
            <div className="showcase">
                <a className="showcase-link" href="/electric-guitars/old-fashioned">
                    <img className="showcase__image" src={telecaster} alt="telecaster wooden guitar"/>
                    <div className="showcase__text--container">
                        <h4>Fender Telecaster</h4>
                        <p>Our classical pleasure.</p>
                    </div>
                </a>
            </div>
            
            <div className="showcase">
                <a className="showcase-link" href="/electric-guitars/classical-rock">
                    <img className="showcase__image" src={jacksonSoloist} alt="jackson soloist black electric guitar"/>
                    <div className="showcase__text--container">
                        <h4>Jackson Soloist</h4>
                        <p>Black in color, pure of soul.</p>
                    </div>
                </a>
            </div>
        </section>
    </React.Fragment>
  )
}

export { ElectricHighlights }