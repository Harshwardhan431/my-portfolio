import CollabCTA from "../components/Homepage/CollabCTA";
import Hero from "../components/Homepage/Hero";
import Projects from "../components/Homepage/Projects";
import React from "react";
import Recommendations from "../components/Homepage/Recommendations";
import Skills from "../components/Homepage/Skills";
import Certificate from "../components/Homepage/Certificate";


export default function Homepage() {
  return (
    <div className="container">
      <Hero />
      <Certificate />
      <Skills />
      <Projects />
      <Recommendations />
      <CollabCTA />
    </div>
  );
}
