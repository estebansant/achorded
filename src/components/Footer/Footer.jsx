import React from 'react';
import '@styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <p className="footer__contact--title">Liked my work?</p>
        <p className="footer__contact--subtitle">Contact me:</p>
        <ul className="footer__list">
          <li className="footer__list--mail">
              <a href="mailto:estebansant30@gmail.com">Send me an E-mail</a>
          </li>
          <li className="footer__list--item">
            <a href="https://www.linkedin.com/in/esteban-s-25b76113a">
              <p>LinkedIn</p>
            </a>
          </li>
          <li className="footer__list--item">
            <a href="https://github.com/estebansant">
              <p>GitHub</p>
            </a>
          </li>
          <li className="footer__list--item">
            <a href="https://twitter.com/esteban_sant30">
              <p>Twitter</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__sections">
        <ul className="footer__list">
          <li className="footer__list--item">
            <a href="/electric-guitars">
              <p>Electric guitars</p>
            </a>
          </li>
          <li className="footer__list--item">
            <a href="/acoustic-guitars">
              <p>Acoustic guitars</p>
            </a>
          </li>
          <li className="footer__list--item">
            <a href="/accessories">
              <p>Accessories</p>
            </a>
          </li>
          <li className="footer__list--item">
            <a href="/orders">
              <p>My orders</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__information">
        <ul className="footer__list">
          <li className="footer__list--item">
            <a href="/about">
              <p>About</p>
            </a>
          </li>
          <li className="footer__list--item">
            <a href="/questions">
              <p>FAQs</p>
            </a>
          </li>

        </ul>
      </div>
    </footer>
  )
}

export {Footer}