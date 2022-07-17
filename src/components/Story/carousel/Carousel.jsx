import React from 'react';
import './Carousel.scss';
import { CarouselData } from './CarouselData';

const Carousel = () => {
  return (
    <React.Fragment>
        {CarouselData.map((slide, index) => {
            return(
                <div className="slider">
                    <a className="slider__link">
                        <h3 className="slider__link--title">{slide.title}</h3>
                        <img className="slider__link--image"src={slide.image} alt={slide.alt}/>
                        <div className="slider__link--description">
                            <p>{slide.description}</p>
                        </div>
                    </a>
                </div>
            )
        })}
    </React.Fragment>
  )
}

export {Carousel}