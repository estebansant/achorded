import React from 'react';
import './Story.scss';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import triangleRed from '@images/electric/electric_triangle_red-1.svg';

const Story = () => {
    return(
        <section className="story">
            <h2 className="story__title">Know their story.</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                breakpoints={
                    {
                        640:{
                            slidesPerView: 3,
                        },
                        1024:{
                            slidesPerView: 4,
                        },
                        1440:{
                            slidesPerView: 6,
                        }
                    }
                }
                slidesPerView={1}
                navigation
                centeredSlides={true}
                centeredSlidesBounds={true}
                roundLengths={true}
                loopAdditionalSlides={30}
                loop={true}
                className="story__swiper"
                >
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <h3 className="swiper__slide--writing__title">Triangle Red Guitar</h3>
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export {Story}