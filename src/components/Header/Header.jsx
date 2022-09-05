import React from 'react'
import '@styles/Header/Header.scss';
import { LeftMenu } from './Parts/LeftMenu.jsx';
import { MainLogo } from './Parts/MainLogo.jsx';
import { RightMenu } from './Parts/RightMenu.jsx';

const Header = ({state}) => {
  return (
    <nav className="Header__container">
      <LeftMenu />
      <MainLogo />
      <RightMenu 
        state={state}
      />
    </nav>
  )
}

export {Header}