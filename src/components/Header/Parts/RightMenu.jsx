import React from 'react';
import question from '@icons/question.svg';
import shoppingCart from '@icons/shopping_cart.svg';
import arrow from '@icons/chevron_down.svg';

const RightMenu = () => {
  return (
    <React.Fragment>
        <div className="Header__container--right">
            <ul className="navigation__right">
            <li className="about">
                <a href="/about">About Us</a>
            </li>
            <li className="profile">
                <img src={arrow} alt="arrow down" className="profile__arrow"/>
                <p className="profile__text">Profile</p>

                <div className="profile__menu">
                    <ul className="profile__inner--menu">
                    <li className="inner__menu--item">
                        <a href="#">My orders</a>
                    </li>
                    <li className="inner__menu--item">
                        <a href="#">My account</a>
                    </li>
                    </ul>
                </div>
                
            </li>

            <li className="question__icon">
                <a href="/questions">
                <img src={question} alt="questions"/>
                </a>
            </li>

            <li className="shopping">
                <a href="/my-cart">
                <img src={shoppingCart} alt="shopping cart" className="shopping__icon"/>
                <div className="shopping__text">2</div>
                </a>
            </li>
            </ul>
        </div>
    </React.Fragment>
  )
}

export {RightMenu}