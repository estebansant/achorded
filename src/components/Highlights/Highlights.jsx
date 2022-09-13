import React from 'react';
import '@styles/Highlights/Highlights.scss';
import { ElectricHighlights } from './products/ElectricHighlights';
import { AcousticHighlights } from './products/AcousticHighlights';
import { AccessoriesHighlights } from './products/AccessoriesHighlights';
import { motion, AnimatePresence } from "framer-motion";

const Highlights = () =>{

    let [highlightState, setHighlightState] = React.useState(1);

    const changeHighlight = (id) =>{
      if(highlightState != id){
        setHighlightState(id);
      }
    }

    return(
        <section className="highlights">

          <h2 className="highlights__title">Our highlights</h2>

          <div className="highlights__sections">
            <h3 className="electric" onClick={() => changeHighlight(1)}>Electric sessions</h3>
            <h3 className="acoustic" onClick={() => changeHighlight(2)}>Acoustic guitars</h3>
            <h3 className="accessories" onClick={() => changeHighlight(3)}>For styling</h3> 
          </div>

          <hr/>

            <div className="highlights__products">
              <AnimatePresence>
                {highlightState === 1 &&
                  <motion.div
                    key="electric_highlight"
                    initial={{ opacity: 0, x: "110%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0,
                            x: "-110%",
                            transition: {duration: 0.3}
                        }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <ElectricHighlights />
                  </motion.div>
                }
              </AnimatePresence>
              <AnimatePresence>
                {highlightState === 2 &&
                  <motion.div
                    key="acoustic_highlight"
                    initial={{ opacity: 0, x: "110%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0,
                            x: "-110%",
                            transition: {duration: 0.3}
                        }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <AcousticHighlights />
                  </motion.div>
                }
              </AnimatePresence>
              <AnimatePresence>
                {highlightState === 3 &&
                  <motion.div
                    key="accessories_highlight"
                    initial={{ opacity: 0, x: "110%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0,
                            x: "-110%",
                            transition: {duration: 0.3}
                        }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <AccessoriesHighlights />
                  </motion.div>
                }
              </AnimatePresence>
            </div>
           
      </section>
    )
}

export {Highlights}