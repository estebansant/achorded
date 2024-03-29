import React from 'react';
import '@styles/Highlights/ProductHighlights.scss';
import { motion, AnimatePresence } from "framer-motion";
import yamahaClassic from '@images/acoustic/yamaha_classic_c-40.svg';
import gibsonWriter from '@images/acoustic/gibson_g-writer-red.svg';
import eabAcousticBass from '@images/acoustic/dean_eab_acoustic_bass.svg';

const AcousticHighlights = () => {
  return (
    <React.Fragment>
        <AnimatePresence>
            <motion.section
                layout
                key="acoustic_highlight"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.2,
                        x: -300,
                    }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="wrapper"
            >
                <div className="showcase">
                    <a className="showcase-link" href="/acoustic-guitars/yamaha-c-40">
                        <img src={yamahaClassic} alt="yamaha classic guitar" className="showcase__image"/>
                        <div className="showcase__text--container">
                            <h4>Yamaha Classic</h4>
                            <p>Ideal for beginners.</p>
                        </div>
                    </a>
                </div>

                <div className="showcase">
                    <a className="showcase-link" href="/acoustic-guitars/gibson-g-writer">
                        <img src={gibsonWriter} alt="gibson writer guitar" className="showcase__image"/>
                        <div className="showcase__text--container">
                            <h4>Gibson G-Writer</h4>
                            <p>Take acoustic to another level.</p>
                        </div>
                    </a>
                </div>

                <div className="showcase">
                    <a className="showcase-link" href="/acoustic-guitars/dean-eab-bass">
                        <img src={eabAcousticBass} alt="dean acoustic bass" className="showcase__image"/>
                        <div className="showcase__text--container">
                            <h4>Dean Acoustic Bass</h4>
                            <p>Get that bass going.</p>
                        </div>
                    </a>
                </div>
            </motion.section>
        </AnimatePresence>
        
    </React.Fragment>
  )
}

export { AcousticHighlights }