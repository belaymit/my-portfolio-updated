import React from 'react';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Testimonial from './components/testimonial/Testimonial';
import FloatingNav from './components/ui/FloatingNav';

const App = () => (
  <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonial />
      <Contacts />
    </main>
    <FloatingNav />
  </>
);

export default App;
