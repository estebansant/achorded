import React from 'react';
import './Story.scss';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import vModelGibson from '@images/electric/v_model_gibson-red.svg';
import stratocaster from '@images/electric/stratocaster-red.svg';
import telecaster from '@images/electric/telecaster-brown.svg';
import jacksonSoloist from '@images/electric/jackson_soloist-black.svg';

const Story = () => {
    return(
        <section className="story">
            <h2 className="story__title">Know their story.</h2>
            <Swiper
                breakpoints={
                    {
                        640:{
                            slidesPerView: 3,
                            centeredSlides: true,
                            centeredSlidesBounds: true,
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
                centeredSlides={true}
                navigation={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,}}
                loop={true}
                
                className="story__swiper"
                >
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">V Model Gibson</h3>
                        <img className="swiper__slide--image"src={vModelGibson} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">The Stratocaster</h3>
                        <img className="swiper__slide--image"src={stratocaster} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Jackson Soloist</h3>
                        <img className="swiper__slide--image"src={jacksonSoloist} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Fender Telecaster</h3>
                        <img className="swiper__slide--image"src={telecaster} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">V Model Gibson</h3>
                        <img className="swiper__slide--image"src={vModelGibson} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">The Stratocaster</h3>
                        <img className="swiper__slide--image"src={stratocaster} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Jackson Soloist</h3>
                        <img className="swiper__slide--image"src={jacksonSoloist} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Fender Telecaster</h3>
                        <img className="swiper__slide--image"src={telecaster} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">V Model Gibson</h3>
                        <img className="swiper__slide--image"src={vModelGibson} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">The Stratocaster</h3>
                        <img className="swiper__slide--image"src={stratocaster} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Jackson Soloist</h3>
                        <img className="swiper__slide--image"src={jacksonSoloist} alt="stratocaster red guitar"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Fender Telecaster</h3>
                        <img className="swiper__slide--image"src={telecaster} alt="stratocaster red guitar"/>
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