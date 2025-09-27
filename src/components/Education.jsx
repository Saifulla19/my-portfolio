import React from "react";
import "../styles/style.css";

function Education() {
  const educationList = [
    {
      degree: "B.Tech in Computer Science",
      institution: "XYZ University",
      year: "2020 - 2024",
    },
    {
      degree: "High School",
      institution: "ABC School",
      year: "2018 - 2020",
    },
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
