import React from 'react';
import { Basket } from './Basket';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import question from '@icons/question.svg';
import shoppingCart from '@icons/shopping_cart.svg';
import '@styles/Header/RightMenu.scss';
import arrow from '@icons/chevron_down.svg';

const RightMenu = ({cart, price, changeAmount, removeItem}) => {

    const [toggleMenu, setToggleMenu] = React.useState (false);
    const [toggleBasket, setToggleBasket] = React.useState(false);

    const onToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }
    const onToggleBasket = () => {
        setToggleBasket(!toggleBasket);
    }

    return (
            <React.Fragment>
            <div className="Header__container--right">
                <ul className="navigation__right">

                <li className="about">
                    <a href="/about">About</a>
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
                                        <a href="/">Log out</a>
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

                <li className="shopping" onClick={onToggleBasket}>
                    <img src={shoppingCart} alt="shopping cart" className="shopping__icon"/>
                    {cart.length > 0 ? <div className="shopping__number">{cart.length}</div> : null}
                </li>
                </ul>
            </div>
            <LayoutGroup>
                <AnimatePresence>
                    {toggleBasket &&
                        <motion.div
                            layout
                            key="cart"
                            initial={{ opacity: 0, x: "130%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            exit={{ opacity: 0.2,
                                    x: "130%"
                                }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="basket__container"
                        >
                            <Basket
                                cart={cart} 
                                price={price}
                                changeAmount={changeAmount}
                                removeItem={removeItem}
                                onToggleBasket={onToggleBasket}
                            />
                        </motion.div>
                    }
                </AnimatePresence>
            </LayoutGroup>
        </React.Fragment>
    )
}

export {RightMenu}