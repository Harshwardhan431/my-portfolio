import AllProjects from "../components/AboutMe/AllProjects";
import Education from "../components/AboutMe/Education";
import Experience from "../components/AboutMe/Experience";
import Fade from "react-reveal/Fade";
import Hackathons from "../components/AboutMe/Hackathons";
import Organizations from "../components/AboutMe/Organizations";
import React from "react";

export default function AboutMe() {
  return (
    <div>
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
            Bio
          </h1>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <p className="mx-auto w-full lg:w-3/4 mt-4 font-secondary font-normal text-gray-400 text-xl text-justify">
          👋 Hey there! I’m Yash Pande — a curious and passionate software developer with a deep-rooted love for building impactful tech. Currently working at HSBC, I bring experience across cloud technologies, full-stack development, and DevOps.
            {/* <br></br>
            <br></br> */}
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-3 font-secondary font-normal text-gray-400 text-xl text-justify">
          I graduated from Pune Institute of Computer Technology (PICT) with a degree in Electronics and Telecommunication Engineering, but my heart has always belonged to software. From building scalable web platforms to deploying cloud-native microservices, I thrive at the intersection of problem-solving and creativity.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-3 font-secondary font-normal text-gray-400 text-xl text-justify">
          My journey so far includes internships at places like Oro Labs, Fetch.ai and ZentrumHub, where I’ve worked on everything from localization and UI bugs to decentralized systems and API documentation. I’ve also built real-world applications—from a courier marketplace using AI agents to a hackathon project platform for students.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-3 font-secondary font-normal text-gray-400 text-xl text-justify">
          Outside the code editor, you'll find me leading teams, mentoring juniors, or battling it out on a chessboard or cricket field. I believe in learning by doing, leading by example, and always staying curious.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-3 font-secondary font-normal text-gray-400 text-xl text-justify">
          Let’s connect and build something awesome together. 😊
          </p>
        </div>
      </Fade>
      <Education />
      <Experience />
      <AllProjects />
      <Hackathons />
      <Organizations />
    </div>
  );
}
