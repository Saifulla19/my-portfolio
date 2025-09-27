import React from "react";
import "../styles/style.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm <span className="name">Your Name</span>, a frontend developer.
          </p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/200" alt="Your Name" />
        </div>
      </div>
    </section>
  );
}

export default About;
