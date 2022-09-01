import React from 'react';
import Slider from "react-slick";
import { ProductsData } from '../ProductsData/ProductsData';
import { CarouselData } from '@components/Recommendations/carousel/CarouselData.jsx';
import '@styles/Recommendations/Carousel.scss';
import '@styles/Products/Guitars.scss';
import addShoppingCart from '@icons/shopping_cart_add.svg';
import rightArrow from '@icons/arrow-right.svg';
import leftArrow from '@icons/arrow-left.svg';

const GibsonFlyingV = ({ addToCart, product }) => {

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
  const CarouselNewArray = CarouselData.filter(object => object.id <= 9);
  const RemoveCurrentGuitar = CarouselNewArray.splice(0, 1);
  
  // Cart Context

  const onHandleCart = item => {
    addToCart(item)
  }

  return (
    <main>
        {ProductsData.map((first) => first.GibsonFlyingV?.map((product, index) => {
          return (
            <section key={index} className="main__container">

              <div className="main__container--wrapper">
                  {/* Product display */}
                <section className="product__box">

                    <div className="product">

                    <div className="product__wrapper">

                      <div className="information">
                        <h1 className="information__title">{product.title}</h1>
                        
                        {/* Rating */}
                        <div className="information__rating">
                          <img className="information__rating--image" src={product.stars} alt="rating" />
                          <p className="information__rating--value">{product.rating}</p>
                        </div>

                        <p className="information__price">{product.price}</p>
                      </div>

                      <div className="specs">
                        <div className="specs__container">
                          <p className="specs__container--text">{product.pickups}</p>
                          <h3 className="specs__container--subtitle">Pickups</h3>
                        </div>
                        <div className="specs__container">
                          <p className="specs__container--text">{product.neck}</p>
                          <h3 className="specs__container--subtitle">Neck Profile</h3>
                        </div>
                        <div className="specs__container">
                          <p className="specs__container--text">{product.frets}</p>
                          <h3 className="specs__container--subtitle">{product.fretSize}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="product__image">
                      <img className="product__image--picture" src={product.image} alt={product.alt}/>
                    </div>

                  </div>

                </section>

                <section className="details__container">

                  {/* Price section */}

                  <div className="price">
                      <div className="price__container">
                        <button className="price__button--buy">Buy Now</button>
                        <button className="price__button--cart" onClick={() => onHandleCart(product)}>
                          <img className="price__button--cart__image" src={addShoppingCart} alt="add to shopping cart"/>
                        </button>
                      </div>
                    </div>

                  <p className="description">{product.description}</p>

                </section>
      
              </div>
                

                {/* Recommendation carousel */}
                <section className="suggested">

                  <h2 className="suggested__title">Similar Products</h2>

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