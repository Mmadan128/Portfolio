import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'John Doe | Web Developer';
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;