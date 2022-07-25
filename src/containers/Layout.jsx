import React from 'react';
import { Header } from '@components/Header/Header.jsx';
import { Footer } from '@components/Footer/Footer.jsx';
import '@styles/Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { Layout }