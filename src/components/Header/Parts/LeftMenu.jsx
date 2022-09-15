import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@styles/Header/LeftMenu.scss';
import menu from '@icons/hamburger-menu.svg';
import arrow from '@icons/chevron_down.svg';
import x from '@icons/x_icon.svg';

const LeftMenu = () => {

    const [toggleMenuLeft, setToggleMenuLeft] = React.useState(false);

    const onToggleMenuLeft = () => {
        setToggleMenuLeft(!toggleMenuLeft);
    }

    const [toggleMenuB, setToggleMenuB] = React.useState (false);

    const onToggleMenuB = () => {
        setToggleMenuB(!toggleMenuB);
    }

    return (
        <React.Fragment>
            <img src={menu} alt="menu" className="menu" onClick={onToggleMenuLeft}/>

                <AnimatePresence>
                    {toggleMenuLeft &&

                        <motion.div
                            key="sidebar"
                            initial={{ opacity: 0, x: "-110%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            exit={{ opacity: 1, x: "-110%" }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="hidden__header--container"
                        >
                            <div className="hidden__x">
                                <img src={x} alt="close" className="hidden__x--image" onClick={onToggleMenuLeft}/>
                            </div>
                            <ul className="hidden__navigation--left">

                                <li className="hidden__profileB">
                                    <label className="hidden__profileB--container" onClick={onToggleMenuB}>
                                        <input type="checkbox" className="hidden__profileB--container__checkbox" />
                                        <p className="hidden__profileB--container__text">Profile</p>
                                        <img src={arrow} alt="arrow down" className="hidden__profileB--container__arrow"/>
                                    </label>

                                    <AnimatePresence>
                                        {toggleMenuB && 
                                        
                                            <motion.div
                                                key="profile"
                                                initial={{ opacity: 0, y: "-110%" }}
                                                animate={{ opacity: 1, y: "0%" }}
                                                exit={{ opacity: 0, x: "-110%" }}
                                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                                className="profileB__menu"
                                            >
                                                <ul className="profileB__inner--menu">
                                                <li className="innerB__menu--item">
                                                    <a href="/orders">My orders</a>
                                                </li>
                                                <li className="innerB__menu--item__last">
                                                    <p>Log out</p>
                                                </li>
                                                </ul>
                                            </motion.div>
                                            
                                        }
                                    </AnimatePresence>
                                </li>
                                
                                <a href="/electric-guitars" className="hidden__navigation--left__item">
                                    <li>Electric Guitars</li>
                                </a>
                                <a href="/acoustic-guitars" className="hidden__navigation--left__item">
                                    <li>Acoustic Guitars</li>
                                </a>
                                <a href="/accessories" className="hidden__navigation--left__item">
                                    <li>Accessories</li>
                                </a>
                                <a href="/about" className="hidden__navigation--left__item">
                                    <li>About</li>
                                </a>
                                <a href="/questions" className="hidden__navigation--left__item">
                                    <li>FAQs</li>
                                </a>
                            </ul>
                        </motion.div>
                        }
                </AnimatePresence>
                
                <div className="header__container--left">
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