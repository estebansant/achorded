import React from 'react';
import './ProductsHighlights.scss';
import triangleRed from '@images/electric/electric_triangle_red-1.svg';
import classicWood from '@images/electric/electric_wood.svg';
import rockBlack from '@images/electric/electric_black-1.svg';

const ElectricHighlights = () => {
  return (
      <React.Fragment>
          <div className="showcase">
            <img className="showcase__image" src={triangleRed} alt="red triangle electric guitar"/>
            <div className="showcase__text--container">
                <h4>The Smokey</h4>
                <p>Trustworthy triangle form guitar</p>
            </div>
        </div>

        <div className="showcase">
            <img className="showcase__image" src={classicWood} alt="wood electric guitar"/>
            <div className="showcase__text--container">
                <h4>Old Fashioned Way</h4>
                <p>A classic pleasure</p>
            </div>
        </div>

        <div className="showcase">
            <img className="showcase__image" src={rockBlack} alt="black electric guitar"/>
            <div className="showcase__text--container">
                <h4>Classical Rock</h4>
                <p>The favorite of many people</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export { ElectricHighlights }