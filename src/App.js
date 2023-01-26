import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import FloatingNav from './components/ui/FloatingNav';

const App = () => (
  <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
    </main>
    <FloatingNav />
  </>
);

export default App;
