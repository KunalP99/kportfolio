import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectsCard from "./ProjectsCard";
import frontendInfo from "../information/frontendInfo";
import gamesInfo from "../information/gamesInfo";

export default function Projects() {
  const [frontendFilter, setFrontendFilter] = useState("frontend");

  // React hook which is the same as intersection observer
  const { ref: headingRef, inView: headerIsVisible } = useInView({
    triggerOnce: "true",
  });

  const { ref: frontendFilterRef, inView: frontendFilterIsVisible } = useInView(
    {
      triggerOnce: "true",
    }
  );

  const { ref: gamesFilterRef, inView: gamesFilterIsVisible } = useInView({
    triggerOnce: "true",
  });

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
        cypress={card.icons.cypress}
        to={card.to}
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
        url={card.url}
        target={card.target}
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
      <h2
        className={`${headerIsVisible ? "show-header" : ""}`}
        ref={headingRef}
      >
        My Projects
      </h2>
      <div className='filters-container'>
        <div
          onClick={setFilter}
          ref={frontendFilterRef}
          className={`frontend-filter ${
            frontendFilterIsVisible ? "show-frontend-filter" : ""
          }`}
        >
          Frontend
        </div>
        <div
          onClick={setFilter}
          ref={gamesFilterRef}
          className={`games-filter ${
            gamesFilterIsVisible ? "show-games-filter" : ""
          }`}
        >
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
