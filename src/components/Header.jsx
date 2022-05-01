import React from 'react'
import '@styles/Header.scss';
import menu from '@icons/hamburger-menu.svg';
import logo from '@logo/achorded_logo.svg';
import question from '@icons/question.svg';
import shoppingCart from '@icons/shopping_cart.svg';
import arrow from '@icons/chevron_down.svg';

const Header = () => {
  return (
    <nav className="Header__container">
      <img src={menu} alt="menu" className="menu"/>
      <div className="Header__container--left">
        <ul className="navigation__left">
          <li className="navigation__left--item">
            <a href="#">Electric Guitars</a>
          </li>
          <li className="navigation__left--item">
            <a href="#">Acoustic Guitars</a>
          </li>
          <li className="navigation__left--last">
            <a href="#">Accessories</a>
          </li>
        </ul>
      </div>

      <div className="Header__container--center">
        <a href="#">
          <img src={logo} alt="Achorded logo" className="Header__logo"/>
        </a>
      </div>

      <div className="Header__container--right">
        <ul className="navigation__right">
          <li className="about">
            <a href="#">About Us</a>
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
            <a href="#">
              <img src={question} alt="questions"/>
            </a>
          </li>

          <li className="shopping">
            <a href="#">
              <img src={shoppingCart} alt="shopping cart" className="shopping__icon"/>
              <div className="shopping__text">2</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export {Header}