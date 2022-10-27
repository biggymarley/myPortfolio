import React from "react";
import c from "../../assets/imgs/c.png";
import camagru from "../../assets/imgs/camagru.png";
import css from "../../assets/imgs/css.png";
import html from "../../assets/imgs/html.png";
import js from "../../assets/imgs/js.png";
import s10 from "../../assets/imgs/kalrokScreens/10.jpeg";
import s11 from "../../assets/imgs/kalrokScreens/11.jpeg";
import s12 from "../../assets/imgs/kalrokScreens/12.jpeg";
import s1 from "../../assets/imgs/kalrokScreens/1.jpeg";
import s2 from "../../assets/imgs/kalrokScreens/2.jpeg";
import s3 from "../../assets/imgs/kalrokScreens/3.jpeg";
import s4 from "../../assets/imgs/kalrokScreens/4.jpeg";
import s5 from "../../assets/imgs/kalrokScreens/5.jpeg";
import s6 from "../../assets/imgs/kalrokScreens/6.jpeg";
import s7 from "../../assets/imgs/kalrokScreens/7.jpeg";
import s8 from "../../assets/imgs/kalrokScreens/8.jpeg";
import s9 from "../../assets/imgs/kalrokScreens/9.jpeg";

import p10 from "../../assets/imgs/ProjectFreelance/p10.png";
import p11 from "../../assets/imgs/ProjectFreelance/p11.png";
import p12 from "../../assets/imgs/ProjectFreelance/p12.png";
import p13 from "../../assets/imgs/ProjectFreelance/p13.png";

import p1 from "../../assets/imgs/ProjectFreelance/p1.png";
import p2 from "../../assets/imgs/ProjectFreelance/p2.png";
import p3 from "../../assets/imgs/ProjectFreelance/p3.png";
import p4 from "../../assets/imgs/ProjectFreelance/p4.png";
import p5 from "../../assets/imgs/ProjectFreelance/p5.png";
import p6 from "../../assets/imgs/ProjectFreelance/p6.png";
import p7 from "../../assets/imgs/ProjectFreelance/p7.png";
import p8 from "../../assets/imgs/ProjectFreelance/p8.png";
import p9 from "../../assets/imgs/ProjectFreelance/p9.png";

import d1 from "../../assets/imgs/DashboardShots/Screenshot25.png";
import d2 from "../../assets/imgs/DashboardShots/Screenshot26.png";
import d3 from "../../assets/imgs/DashboardShots/Screenshot27.png";
import d4 from "../../assets/imgs/DashboardShots/Screenshot28.png";
import d5 from "../../assets/imgs/DashboardShots/Screenshot29.png";
import d6 from "../../assets/imgs/DashboardShots/Screenshot30.png";
import d7 from "../../assets/imgs/DashboardShots/Screenshot31.png";
import d8 from "../../assets/imgs/DashboardShots/Screenshot32.png";
import d9 from "../../assets/imgs/DashboardShots/Screenshot33.png";
import d10 from "../../assets/imgs/DashboardShots/Screenshot34.png";
import d11 from "../../assets/imgs/DashboardShots/Screenshot35.png";
import d12 from "../../assets/imgs/DashboardShots/Screenshot36.png";
import d13 from "../../assets/imgs/DashboardShots/Screenshot37.png";
import d14 from "../../assets/imgs/DashboardShots/Screenshot38.png";
import d15 from "../../assets/imgs/DashboardShots/Screenshot39.png";
import d16 from "../../assets/imgs/DashboardShots/Screenshot40.png";
import d17 from "../../assets/imgs/DashboardShots/Screenshot41.png";
import d18 from "../../assets/imgs/DashboardShots/Screenshot42.png";
import d19 from "../../assets/imgs/DashboardShots/Screenshot43.png";
import d20 from "../../assets/imgs/DashboardShots/Screenshot44.png";
import d21 from "../../assets/imgs/DashboardShots/Screenshot45.png";
import d22 from "../../assets/imgs/DashboardShots/Screenshot46.png";
import d23 from "../../assets/imgs/DashboardShots/Screenshot47.png";
import d24 from "../../assets/imgs/DashboardShots/Screenshot48.png";
import d25 from "../../assets/imgs/DashboardShots/Screenshot49.png";
import d26 from "../../assets/imgs/DashboardShots/Screenshot50.png";

import kalrok from "../../assets/imgs/kalrokScreens/kalrok.jpeg";
import kyceed from "../../assets/imgs/kyceed.png";
import libft from "../../assets/imgs/libft.png";
import loginForm from "../../assets/imgs/loginForm.png";
import ls from "../../assets/imgs/ls.jpg";
import ocp from "../../assets/imgs/ocp.png";
import php from "../../assets/imgs/php.png";
import react from "../../assets/imgs/react.png";
import shell from "../../assets/imgs/shell.png";
import slanding from "../../assets/imgs/slanding.png";
import startincuib from "../../assets/imgs/startincuib.png";
import terminal from "../../assets/imgs/terminal.png";
import velcom from "../../assets/imgs/velcom.png";
import bikeapp from "../../assets/imgs/bikeapp.png";
import Education from "./Education";
import Eprojects from "./Eprojects";
import Home from "./Home";
import Skills from "./Skills";
import { Contactus } from "./ContactUs/Contactus";
export default function SectionsMap() {
  return sections.map((page, index) => <div key={index}>{page.section}</div>);
}

