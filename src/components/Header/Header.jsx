import React from 'react'
import '@styles/Header/Header.scss';
import { LeftMenu } from './Parts/LeftMenu.jsx';
import { MainLogo } from './Parts/MainLogo.jsx';
import { RightMenu } from './Parts/RightMenu.jsx';

const Header = ({cart, price, changeAmount, removeItem}) => {
  return (
    <nav className="Header__container">
      <LeftMenu />
      <MainLogo />
      <RightMenu 
        cart={cart}
        price={price}
        changeAmount={changeAmount}
        removeItem={removeItem}
      />
    </nav>
  )
}

export {Header}