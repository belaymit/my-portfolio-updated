import React from 'react';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
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
      <Portfolio />
      <Testimonial />
      <Contacts />
    </main>
    <Footer />
    <FloatingNav />
  </>
);

export default App;
