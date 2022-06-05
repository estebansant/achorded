import React from 'react';
import './Story.scss';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Story = () => {
    return(
        <section className="story">
            <h2 className="story__title">Know their story.</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                loop={true}
                className="story__swiper"
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
            </Swiper>
        </section>
    )
}

export {Story}