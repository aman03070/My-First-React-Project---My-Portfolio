import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
    <div className="hero-content">
    <h2>Aman Jaiswal</h2>
    <p>
    Passionate Frontend Developer | Transforming Ideas into Seamless and
    Visually Stunning Web Solutions
    </p>
    </div>
    
    <div className="hero-img">
    <div>
    <div className="tech-icon">
    <img src="./assets/images/logo512.png" alt="" />
    </div>
    <img src="./assets/images/aman.png" alt="" />
    </div>
    
    <div>
    <div className="tech-icon">
    <img src="./assets/images/1.png" alt="" />
    </div>
    <div className="tech-icon">
    <img src="./assets/images/2.png" alt="" />
    </div>
    <div className="tech-icon">
    <img src="./assets/images/3.png" alt="" />
    </div>
    </div>
    </div>
    </section>
  )
}

export default Hero
