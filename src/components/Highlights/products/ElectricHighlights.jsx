import React from 'react';
import '@styles/Highlights/ProductHighlights.scss';
import { motion, AnimatePresence } from "framer-motion";
import stratocaster from '@images/electric/stratocaster-red.svg';
import telecaster from '@images/electric/telecaster-brown.svg';
import jacksonSoloist from '@images/electric/jackson_soloist-black.svg';

const ElectricHighlights = () => {
  return (
      <React.Fragment>
        <AnimatePresence>
            <motion.section
                layout
                key="electric_highlight"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.2,
                        x: -300,
                    }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="wrapper"
            >
                <div className="showcase">
                    <a className="showcase-link" href="/electric-guitars/stratocaster">
                        <img className="showcase__image" src={stratocaster} alt="stratocaster red electric guitar"/>
                        <div className="showcase__text--container">
                            <h4>The Stratocaster</h4>
                            <p>A trustworthy Fender guitar.</p>
                        </div>
                    </a>
                </div>
                
                <div className="showcase">
                    <a className="showcase-link" href="/electric-guitars/telecaster">
                        <img className="showcase__image" src={telecaster} alt="telecaster wooden guitar"/>
                        <div className="showcase__text--container">
                            <h4>Fender Telecaster</h4>
                            <p>Our classical pleasure.</p>
                        </div>
                    </a>
                </div>
                
                <div className="showcase">
                    <a className="showcase-link" href="/electric-guitars/jackson-soloist">
                        <img className="showcase__image" src={jacksonSoloist} alt="jackson soloist black electric guitar"/>
                        <div className="showcase__text--container">
                            <h4>Jackson Soloist</h4>
                            <p>Black in color, pure of soul.</p>
                        </div>
                    </a>
                </div>
            </motion.section>
        </AnimatePresence>
    </React.Fragment>
  )
}

export { ElectricHighlights }