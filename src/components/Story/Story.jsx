import React from 'react';
import './Story.scss';
import { Carousel } from './carousel/Carousel';
import { CarouselData } from './carousel/CarouselData';
// import { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import vModelGibson from '@images/electric/v_model_gibson-red.svg';
// import stratocaster from '@images/electric/stratocaster-red.svg';
// import telecaster from '@images/electric/telecaster-brown.svg';
// import jacksonSoloist from '@images/electric/jackson_soloist-black.svg';

const Story = () => {
    return(
        <section className="story">
            <h2 className="story__title">Know their story.</h2>
            <Carousel
                slides={CarouselData}
            />
        </section>
    )
}

export {Story}