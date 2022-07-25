import React from 'react';
import menu from '@icons/hamburger-menu.svg';

const LeftMenu = () => {
  return (
    <React.Fragment>
        <img src={menu} alt="menu" className="menu"/>
        <div className="Header__container--left">
            <ul className="navigation__left">
            <li className="navigation__left--item">
                <a href="/electric-guitars">Electric Guitars</a>
            </li>
            <li className="navigation__left--item">
                <a href="/acoustic-guitars">Acoustic Guitars</a>
            </li>
            <li className="navigation__left--last">
                <a href="/accessories">Accessories</a>
            </li>
            </ul>
        </div>
    </React.Fragment>
  )
}

export {LeftMenu}