import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import frontendInfo from "../information/frontendInfo";
import gamesInfo from "../information/gamesInfo";

export default function Projects() {
  const [frontendFilter, setFrontendFilter] = useState("frontend");

  // Mapping over each object in frontendInfo and mapping each prop to data from that object
  const frontendCardElements = frontendInfo.map((card) => {
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
        class={card.class}
      />
    );
  });

  const gamesCardElements = gamesInfo.map((card) => {
    return (
      <ProjectsCard
        key={card.title}
        title={card.title}
        desc={card.desc}
        csharp={card.icons.csharp}
        unity={card.icons.unity}
        photoshop={card.icons.photoshop}
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
