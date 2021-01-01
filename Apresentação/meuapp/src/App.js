import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Certificado from './pages/Certificado';
import Contato from './pages/Contato'
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="certificado" element={<Certificado />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
