import React from "react";
import "./projects.css";

const projectsArr = [
  {
    imgSrc: "./images/leon.png",
    title: "Leon Template",
    pSrc: "https://mennatallah-gamal.github.io/HTML_And_CSS_Template_One/",
    repoSrc: "https://github.com/Mennatallah-Gamal/HTML_And_CSS_Template_One",
  },
  {
    imgSrc: "./images/kasper.png",
    title: "Kasper",
    pSrc: "https://mennatallah-gamal.github.io/HTML_AND_CSS_TEMPLATE_TWO/",
    repoSrc: "https://github.com/Mennatallah-Gamal/HTML_AND_CSS_TEMPLATE_TWO",
  },
  {
    imgSrc: "./images/Flyo-landing-page.jpg",
    title: "Fylo Landing Page",
    pSrc: "https://mennatallah-gamal.github.io/Fylo-Landing-page/",
    repoSrc: "https://github.com/Mennatallah-Gamal/Fylo-Landing-page",
  },
  {
    imgSrc: "./images/clipboard-landing-page.jpg",
    title: "Clipboard Landing Page",
    pSrc: "https://mennatallah-gamal.github.io/Landing-Page/",
    repoSrc: "https://github.com/Mennatallah-Gamal/Landing-Page",
  },
];
const Projects = () => {
  return (
    <section className="container" id="projects">
      <h2 className="main-title">projects</h2>
      <div className="projects flex">
        {projectsArr.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.imgSrc} alt="" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-preview flex">
                <a
                  href={project.repoSrc}
                  target="_blank"
                  className="icon-github"
                ></a>
                <a
                  href={project.pSrc}
                  target="_blank"
                  className="icon-arrow-right"
                ></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
