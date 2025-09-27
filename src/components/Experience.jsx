import React from "react";
import "../styles/style.css";

function Experience() {
  const experienceList = [
    {
      role: "Frontend Developer Intern",
      company: "ABC Company",
      duration: "Jun 2023 - Aug 2023",
      desc: "Worked on React projects and implemented responsive UI designs.",
    },
    {
      role: "Web Developer Intern",
      company: "XYZ Solutions",
      duration: "Jan 2023 - May 2023",
      desc: "Built interactive websites using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceList.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <span>{exp.duration}</span>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
