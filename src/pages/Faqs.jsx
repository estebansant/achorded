import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@styles/FAQs/Faqs.scss';
import arrow from '@icons/chevron_down.svg';

const Faqs = () => {

  // Questions states and functions
  const [question1, setQuestion1] = React.useState (false);
  const [question2, setQuestion2] = React.useState (false);
  const [question3, setQuestion3] = React.useState (false);
  const [question4, setQuestion4] = React.useState (false);
  const [question5, setQuestion5] = React.useState (false);

    const onToggleQuestion1 = () => {
        setQuestion1(!question1);
    }

    const onToggleQuestion2 = () => {
        setQuestion2(!question2);
    }

    const onToggleQuestion3 = () => {
        setQuestion3(!question3);
    }

    const onToggleQuestion4 = () => {
        setQuestion4(!question4);
    }

    const onToggleQuestion5 = () => {
        setQuestion5(!question5);
    }

  return (
    <main>
        <section className="questions__container">
          <h1 className="questions__container--title">Frequently Asked Questions.</h1>
          <ul className="questions__container--list">

            <li className="questions__item">
              <label className="questions__item--container" onClick={onToggleQuestion1}>
                <input type="checkbox" className="questions__item--checkbox" />
                <p className="questions__item--text">Does this website sell real guitars?</p>
                <img src={arrow} className="questions__item--arrow"/>
              </label>

              <AnimatePresence>
                {question1 && 
                
                    <motion.div
                        layout
                        key="question 1"
                        initial={{ opacity: 0, y: "-80%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, x: "-80%", transition: {duration: 0.4} }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="questions__item--content"
                    >
                        <p className="questions__item--content__text">No, this website does not sell real guitars, that is why in the checkout page we don't ask for any payment methods.</p>
                    </motion.div>
                    
                }
            </AnimatePresence>
            </li>

            <li className="questions__item">
              <label className="questions__item--container" onClick={onToggleQuestion2}>
                <input type="checkbox" className="questions__item--checkbox" />
                <p className="questions__item--text">Is money charged when placing an order?</p>
                <img src={arrow} className="questions__item--arrow"/>
              </label>

              <AnimatePresence>
                {question2 && 
                
                    <motion.div
                        layout
                        key="question 2"
                        initial={{ opacity: 0, y: "-95%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, x: "-80%", ransition: {duration: 0.4} }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="questions__item--content"
                    >
                        <p className="questions__item--content__text">No, as Achorded does not sell any real products, then you will not be charged when placing an order. It is just a function to create the full experience of a working e-commerce.</p>
                    </motion.div>
                    
                }
            </AnimatePresence>
            </li>

            <li className="questions__item">
              <label className="questions__item--container" onClick={onToggleQuestion3}>
                <input type="checkbox" className="questions__item--checkbox" />
                <p className="questions__item--text">What is the purpose of Achorded?</p>
                <img src={arrow} className="questions__item--arrow"/>
              </label>

              <AnimatePresence>
                {question3 && 
                
                    <motion.div
                        layout
                        key="question 3"
                        initial={{ opacity: 0, y: "-95%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, x: "-80%", transition: {duration: 0.4} }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="questions__item--content"
                    >
                        <p className="questions__item--content__text">Achorded was born as a way to test my skills as a developer, and to form part of my personal portfolio. It's main objective is to simulate the behaviour of a real e-commerce.</p>
                    </motion.div>
                    
                }
            </AnimatePresence>
            </li>

            <li className="questions__item">
              <label className="questions__item--container" onClick={onToggleQuestion4}>
                <input type="checkbox" className="questions__item--checkbox" />
                <p className="questions__item--text">Which technologies did you use to create this website?</p>
                <img src={arrow} className="questions__item--arrow"/>
              </label>

              <AnimatePresence>
                {question4 && 
                
                    <motion.div
                        layout
                        key="question 4"
                        initial={{ opacity: 0, y: "-95%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, x: "-80%", transition: {duration: 0.4} }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="questions__item--content"
                    >
                        <p className="questions__item--content__text">I used React.js to develop this website, alongside with some libraries like React Router, React Slick and Framer Motion to complement it, and I also created the styles using SASS.</p>
                    </motion.div>
                    
                }
            </AnimatePresence>
            </li>
            
            <li className="questions__item">
              <label className="questions__item--container" onClick={onToggleQuestion5}>
                <input type="checkbox" className="questions__item--checkbox" />
                <p className="questions__item--text">How can I contact you?</p>
                <img src={arrow} className="questions__item--arrow"/>
              </label>

              <AnimatePresence>
                {question5 && 
                
                    <motion.div
                        layout
                        key="question 5"
                        initial={{ opacity: 0, y: "-95%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, x: "-80%", transition: {duration: 0.4} }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="questions__item--content"
                    >
                        <p className="questions__item--content__text">You can contact me through my e-mail address or any of my social media accounts, they are linked on the footer of the website.</p>
                    </motion.div>
                    
                }
            </AnimatePresence>
            </li>
          </ul>
        </section>
    </main>
  )
}

export {Faqs}