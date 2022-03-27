import React from 'react';
import '.@styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SignUp } from '../pages/SignUp';
import { MyAccount } from '../pages/MyAccount';
import { Checkout } from '../pages/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
