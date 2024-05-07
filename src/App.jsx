import React from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Navbar/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
const App = () => {
  return (
    <>
    <Navbar />
    <div className="container">
    <Hero />
    <Skills />
    <Experience />
    <WorkExperience />
    <ContactMe />
    </div>
    <Footer />
    </>
  )
}

export default App;

