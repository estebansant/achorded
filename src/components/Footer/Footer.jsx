import React from 'react';
import '@styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <p>Contact me:</p>
        <ul>
          <li>
              <p>E-mail</p>
              <p>estebansant30@gmail.com</p>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/esteban-s-25b76113a">
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/estebansant">
              <p>GitHub</p>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/esteban_sant30">
              <p>Twitter</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__sections">
        <ul>
          <li>
            <a href="/electric-guitars">
              <p>Electric guitars</p>
            </a>
          </li>
          <li>
            <a href="/acoustic-guitars">
              <p>Acoustic guitars</p>
            </a>
          </li>
          <li>
            <a href="/accessories">
              <p>Accessories</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__information">
        <ul>
          <li>
            <a href="/about">
              <p>About</p>
            </a>
          </li>
          <li>
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