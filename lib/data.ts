import React from "react";

import { FaReact } from "react-icons/fa";

import {CPP}  from "@/public/Images/CPP";
import {PythonLight}  from "@/public/Images/PythonLight";
import {PythonDark}  from "@/public/Images/PythonDark";
import {JavaDark} from "@/public/Images/JavaDark";
import {JavaLight} from "@/public/Images/JavaLight";
import {HTML} from "@/public/Images/HTML";
import {CSS} from "@/public/Images/CSS";
import {JavaScript} from "@/public/Images/JavaScript";
import {ReactLight} from "@/public/Images/ReactLight";
import {ReactDark} from "@/public/Images/ReactDark";
import {NodeJSLight} from "@/public/Images/NodeJSLight";
import {NodeJSDark} from "@/public/Images/NodeJSDark";
import {ExpressJSLight} from "@/public/Images/ExpressJSLight";
import {ExpressJSDark} from "@/public/Images/ExpressJSDark";
import {NextJSLight} from "@/public/Images/NextJSLight";
import {NextJSDark} from "@/public/Images/NextJSDark";
import {Git} from "@/public/Images/Git";
import {TailwindCSSLight} from "@/public/Images/TailwindCSSLight";
import {TailwindCSSDark} from "@/public/Images/TailwindCSSDark";
import {MongoDB} from "@/public/Images/MongoDB";
import {MySQLLight} from "@/public/Images/MySQLLight";
import {MySQLDark} from "@/public/Images/MySQLDark";
import {Bootstrap} from "@/public/Images/Bootstrap";

//import {  JavaDark, JavaLight, HTML, CSS, JavaScript, ReactLight, ReactDark, NodeJSLight, NodeJSDark, ExpressJSLight, ExpressJSDark, NestJSLight, NextJSLight, NextJSDark, Git, TailwindCSSLight, TailwindCSSDark, MongoDB, MySQLLight, MySQLDark, Bootstrap } from "@fdorantesm/react-skill-icons";

import money_trackerImg from "@/public/money_tracker.png";
import blogImg from "@/public/blog.png";
import chatappImg from "@/public/chatapp.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  /*{
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },*/
  {
    title: "Full-Stack Developer",
    location: "Bengaluru, India",
    description:
      "During my Full-Stack Development internship at Bharat Intern from May to June 2024, I completed three projects: a secure registration and login page, a blog website with CRUD functionality, and a money tracker app for managing income and expenses. This experience enhanced my skills in both front-end and back-end development. ",
    icon: React.createElement(FaReact),
    date: "May 2024 - June 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Chat-WebApp",
    description:
      "A chat web app where users can create rooms and chat with each other. It has features like real-time chat and room creation.",
    tags: ["React", "Next.js", "Tailwind", "SocketIO", "Node.js"] ,
    imageUrl: chatappImg,
    ProjectLink:"https://github.com/vedant-35/Chat-WebApp"
  },
  {
    title: "Money Tracker App",
    description:
      "A money tracker app  to track income and expenses, featuring transaction management and balance display. A part of Bharat Intern project",
    tags: ["HTML","JavaScript", "Node.js", "Tailwind", "MongoDB" ] ,
    imageUrl: money_trackerImg,
    ProjectLink:"https://github.com/vedant-35/Money-Tracker-WebApp"
  },
  {
    title: "Blog-Website",
    description:
      "A blog website where users can read and write blogs. It has features like  creating, updating and deleting blogs. It's a part of Bharat Intern project",
    tags: ["HTML","JavaScript", "Node.js", "MongoDB", "Bootstrap CSS"] ,
    imageUrl: blogImg,
    ProjectLink:"https://github.com/vedant-35/Blog-Website"
  },
] as const;

export const skillsData = [
  {name:"C/C++", iconL: CPP, iconD:CPP},
  {name:"Python", iconL: PythonLight, iconD:PythonDark},
  {name:"Java", iconL: JavaLight, iconD:JavaDark},
  {name:"HTML", iconL: HTML, iconD:HTML},
  {name:"CSS", iconL: CSS, iconD:CSS},
  {name:"Bootstrap", iconL:Bootstrap, iconD:Bootstrap},
  {name:"Tailwind", iconL:TailwindCSSLight, iconD:TailwindCSSDark},
  {name:"JavaScript", iconL: JavaScript, iconD:JavaScript},
  {name:"React", iconL: ReactLight, iconD:ReactDark},
  {name:"Node.js", iconL:NodeJSLight, iconD:NodeJSDark},
  {name:"ExpressJs", iconL:ExpressJSLight, iconD:ExpressJSDark},
  {name:"Next.js", iconL:NextJSLight, iconD:NextJSDark},
  {name:"Git", iconL:Git, iconD:Git},
  {name:"MongoDB", iconL:MongoDB, iconD:MongoDB},
  {name:"MySQL", iconL:MySQLLight, iconD:MySQLDark},
  
] 