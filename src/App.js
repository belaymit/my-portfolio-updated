import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => (
  <>
    <Header />
    <main className="main">
      <Home />
      <About />
    </main>
  </>
);

export default App;
