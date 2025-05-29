import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProductPage from './components/ProductPage';
import { SaleBanner } from './components/SaleBanner';
import { Header } from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <SaleBanner />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;