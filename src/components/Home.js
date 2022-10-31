import React from "react";
import Header from "./Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Quote />
    </div>
  );
}
