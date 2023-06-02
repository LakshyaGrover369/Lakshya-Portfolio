import React from 'react';
import Particle from './Components/Particle';
import TopNavbar from './Components/TopNavbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Slider from './Components/Slider';
import Contact from './Components/Contact';
import './App.css';
// import Projects from './Components/Projects'
// import '../src/assets/css/Slider.css';


function App() {


  return (
    <div className="App">
      {/* <Projects /> */}
      <Particle />
      <TopNavbar />
      <Hero />
      <Skills />
      <Slider />
      <Contact />

    </div>
  );
}

export default App;
