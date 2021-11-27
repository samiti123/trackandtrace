import React from 'react';
import Auth from './Pages/Auth/Auth';
import Nav from './components/Nav/Nav';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Auth />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
