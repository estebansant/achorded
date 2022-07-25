import React from 'react';
import '@styles/Info.scss';
import astronauts from '@images/astronauts_vibing.png';

const Info = () => {
    return(
        <React.Fragment>
            <section className="info">
                <h2 className="info__title">Giving you, Your best sound.</h2>
                <div className="info__container">
                    <p className="info__container--text">We stablished Achorded with the objective of connecting instruments with people to keep creating amazing music. <br /><br />

                    It can be hard to pick the right one, so we made it easy for you. We give you the background story of each model, tell you the specifications, and what makes it unique for you to make the best choice according to your tastes.<br /><br />
                    
                    We give you the tools, you take the decision to bring home your desired guitar.
                    </p>
                    <img className="info__container--image"src={astronauts} alt="astronauts dancing"/>
                </div>
            </section>
        </React.Fragment>
    )
}

export { Info }