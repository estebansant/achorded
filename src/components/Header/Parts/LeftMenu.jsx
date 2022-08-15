import React from 'react';
import '@styles/Header/LeftMenu.scss';
import menu from '@icons/hamburger-menu.svg';
import arrow from '@icons/chevron_down.svg';

const LeftMenu = () => {

    const [toggleMenuB, setToggleMenuB] = React.useState (false);

    const onToggleMenuB = () => {
        setToggleMenuB(!toggleMenuB);
    }

    return (
        <React.Fragment>
            <img src={menu} alt="menu" className="menu"/>
            <div className="Header__container--left">

                <ul className="navigation__left">

                <li className="profileB">
                    <div className="profileB__container" onClick={onToggleMenuB}>
                        <img src={arrow} alt="arrow down" className="profileB__container--arrow"/>
                        <p className="profileB__container--text">Profile</p>

                        {toggleMenuB && 
                    
                            <div className="profileB__menu">
                                <ul className="profileB__inner--menu">
                                <li className="innerB__menu--item">
                                    <a href="/orders">My orders</a>
                                </li>
                                <li className="innerB__menu--item">
                                    <p>Log out</p>
                                </li>
                                </ul>
                            </div>
                            
                        }
                    </div>
                </li>

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