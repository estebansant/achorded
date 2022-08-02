import React from 'react';
import '@styles/Recommendations/Recommendations.scss';
import { Carousel } from './carousel/Carousel';

const Recommendations = () => {
    return(
        <section className="story">
            <h2 className="story__title">Recommendations.</h2>
            <Carousel />
        </section>
    )
}

export {Recommendations}