const imgs = [s12, s11, s10, s9, s8, s7, s6, s5, s4, s3, s2, s1];
const content = [
  {
    name: "Bike Rental App",
    repo: "https://github.com/biggymarley/Bike-Rental-App",
    live: "bikerental.vercel.app",
    img: bikeapp,
    lang: [html, css, php, js],
  },
  {
    name: "Instagram like App",
    repo: "https://github.com/biggymarley/Camagru",
    live: "https://camagrulive.000webhostapp.com/main/login.php",
    img: camagru,
    lang: [html, css, php, js],
  },
  {
    name: "Login Form",
    repo: "https://github.com/biggymarley/LoginFrom",
    live: "https://biggymarley.github.io/loginFormPreview/",
    img: loginForm,
    lang: [react, css],
  },
  {
    name: "Contact-us Form",
    repo: "https://github.com/biggymarley/ContactUs",
    live: "https://biggymarley.github.io/ContactUs/",
    img: "https://user-images.githubusercontent.com/58108317/123551064-168f6900-d768-11eb-9552-7a95b721c19e.png",
    lang: [react, css],
  },
  {
    name: "Unix Shell implementation",
    lang: [c, terminal],
    repo: "https://github.com/biggymarley/42SH",
    live: "https://www.docdroid.net/VjdlVx2/42sh-pdf",
    img: shell,
  },
  {
    name: "C Standard library",
    repo: " https://github.com/biggymarley/libft",
    live: "https://www.docdroid.net/WJPJVDD/libften-pdf",
    img: libft,
    lang: [c, terminal],
  },
  {
    name: "ls Command implementation",
    repo: " https://github.com/biggymarley/ls_1337",
    live: "https://www.docdroid.net/ippDtnv/ft-lsen-pdf",
    img: ls,
    lang: [c, terminal],
  },
];

const proProjects = [
  {
    name: "Startincub Landing Page",
    // repo: "https://github.com/biggymarley/LoginFrom",
    live: "https://biggymarley.github.io/StartIncub.min/",
    img: slanding,
    lang: [html, css, js],
  },
  {
    name: "Startups Incubation Application",
    // repo: "https://github.com/biggymarley/Project",
    live: "https://biggymarley.github.io/Project/#/",
    img: startincuib,
    lang: [react, css],
  },
  {
    name: "kyceed Landing Page",
    // repo: "https://github.com/biggymarley/ContactUs",
    live: "https://kyceed.io/",
    img: kyceed,
    lang: [react, css],
  },
  {
    name: "velcom Landing Page",
    lang: [react, css],
    // repo: "https://github.com/biggymarley/42SH",
    live: "https://velcom.io/",
    img: velcom,
  },
  {
    name: "Managment Dashboard",
    // repo: " https://github.com/biggymarley/libft",
    live: "https://www.docdroid.net/EN8FncN/screenshot-2022-07-16-182511-pdf",
    img: ocp,
    imgs: [p13, p12, p11, p10, p9, p8, p7, p6, p5, p4, p3, p2, p1],
    lang: [react, css],
  },
  {
    name: "Package Tracking Mobile Application",
    // repo: " https://github.com/biggymarley/libft",
    live: "https://www.docdroid.net/EN8FncN/screenshot-2022-07-16-182511-pdf",
    img: kalrok,
    imgs: [...imgs],
    lang: [react, css],
    isMobile: true,
  },
  {
    name: "Package Tracking Dashboard",
    // repo: " https://github.com/biggymarley/ls_1337",
    // live: "https://www.docdroid.net/ippDtnv/ft-lsen-pdf",
    imgs: [
      d26,
      d25,
      d24,
      d23,
      d22,
      d21,
      d20,
      d19,
      d18,
      d17,
      d16,
      d15,
      d14,
      d13,
      d12,
      d11,
      d10,
      d9,
      d8,
      d7,
      d6,
      d5,
      d4,
      d3,
      d2,
      d1,
    ],
    img: d1,
  },
];

const sections = [
  {
    title: "home",
    section: <Home />,
  },
  {
    title: "Education",
    section: <Education />,
  },
  {
    title: "Skills",
    section: <Skills />,
  },
  {
    title: "educational Projects",
    section: (
      <Eprojects
        content={content}
        title={"Projects"}
        withImg={true}
        id={"Projects"}
      />
    ),
  },
  {
    title: "Pro Projects",
    section: (
      <Eprojects
        content={proProjects}
        title={"WORK EXPERIENCE"}
        with3d={true}
        id={"Work"}
      />
    ),
  },
  {
    title: "Contactus",
    section: <Contactus />,
  },
];
