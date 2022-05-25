import React from 'react';
import './ProductsHighlights.scss';
import triangleRed from '@images/electric/electric_triangle_red-1.svg';
import classicWood from '@images/electric/electric_wood.svg';
import rockBlack from '@images/electric/electric_black-1.svg';

const ElectricHighlights = () => {
  return (
      <React.Fragment>
        <section className="wrapper">
            <div className="showcase">
                <a className="showcase-link" href="/electric-guitars/smokey">
                    <img className="showcase__image" src={triangleRed} alt="red triangle electric guitar"/>
                    <div className="showcase__text--container">
                        <h4>The Smokey</h4>
                        <p>The trustworthy triangle.</p>
                    </div>
                </a>
            </div>
            
            <div className="showcase">
                <a className="showcase-link" href="/electric-guitars/old-fashioned">
                    <img className="showcase__image" src={classicWood} alt="wooden electric guitar"/>
                    <div className="showcase__text--container">
                        <h4>Old Fashioned Way</h4>
                        <p>A classic pleasure.</p>
                    </div>
                </a>
            </div>
            
            <div className="showcase">
                <a className="showcase-link" href="/electric-guitars/classical-rock">
                    <img className="showcase__image" src={rockBlack} alt="black electric guitar"/>
                    <div className="showcase__text--container">
                        <h4>Classical Rock</h4>
                        <p>The favorite of many.</p>
                    </div>
                </a>
            </div>
        </section>
    </React.Fragment>
  )
}

export { ElectricHighlights }