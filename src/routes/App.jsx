import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Website pages

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import { SignUp } from '../pages/SignUp';
import { MyAccount } from '../pages/MyAccount';
import { Checkout } from '../pages/Checkout';
import { Cart } from '../pages/Cart';
import { Faqs } from '../pages/Faqs';
import { Accessories } from '../pages/sections/Accessories';
import { ElectricGuitars } from '../pages/sections/ElectricGuitars';
import { AcousticGuitars } from '../pages/sections/AcousticGuitars';

// Electric guitars
import { StratocasterAS } from '../pages/sections/products/electric/StratocasterAS';
import { GibsonExplorer } from '../pages/sections/products/electric/GibsonExplorer';
import { LesPaulBlack } from '../pages/sections/products/electric/LesPaulBlack';
import { LesPaulBlue } from '../pages/sections/products/electric/LesPaulBlue';
import { JacksonRhoads } from '../pages/sections/products/electric/JacksonRhoads';
import { JacksonSoloist } from '../pages/sections/products/electric/JacksonSoloist';
import { PBass } from '../pages/sections/products/electric/PBass';
import { Stratocaster } from '../pages/sections/products/electric/Stratocaster';
import { Telecaster } from '../pages/sections/products/electric/Telecaster';
import { GibsonFlyingV } from '../pages/sections/products/electric/GibsonFlyingV';

// Acoustic guitars
import { DeanEAB } from '../pages/sections/products/acoustic/DeanEAB';
import { FenderConcert } from '../pages/sections/products/acoustic/FenderConcert';
import { FenderDreadnought } from '../pages/sections/products/acoustic/FenderDreadnought';
import { GibsonGWriter } from '../pages/sections/products/acoustic/GibsonGWriter';
import { J45_6Chords } from '../pages/sections/products/acoustic/J45_6Chords';
import { J45_12Chords } from '../pages/sections/products/acoustic/J45_12Chords';
import { YamahaC40 } from '../pages/sections/products/acoustic/YamahaC40';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Website pages routes */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/my-cart" element={<Cart />} />
            <Route exact path="/questions" element={<Faqs />} />
            <Route exact path="/accessories" element={<Accessories />} />
            <Route exact path="/electric-guitars" element={<ElectricGuitars />} />
            <Route exact path="/acoustic-guitars" element={<AcousticGuitars />} />

            {/* Electric guitars routes */}
            <Route exact path="/electric-guitars/stratocaster-as" element={<StratocasterAS />} />
            <Route exact path="/electric-guitars/gibson-explorer" element={<GibsonExplorer />} />
            <Route exact path="/electric-guitars/les-paul-black" element={<LesPaulBlack />} />
            <Route exact path="/electric-guitars/les-paul-blue" element={<LesPaulBlue />} />
            <Route exact path="/electric-guitars/jackson-rhoads" element={<JacksonRhoads />} />
            <Route exact path="/electric-guitars/jackson-soloist" element={<JacksonSoloist />} />
            <Route exact path="/electric-guitars/p-bass" element={<PBass />} />
            <Route exact path="/electric-guitars/stratocaster" element={<Stratocaster />} />
            <Route exact path="/electric-guitars/telecaster" element={<Telecaster />} />
            <Route exact path="/electric-guitars/gibson-flying-v" element={<GibsonFlyingV />} />

            {/* Acoustic guitars routes */}
            <Route exact path="/acoustic-guitars/dean-eab-bass" element={<DeanEAB />} />
            <Route exact path="/acoustic-guitars/fender-concert-fa-135ce" element={<FenderConcert />} />
            <Route exact path="/acoustic-guitars/fender-dreadnought" element={<FenderDreadnought />} />
            <Route exact path="/acoustic-guitars/gibson-g-writer" element={<GibsonGWriter />} />
            <Route exact path="/acoustic-guitars/gibson-j-45-6-chords" element={<J45_6Chords />} />
            <Route exact path="/acoustic-guitars/gibson-j-45-12-chords" element={<J45_12Chords />} />
            <Route exact path="/acoustic-guitars/yamaha-c-40" element={<YamahaC40 />} />

            {/* Not found route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
