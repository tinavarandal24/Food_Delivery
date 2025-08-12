import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPopUp from './components/LoginPopUp';
import Cart from './components/Cart';
import PlaceOrder from './components/PlaceOrder';
import Contact_us from './components/Contact_us';
import About_us from './components/About_us';


// Pages
import Home from './pages/Home';
// import About_us from './components/About_us';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}

      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact_us />} />
        <Route path="/about" element={<About_us />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
