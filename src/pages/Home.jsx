import React from 'react';
import '@styles/Home.scss';
import { Banner } from '@components/Banner/Banner.jsx';
import { Highlights } from '@components/Highlights/Highlights.jsx'

const Home = () => {
  return (
    <main>
      <Banner />
      <Highlights />
      
    </main>
  )
}

export { Home }