import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useInitialState } from './useInitialState.js';

// Website pages

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Header } from '@components/Header/Header.jsx';
import { LeftMenu } from '../components/Header/Parts/LeftMenu.jsx';
import { MainLogo } from '../components/Header/Parts/MainLogo.jsx';
import { RightMenu } from '../components/Header/Parts/RightMenu.jsx';
import { Footer } from '@components/Footer/Footer.jsx';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import { SignUp } from '../pages/SignUp';
import { MyOrders } from '../pages/MyOrders';
import { Checkout } from '../pages/Checkout';
import { Faqs } from '../pages/Faqs';
import { Accessories } from '../pages/sections/Accessories';
import { AccessoriesDisplay } from '@components/ProductDisplay/AccessoriesDisplay';
import { ElectricGuitars } from '../pages/sections/ElectricGuitars';
import { ElectricDisplay } from '@components/ProductDisplay/ElectricDisplay';
import { AcousticGuitars } from '../pages/sections/AcousticGuitars';
import { AcousticDisplay } from '@components/ProductDisplay/AcousticDisplay';

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
import { Cuatro } from '../pages/sections/products/acoustic/Cuatro';

// Accessories
import { BigAmplifier } from '../pages/sections/products/accessories/BigAmplifier';
import { SmallAmplifier } from '../pages/sections/products/accessories/SmallAmplifier';
import { PlectrumBundle } from '../pages/sections/products/accessories/PlectrumBundle';
import { SpiderPlectrum } from '../pages/sections/products/accessories/SpiderPlectrum';
import { BlackPlectrum } from '../pages/sections/products/accessories/BlackPlectrum';
import { TemplarPlectrum } from '../pages/sections/products/accessories/TemplarPlectrum';
import { RockPlectrum } from '../pages/sections/products/accessories/RockPlectrum';
import { GuitarPlectrum } from '../pages/sections/products/accessories/GuitarPlectrum';


const App = () => {

  const {
    cart,
    price,
    added,
    addItem,
    addToCart,
    changeAmount,
    removeItem,
  } = useInitialState();

  return (
      <BrowserRouter>
        <Layout>
          <Header>
            <LeftMenu />
            <MainLogo />
            <RightMenu
              cart={cart}
              price={price}
              changeAmount={changeAmount}
              removeItem={removeItem}
            />
          </Header>
          <Routes>
            {/* Website pages routes */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/orders" element={<MyOrders />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/questions" element={<Faqs />} />

              {/* Product Display pages */}
              <Route exact path="/electric-guitars" element={<ElectricGuitars>
                <ElectricDisplay
                  addToCart={addToCart}
                  added={added}
                  addItem={addItem}
                />
              </ElectricGuitars>
              } />
              <Route exact path="/acoustic-guitars" element={<AcousticGuitars>
                <AcousticDisplay
                  addToCart={addToCart}
                  added={added}
                  addItem={addItem}
                />
              </AcousticGuitars>} />
              <Route exact path="/accessories" element={<Accessories>
                <AccessoriesDisplay
                  addToCart={addToCart}
                  added={added}
                  addItem={addItem}
                />
              </Accessories>} />

              {/* Electric guitars routes */}
              <Route exact path="/electric-guitars/stratocaster-as" element={<StratocasterAS
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/gibson-explorer" element={<GibsonExplorer
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/les-paul-black" element={<LesPaulBlack
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/les-paul-blue" element={<LesPaulBlue
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/jackson-rhoads" element={<JacksonRhoads
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/jackson-soloist" element={<JacksonSoloist
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/p-bass" element={<PBass
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/stratocaster" element={<Stratocaster
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/telecaster" element={<Telecaster
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />
              <Route exact path="/electric-guitars/gibson-flying-v" element={<GibsonFlyingV
                addToCart={addToCart}
                added={added}
                addItem={addItem}
              />} />

              {/* Acoustic guitars routes */}
              <Route exact path="/acoustic-guitars/dean-eab-bass" element={<DeanEAB 
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/acoustic-guitars/fender-concert-fa-135ce" element={<FenderConcert
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/acoustic-guitars/fender-dreadnought" element={<FenderDreadnought
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/acoustic-guitars/gibson-g-writer" element={<GibsonGWriter 
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/acoustic-guitars/gibson-j-45-6-chords" element={<J45_6Chords
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/acoustic-guitars/gibson-j-45-12-chords" element={<J45_12Chords
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/acoustic-guitars/yamaha-c-40" element={<YamahaC40
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/acoustic-guitars/cuatro" element={<Cuatro
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />

              {/* Accessories routes */}
              <Route exact path="/accessories/studio-amplifier" element={<BigAmplifier
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/accessories/portable-amplifier" element={<SmallAmplifier
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/accessories/plectrum-bundle" element={<PlectrumBundle
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/accessories/plectrum-spider" element={<SpiderPlectrum
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/accessories/plectrum-templar" element={<TemplarPlectrum
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/accessories/plectrum-black" element={<BlackPlectrum 
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/accessories/plectrum-guitar" element={<GuitarPlectrum
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />
              <Route exact path="/accessories/plectrum-rock" element={<RockPlectrum
                addToCart={addToCart}
                added={added}
                addItem={addItem}  
              />} />

              {/* Not found route */}
              <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
  )
}

export default App
