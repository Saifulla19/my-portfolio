import React from "react";
import "../styles/style.css";

function Projects() {
  const projectList = [
    { title: "Portfolio Website", desc: "Built with React & CSS", link: "#" },
    { title: "Todo App", desc: "Manage tasks efficiently", link: "#" },
    { title: "E-commerce UI", desc: "React + Tailwind inspired", link: "#" },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
