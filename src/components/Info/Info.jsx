import React from 'react';
import './Info.scss';
import astronauts from '@images/astronauts_vibing.png';

const Info = () => {
    return(
        <React.Fragment>
            <section className="info">
                <h2 className="info__title">Giving you, Your best sound.</h2>
                <div className="info__container">
                    <img className="info__container--image"src={astronauts} alt="astronauts dancing"/>
                    <p className="info__container--text">Random text about the website whose name is Achorded.</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export { Info }