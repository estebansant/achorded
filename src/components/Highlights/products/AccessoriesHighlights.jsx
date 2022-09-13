import React from 'react';
import '@styles/Highlights/GuitarsHighlights.scss';
import amplifierBig from '@images/accesories/amplifier_big.png'
import plectrumBundle from '@images/accesories/plectrum_bundle.svg';
import amplifierSmall from '@images/accesories/amplifier_small.png';

const AccessoriesHighlights = () => {
  return (
    <React.Fragment>
        <section className="wrapper">
            <div className="showcase">
                <a className="showcase-link" href="/acoustic-guitars/gibson-g-writer">
                    <img src={amplifierBig} alt="studio amplifier" className="showcase__image"/>
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
                    <img src={amplifierSmall} alt="small and portable an=mplifier" className="showcase__image"/>
                    <div className="showcase__text--container">
                        <h4>Portable Amplifier</h4>
                        <p>Bring your sound everywhere.</p>
                    </div>
                </a>
            </div>
        </section>
    </React.Fragment>
  )
}

export { AccessoriesHighlights }