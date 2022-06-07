import React from 'react';
import './Story.scss';
import { Navigation, Pagination } from 'swiper';
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
                loop={true}
                className="story__swiper"
                >
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a smragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle uitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a saragraph about tory of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Gtar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the sof this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Trangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small paragraph of this picular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Tringle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This s a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Red Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">T is a small paragraph about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
                <SwiperSlide className="story__swiper--slide">
                    <a className="swiper__slide--link">
                        <h3 className="swiper__slide--title">Triangle Rd Guitar</h3>
                        <img className="swiper__slide--image"src={triangleRed} alt="dabois"/>
                        <div className="swiper__slide--writing">
                            <p className="swiper__slide--writing__text">This is a small parag about the story of this particular guitar, and how it came to be what it is today.</p>
                        </div>
                        
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export {Story}