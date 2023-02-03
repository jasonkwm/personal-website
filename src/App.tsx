import React from 'react';
import './App.css';
import "./components/NavBar";
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
