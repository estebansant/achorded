import React from 'react';
import '@styles/Highlights/ProductHighlights.scss';
import { motion, AnimatePresence } from "framer-motion";
import amplifierBig from '@images/accesories/amplifier_big.png'
import plectrumBundle from '@images/accesories/plectrum_bundle.svg';
import amplifierSmall from '@images/accesories/amplifier_small.png';

const AccessoriesHighlights = () => {
  return (
    <React.Fragment>
        <AnimatePresence>
            <motion.section
                layout
                key="accessories_highlight"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.2,
                        x: -300,
                    }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="wrapper"
            >
                <div className="showcase">
                    <a className="showcase-link" href="/acoustic-guitars/gibson-g-writer">
                        <img src={amplifierBig} alt="studio amplifier" className="big__amplifier"/>
                        <div className="showcase__text--container">
                            <h4>Studio Amplifier</h4>
                            <p>All you need... and more</p>
                        </div>
                    </a>
                </div>

                <div className="showcase">
                    <a className="showcase-link" href="/acoustic-guitars/gibson-g-writer">
                        <img src={plectrumBundle} alt="bundle of plectrums" className="showcase__image"/>
                        <div className="showcase__text--container">
                            <h4>Plectrum Bundle</h4>
                            <p>Always have some to spare.</p>
                        </div>
                    </a>
                </div>

                <div className="showcase">
                    <a className="showcase-link" href="/acoustic-guitars/gibson-g-writer">
                        <img src={amplifierSmall} alt="small and portable an=mplifier" className="small__amplifier"/>
                        <div className="showcase__text--container">
                            <h4>Portable Amplifier</h4>
                            <p>Bring your sound everywhere.</p>
                        </div>
                    </a>
                </div>
            </motion.section>
        </AnimatePresence>
    </React.Fragment>
  )
}

export { AccessoriesHighlights }