import React from 'react';
import Slider from "react-slick";
import { ItemData } from '../ProductData/ItemData';
import '@styles/Recommendations/AccessoriesCarousel.scss';
import '@styles/Products/Accessories.scss';
import { motion, AnimatePresence } from "framer-motion";
import checkShoppingCart from '@icons/shopping_cart_check.svg';
import addShoppingCart from '@icons/shopping_cart_add.svg';
import rightArrow from '@icons/arrow-right.svg';
import leftArrow from '@icons/arrow-left.svg';

const SmallAmplifier = ({ addToCart, added, addItem }) => {
  
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

  const onHandleCart = item => {
    addToCart(item);
  }

  return (
    <main>
        {added.filter(item => item.id === 20).map(((product, index) => {
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

                        <p className="informationB__price">{product.price}$ USD</p>
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
                        <a className="priceB__button--buy"
                          onClick={() => {onHandleCart(product); addItem(product.id)}}
                          href="/checkout"
                        >
                          Buy Now
                        </a>
                        
                        <AnimatePresence>
                          {product.inCart &&
                            <button
                              className="priceB__button--cart__check"
                              onClick={() => {onHandleCart(product); addItem(product.id)}}
                            >
                              <motion.img
                                key={product.id}
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={{ opacity: 1, y: "0%" }}
                                exit={{ opacity: 0.2,
                                        y: "120%",
                                        transition: {duration: 0.3}
                                    }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="priceB__button--cart__image"
                                src={checkShoppingCart}
                                alt="add to shopping cart"
                              />
                            </button>
                          }
                          {!product.inCart &&
                            <button
                              className="priceB__button--cart"
                              onClick={() => {onHandleCart(product); addItem(product.id)}}
                            >
                              <motion.img
                                key='a-{product.id}'
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={{ opacity: 1, y: "0%" }}
                                exit={{ opacity: 0.2,
                                        y: "120%",
                                        transition: {duration: 0.3}
                                    }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}  
                                className="priceB__button--cart__image"
                                src={addShoppingCart}
                                alt="add to shopping cart"
                              />
                            </button>
                          }
                        </AnimatePresence>
                      </div>
                    </div>

                  <p className="descriptionB">{product.description}</p>

                </section>
      
              </div>
                

                {/* Recommendation carousel */}
                <section className="suggested">

                  <h2 className="suggested__title">Similar Products</h2>

                  <Slider {...settings} className="carouselAC">
                    {ItemData.filter(item => item.id === 19 || item.id > 20).map((slide, index) => {
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