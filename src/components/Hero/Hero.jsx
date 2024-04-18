import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/javascript-1-48.png" />
          </div>
          <img src="./assets/images/logo192.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/javascript-1-48.png" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/javascript-1-48.png" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/javascript-1-48.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
