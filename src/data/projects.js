import xenia from "../images/coviupdate.png";
import courier from "../images/courierMarketplace.jpeg";
import online from "../images/online-uni.png";
export const projectsData = [
  {
    name: "Online University",
    description:
    "Developed a full-stack web application using Spring Boot (Java) and Angular, designing and implementing RESTful APIs with Spring MVC architecture and integrating modular microservices to ensure scalability and maintainability",
    image: online,
    code: "",
    deployment: "https://github.com/MiniProjectWissen",
    techStack: ["Spring Boot" , "Angular" , "Java" , "SQL"],

    // sysArch: "https://sysarch.burhanuddinmerchant.me/fnf.html",
  },
  {
    name: " PICT SPORT APP",
    description:
      "Aim of this app is to digitalize the system of the Sports Department of our college .Features included :‑ Sports event announcements, Equipment availability , Group Chat functionality,Calendar displaying event dates",
    image: courier,
    code: "",
    techStack: [
      "Flutter",
      "Firebase"
    ],
    deployment: "https://github.com/Pict-Sport-App/Pict-Sport-App"

    // sysArch: "https://www.pcsbxenia.com/",
  },
  {
    name: "COVIUPDATE",
    description:
      "Developed an android app using Flutter to spread awareness about Covid 19 pandemic.Integrated Covin Setu API in flutter application.User can access all the necessary information about slots available for vaccination in all the districts in India.",
    image: xenia,
    code: "",
    techStack: ["Flutter" , "Covin Setu API"],
    deployment: "https://github.com/Harshwardhan431/Coviupdates",

    // sysArch: "https://www.pcsbxenia.com/",
  }
];
