import React from 'react'
import '@styles/Header/Header.scss';

const Header = ({children}) => {
  return (
    <nav className="Header__container">
      {children}
    </nav>
  )
}

export {Header}