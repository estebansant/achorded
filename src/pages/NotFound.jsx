import React from 'react';
import '@styles/NotFound.scss';
import errorSmall from'@images/error404/error_404_small.png';
import errorMedium from '@images/error404/error_404_medium.png';
import errorLarge from'@images/error404/error_404_large.png';

const NotFound = () => {

  return (
    <main>
      <div className="NotFound__container">
        <picture className="NotFound__image">
          <source media="(min-width:929px)" srcSet={errorLarge} alt="error 404" />
          <source media="(min-width:767px)" srcSet={errorMedium} alt="error 404" />
          <img src={errorSmall} alt="error 404" />
        </picture>
        <h2 className="NotFound__title">Error 404:</h2>
        <p className="NotFound__text">We could not find what you were looking for</p>
      </div>
    </main>
  )
}

export { NotFound }