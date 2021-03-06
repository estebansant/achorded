import React from 'react';
import './Story.scss';
import { Carousel } from './carousel/Carousel';

const Story = () => {
    return(
        <section className="story">
            <h2 className="story__title">Know their story.</h2>
            <Carousel />
        </section>
    )
}

export {Story}