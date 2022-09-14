import React from 'react';
import '@styles/Highlights/Highlights.scss';
import { ElectricHighlights } from './products/ElectricHighlights';
import { AcousticHighlights } from './products/AcousticHighlights';
import { AccessoriesHighlights } from './products/AccessoriesHighlights';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

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
            <h3 className="highlights__sections--title" onClick={() => changeHighlight(1)}>Electric sessions</h3>
            <h3 className="highlights__sections--title" onClick={() => changeHighlight(2)}>Acoustic guitars</h3>
            <h3 className="highlights__sections--title" onClick={() => changeHighlight(3)}>For styling</h3> 
          </div>

          <hr/>
          
          <LayoutGroup>
            <AnimatePresence>
              <motion.div
                layout
                className="highlights__products"
              >
                    {highlightState === 1 &&
                        <ElectricHighlights />
                    }
                    {highlightState === 2 &&
                        <AcousticHighlights />
                    }
                    {highlightState === 3 &&
                        <AccessoriesHighlights />
                    }
              </motion.div>
            </AnimatePresence>
          </LayoutGroup>
           
      </section>
    )
}

export {Highlights}