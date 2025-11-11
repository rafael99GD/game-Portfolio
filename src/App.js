import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedGames from './components/FeaturedGames';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <FeaturedGames />
      <Footer />
    </div>
  );
}

export default App;