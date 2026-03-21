
import {
  frontend,
  creator,
  web,
  tracker,
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
  algoquest,
  clivra,
  nutraxia,
  dineflow,
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
    name: "Algoquest",
    description:
      "Learn Data Structures and Algorithms through interactive games, visualizations, and coding challenges.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      }
    ],
    image: algoquest,
    source_code_link: "https://algoquest.riyaagrawal.dev",
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
    source_code_link: "https://dp.riyaagrawal.dev",
  },
  {
    name: "Nutraxia",
    description:
      "Build better routines, track your health, and let AI guide your wellness.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      }
    ],
    image: nutraxia,
    source_code_link: "https://nutraxia.riyaagrawal.dev",
  },{
    name: "DineFlow",
    description:
      "DineFlow brings smart dining to your restaurant.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      }
    ],
    image: dineflow,
    source_code_link: "https://dineflow.riyaagrawal.dev",
  },
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
    source_code_link: "https://quickchat.riyaagrawal.dev",
  },
  {
    name: "Clivra",
    description:
      "Clivra is a full-stack web application that converts student inputs into an adaptive, explainable daily study plan, continuously adjusted based on progress, confidence, and exam proximity.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      }
    ],
    image: clivra,
    source_code_link: "https://clivra.riyaagrawal.dev",
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
  {
    name: "Real Time Tracking System",
    description:
      "A real-time tracking system continuously monitors and displays live location and movement data to enable instant visibility, control, and decision-making.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Web Sockets",
        color: "green-text-gradient",
      },
    ],
    image: tracker,
    source_code_link: "https://github.com/riyaagrawal02/Real-time_Tracking_System",
  },
  
];

export { services, technologies,projects };
