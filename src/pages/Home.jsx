import React from 'react';
import '@styles/Home.scss';
import banner from '@images/main_banner.jpg';

const Home = () => {
  return (
    <main>
      <section className="banner">
        <div className="banner__container">
          <img src={banner} alt="music festival"/>
          <div className="banner__container--text">
            <h1>Tuning the chords <br/> of your rhythm.</h1>
            <p>Shop amazing guitars <br/> from our collection.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export { Home }