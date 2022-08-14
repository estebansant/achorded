import React from 'react';
import Slider from "react-slick";
import { AccessoriesCarouselData } from '../ProductsData/AccessoriesCarouselData';
import { ProductsData } from '../ProductsData/ProductsData';
import '@styles/Recommendations/AccessoriesCarousel.scss';
import '@styles/Products/Accessories.scss';
import addShoppingCart from '@icons/shopping_cart_add.svg';
import rightArrow from '@icons/arrow-right.svg';
import leftArrow from '@icons/arrow-left.svg';

const SmallAmplifier = () => {
  
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

  // Sort recommended items on the carousel
  const CarouselNewArray = AccessoriesCarouselData.splice(1, 1);

  return (
    <main>
        {ProductsData.map((first) => first.SmallAmplifier?.map((product, index) => {
          return (
            <section key={index} className="main__containerB">

              <div className="main__containerB--wrapper">
                  {/* Product display */}
                <section className="productB__box">

                    <div className="productB">

                    <div className="productB__wrapper">

                      <div className="informationB">
                        <h1 className="informationB__title">{product.title}</h1>
                        
                        {/* Rating */}
                        <div className="informationB__rating">
                          <img className="informationB__rating--image" src={product.stars} alt="rating" />
                          <p className="informationB__rating--value">{product.rating}</p>
                        </div>

                        <p className="informationB__price">{product.price}</p>
                      </div>

                    </div>
                    
                    <div className="productB__image">
                      <img className="productB__image--picture" src={product.image} alt={product.alt}/>
                    </div>

                  </div>

                </section>

                <section className="detailsB__container">

                  {/* Price section */}

                  <div className="priceB">
                      <div className="priceB__container">
                        <button className="priceB__button--buy">Buy Now</button>
                        <button className="priceB__button--cart">
                          <img className="priceB__button--cart__image" src={addShoppingCart} alt="add to shopping cart"/>
                        </button>
                      </div>
                    </div>

                  <p className="descriptionB">{product.description}</p>

                </section>
      
              </div>
                

                {/* Recommendation carousel */}
                <section className="suggested">

                  <h2 className="suggested__title">Similar Products</h2>

                  <Slider {...settings} className="carouselAC">
                    {AccessoriesCarouselData.map((slide, index) => {
                        return(
                            <div className="carouselAC__slide" key={index}>
                                    <div className="slidesAC">
                                        <a href={slide.link} className="slidesAC__link">
                                            <h3 className="slidesAC__link--title">{slide.title}</h3>
                                            <img className="slidesAC__link--image"src={slide.image} alt={slide.alt}/>
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

export {SmallAmplifier}