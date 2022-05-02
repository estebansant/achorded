import React from 'react';
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

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
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
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
