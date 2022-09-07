import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import question from '@icons/question.svg';
import shoppingCart from '@icons/shopping_cart.svg';
import '@styles/Header/RightMenu.scss';
import arrow from '@icons/chevron_down.svg';

const RightMenu = ({state}) => {

    const [toggleMenu, setToggleMenu] = React.useState (false);

    const onToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
            <React.Fragment>
            <div className="Header__container--right">
                <ul className="navigation__right">

                <li className="about">
                    <a href="/about">About Us</a>
                </li>

                <li className="profile">
                    <div className="profile__container">

                        <label className="profile__container--main" htmlFor="checkbox" onClick={onToggleMenu}>
                            <input type="checkbox" className="profile__container--main__checkbox" />
                            <img src={arrow} alt="arrow down" className="profile__container--main__arrow"/>
                            <p className="profile__container--main__text">Profile</p>
                        </label>

                        <AnimatePresence>
                            {toggleMenu && 
                            
                                <motion.div
                                    key="profile"
                                    initial={{ opacity: 0, y: "-110%" }}
                                    animate={{ opacity: 1, y: "0%" }}
                                    exit={{ opacity: 0.2,
                                            y: "-120%",
                                            transition: {duration: 0.15}
                                        }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="profile__menu"
                                >
                                    <ul className="profile__inner--menu">
                                    <li className="inner__menu--item">
                                        <a href="/orders">My orders</a>
                                    </li>
                                    <li className="inner__menu--item">
                                        <p>Log out</p>
                                    </li>
                                    </ul>
                                </motion.div>
                                
                            }
                        </AnimatePresence>
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
                    {state.length > 0 ? <div>{state.length}</div> : null}
                    </a>
                </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export {RightMenu}