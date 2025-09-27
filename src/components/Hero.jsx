import React from "react";
import "../styles/style.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Hello, I'm <span className="name">Your Name</span></h1>
      <p>Frontend Developer | JavaScript Enthusiast</p>
      <div className="scroll-down">↓ Scroll</div>
    </section>
  );
}

export default Hero;
