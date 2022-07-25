import React from 'react'
import '@styles/Header.scss';
import { LeftMenu } from './Parts/LeftMenu.jsx';
import { MainLogo } from './Parts/MainLogo.jsx';
import { RightMenu } from './Parts/RightMenu.jsx';

const Header = () => {
  return (
    <nav className="Header__container">
      <LeftMenu />
      <MainLogo />
      <RightMenu />
    </nav>
  )
}

export {Header}