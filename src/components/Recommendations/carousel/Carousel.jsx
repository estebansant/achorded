import React from 'react';
import Slider from "react-slick";
import '@styles/Recommendations/Carousel.scss';
import { CarouselData } from './CarouselData';
import rightArrow from '@icons/arrow-right.svg';
import leftArrow from '@icons/arrow-left.svg';

const Carousel = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <img
                className="right__arrow"
                src={rightArrow}
                alt="next slide arrow"
                onClick={onClick}
            />
        );
      }
      
    function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <img
            className="left__arrow"
            src={leftArrow}
            alt="prev slide arrow"
            onClick={onClick}
        />
    );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  initialSlide: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
      };

    return (

        <Slider {...settings} className="carousel">
            {CarouselData.map((slide, index) => {
                return(
                    <div className="carousel__slide" key={index}>
                            <div className="slides">
                                <a href={slide.link} className="slides__link">
                                    <h3 className="slides__link--title">{slide.title}</h3>
                                    <img className="slides__link--image"src={slide.image} alt={slide.alt}/>
                                    <div className="slides__link--description">
                                        <p>{slide.sinopsis}</p>
                                    </div>
                                </a>
                            </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export {Carousel}