import React from 'react';
import '@styles/Highlights.scss';
import { ElectricHighlights } from './products/ElectricHighlights';
import { AcousticHighlights } from './products/AcousticHighlights';
import { AccessoriesHighlights } from './products/AccessoriesHighlights';

const Highlights = () =>{

    let [highlightState, setHighlightState] = React.useState('false');
    let electric = document.getElementById("electric");
    let acoustic = document.getElementById("acoustic");
    let accessories = document.getElementById("accessories");

    let onClick = () =>{
        setHighlightState(true);
    }

    return(
        <section className="highlights">

          <h2 className="highlights__title">Our highlights</h2>

          <div className="highlights__sections">
            <h3 id="electric" onClick={onClick}>Electric sessions</h3>
            <h3 id="acoustic" onClick={onClick}>Acoustic guitars</h3>
            <h3 id="accessories" onClick={onClick}>For styling</h3> 
          </div>

          <hr/>

          <div className="highlights__products">
            <ElectricHighlights />
          </div>
           
      </section>
    )
}

export {Highlights}