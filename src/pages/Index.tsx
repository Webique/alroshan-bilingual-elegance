import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Factory from '@/components/Factory';
import Slogan from '@/components/Slogan';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Factory />
      <Slogan />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
