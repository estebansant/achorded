import React from 'react';
import '../styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoverPassword } from '../containers/RecoverPassword';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/recover-password" element={<RecoverPassword />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
