import React from 'react';
import './Story.scss';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import vModelGibson from '@images/electric/v_model_gibson-red.svg';

const Story = () => {
    return(
        <section className="story">
            <h2 className="story__title">Know their story.</h2>
            <Swiper
                breakpoints={
                    {
                        640:{
                            slidesPerView: 3,
                        },
                        1024:{
                            slidesPerView: 4,
                        },
                        1440:{
                            slidesPerView: 5,
                        }
                    }
                }
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={40}
                speed={500}
                navigation={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,}}
                loop={false}
                className="story__swiper"
                >
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={vModelGibson} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export {Story}