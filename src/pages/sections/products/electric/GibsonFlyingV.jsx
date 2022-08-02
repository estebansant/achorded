import React from 'react';
import Slider from "react-slick";
import { ProductsData } from '../ProductsData/ProductsData';
import { CarouselData } from '@components/Recommendations/carousel/CarouselData.jsx';
import '@styles/Recommendations/Carousel.scss';
import addShoppingCart from '@icons/shopping_cart_add.svg';
import rightArrow from '@icons/arrow-right.svg';
import leftArrow from '@icons/arrow-left.svg';

const GibsonFlyingV = () => {

  // Carousel settings

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
    speed: 500,
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

  // Sort recommended items on the carousel
  const CarouselNewArray = CarouselData.splice(0, 9);
  const SplicedArray = CarouselNewArray.splice(0, 1);

  return (
    <main>
        {ProductsData.map((first) => first.GibsonFlyingV?.map((product, index) => {
          return (
            <section key={index} className="main__container">
              <h1 className="main__title">{product.title}</h1>
                
                {/* Rating */}
                <div className="rating">
                  <img className="rating__image" src={product.stars} alt="rating" />
                  <p className="rating__value">{product.rating}</p>
                </div>

                {/* Product display */}
                <section className="product">

                  <div className="product__specs">
                    <div className="product__specs--container">
                      <p className="product__specs--containers__text">{product.pickups}</p>
                      <h3 className="product__specs--container__subtitle">Pickups</h3>
                    </div>
                    <div className="product__specs--container">
                      <p className="product__specs--container__text">{product.neck}</p>
                      <h3 className="product__specs--container__subtitle">Neck Profile</h3>
                    </div>
                    <div className="product__specs--container">
                      <p className="product__specs--container__amount">{product.frets}</p>
                      <h3 className="product__specs--container__subtitle">{product.fretSize}</h3>
                    </div>
                  </div>

                  <img className="product__image" src={product.image} alt={product.alt}/>

                </section>

                <p className="description">{product.description}</p>

                {/* Price section */}
                <section className="price">
                  <div className="price__container">
                    <p className="price__container--value">{product.price}</p>
                    <button className="price__container--button">Buy Now</button>
                    <button className="price__container--cart">
                      <img src={addShoppingCart} alt="add to shopping cart"/>
                    </button>
                  </div>
                </section>

                {/* Recommendation carousel */}
                <section className="recommendations">

                  <h2 className="recommendations__title">Similar Products</h2>

                  <Slider {...settings} className="carousel">
                    {CarouselNewArray.map((slide, index) => {
                        return(
                            <div className="carousel__slide" key={index}>
                                    <div className="slides">
                                        <a href={slide.link} className="slides__link">
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
                </section>
            </section>
          )}
        ))}
    </main>
  )
}

export {GibsonFlyingV}