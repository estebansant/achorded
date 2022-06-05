import React from 'react';
import '@styles/Home.scss';
import { Banner } from '@components/Banner/Banner.jsx';
import { Highlights } from '@components/Highlights/Highlights.jsx';
import { Info } from '@components/Info/Info.jsx';
import { Story } from '@components/Story/Story.jsx';

const Home = () => {
  return (
    <main>
      <Banner />
      <Highlights />
      <Info />
      <Story />
    </main>
  )
}

export { Home }