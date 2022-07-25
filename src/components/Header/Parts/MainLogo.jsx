import React from 'react';
import logo from '@logo/achorded_logo.svg';

const MainLogo = () => {
  return (
    <React.Fragment>
        <div className="Header__container--center">
            <a href="/">
            <img src={logo} alt="Achorded logo" className="Header__logo"/>
            </a>
        </div>
    </React.Fragment>
  )
}

export {MainLogo}