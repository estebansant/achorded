import React from 'react';
import './Carousel.scss';
import Slider from "react-slick";
import { CarouselData } from './CarouselData';
// import rightArrow from '@icons/arrow-right.svg';
// import leftArrow from '@icons/arrow-left.svg';

const Carousel = ({slides}) => {
    // const [section, setSection] = React.useState(0);
    // const length = slides.length;

    // const nextSlide = () => {
    //     setSection(section === length - 1 ? 0 : section + 1)
    // };

    // const previousSlide = () => {
    //     setSection(section === 0 ? length - 1 : section - 1)
    // };

    // console.log(section);

    // if(!Array.isArray(slides) || slides.lenght <= 0){
    //     return null;
    // };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
        // <div className="carousel">
        //     {/* <img src={leftArrow} className="left__arrow" onClick={previousSlide}/>
        //     <img src={rightArrow} className="right__arrow" onClick={nextSlide}/> */}
        //     {CarouselData.map((slide, index) => {
        //         return(
        //             <div className={index === section ? 'slide active' : 'slide'} key={index}>
        //                 {index === section && (
        //                     <div className="slides">
        //                         <a className="slides__link">
        //                             <h3 className="slides__link--title">{slide.title}</h3>
        //                             <img className="slides__link--image"src={slide.image} alt={slide.alt}/>
        //                             <div className="slides__link--description">
        //                                 <p>{slide.description}</p>
        //                             </div>
        //                         </a>
        //                     </div>
        //                 )}
        //             </div>
        //         )
        //     })}
        // </div>


        <Slider {...settings}>
            {CarouselData.map((slide, index) => {
                return(
                    <div className="slide" key={index}>
                            <div className="slides">
                                <a className="slides__link">
                                    <h3 className="slides__link--title">{slide.title}</h3>
                                    <img className="slides__link--image"src={slide.image} alt={slide.alt}/>
                                    <div className="slides__link--description">
                                        <p>{slide.description}</p>
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