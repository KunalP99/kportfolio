import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  const cardInfo = [
    {
      title: "On1 Solutions",
      desc: "Tasked to renovate their website, I helped design/develop the product as well as create custom animations from the ground up.",
      icons: {
        html: "html.svg",
        css: "css.svg",
        js: "js.svg",
      },
      filter: "frontend",
    },
    {
      title: "CV Builder",
      desc: "A website that dynamically updates a page once you enter your information inside the form to create a CV.",
      icons: {
        html: "html.svg",
        sass: "sass.svg",
        js: "js.svg",
        react: "react.svg",
      },
      filter: "frontend",
    },
    {
      title: "Personal Portfolio",
      desc: "To showcase some of my work, I decided to create a portfolio using everything I have learnt so far.",
      icons: {
        html: "html.svg",
        sass: "sass.svg",
        js: "js.svg",
        react: "react.svg",
      },
      filter: "frontend",
    },
    {
      title: "Weather App",
      desc: "Fetching data from an API; I display the information in an meaningful way while allowing the user to search up different cities weather.",
      icons: {
        html: "html.svg",
        sass: "sass.svg",
        js: "js.svg",
      },
      filter: "frontend",
    },
  ];

  const [frontendFilter, setFrontendFilter] = useState("frontend");

  const frontendCardElements = cardInfo.map((card) => {
    return (
      <ProjectsCard
        key={card.title}
        title={card.title}
        desc={card.desc}
        html={card.icons.html}
        css={card.icons.css}
        sass={card.icons.sass}
        js={card.icons.js}
        react={card.icons.react}
      />
    );
  });

  const gamesCardElements = cardInfo.map((card) => {
    return (
      <ProjectsCard
        title={card.title}
        desc={card.desc}
        html={card.icons.html}
      />
    );
  });

  function setFilter(e) {
    const frontendFilter = document.querySelector(".frontend-filter");
    const gamesFilter = document.querySelector(".games-filter");

    if (e.target.textContent === "Frontend") {
      setFrontendFilter("frontend");
      frontendFilter.style.backgroundColor = "#2F9BFF";
      gamesFilter.style.backgroundColor = "#0d1219";
    } else {
      setFrontendFilter("games");
      frontendFilter.style.backgroundColor = "#0d1219";
      gamesFilter.style.backgroundColor = "#2F9BFF";
    }
  }

  return (
    <section id='projects' className='projects-container'>
      <h2>My Projects</h2>
      <div className='filters-container'>
        <div onClick={setFilter} className='frontend-filter'>
          Frontend
        </div>
        <div onClick={setFilter} className='games-filter'>
          Games
        </div>
      </div>
      <div className='grid-container'>
        {frontendFilter === "frontend"
          ? frontendCardElements
          : gamesCardElements}
      </div>
    </section>
  );
}
