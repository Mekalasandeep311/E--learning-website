import React from 'react';
import './App.css';

// Import all components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CoursesSection from './components/CoursesSection';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeatureSection />
      <CoursesSection />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

