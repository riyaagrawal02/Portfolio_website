import {
  frontend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  chatapp,
  musicapp,
  automation,
  diabetes_predictor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title:"AI & Automation",
    icon: automation,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  
];

const projects = [
  {
    name: "Real time ChatApp",
    description:
      "Developed a real-time chat application using MERN stack and Socket.io, enabling seamless instant messaging and live user connectivity.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "WebSocket",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/riyaagrawal02/Quick-ChatApp",
  },
  {
    name: "Diabetes Predictor",
    description:
      "A machine learning project for predicting the likelihood of diabetes in individuals using medical and demographic data.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
    ],
    image: diabetes_predictor,
    source_code_link: "https://github.com/riyaagrawal02/diabetes-predictor",
  },
  {
    name: "Music Academy",
    description:
      "Created a Music Academy website with a clean design to promote music courses and events.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Acertinity UI",
        color: "green-text-gradient",
      }
    ],
    image: musicapp,
    source_code_link: "https://github.com/riyaagrawal02/musicSchool",
  },
];

export { services, technologies,projects };
