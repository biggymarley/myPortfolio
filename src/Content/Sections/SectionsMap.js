import React from "react";
import Home from "./Home";
import Education from "./Education";
import Eprojects from "./Eprojects";
import camagru from "../../assets/imgs/camagru.png";
import loginForm from "../../assets/imgs/loginForm.png";
import libft from "../../assets/imgs/libft.png";
import css from "../../assets/imgs/css.png";
import html from "../../assets/imgs/html.png";
import js from "../../assets/imgs/js.png";
import react from "../../assets/imgs/react.png";
import terminal from "../../assets/imgs/terminal.png";
import c from "../../assets/imgs/c.png";
import php from "../../assets/imgs/php.png";
import shell from "../../assets/imgs/shell.png";
import ls from "../../assets/imgs/ls.jpg";
import startincuib from "../../assets/imgs/startincuib.png";
import slanding from "../../assets/imgs/slanding.png";
import velcom from "../../assets/imgs/velcom.png";
import kyceed from "../../assets/imgs/kyceed.png";
import ocp from "../../assets/imgs/ocp.png";
import Skills from "./Skills";

export default function SectionsMap() {
  return sections.map((page, index) => <div key={index}>{page.section}</div>);
}

const content = [
  {
    name: "camagru",
    repo: "https://github.com/biggymarley/Camagru",
    live: "https://camagrulive.000webhostapp.com/main/login.php",
    img: camagru,
    lang: [html, css, php, js],
  },
  {
    name: "LoginForm",
    repo: "https://github.com/biggymarley/LoginFrom",
    live: "https://biggymarley.github.io/loginFormPreview/",
    img: loginForm,
    lang: [react, css],
  },
  {
    name: "ContactUs",
    repo: "https://github.com/biggymarley/ContactUs",
    live: "https://biggymarley.github.io/ContactUs/",
    img: "https://user-images.githubusercontent.com/58108317/123551064-168f6900-d768-11eb-9552-7a95b721c19e.png",
    lang: [react, css],
  },
  {
    name: "42Shell",
    lang: [c, terminal],
    repo: "https://github.com/biggymarley/42SH",
    live: "https://www.docdroid.net/VjdlVx2/42sh-pdf",
    img: shell,
  },
  {
    name: "libft",
    repo: " https://github.com/biggymarley/libft",
    live: "https://www.docdroid.net/WJPJVDD/libften-pdf",
    img: libft,
    lang: [c, terminal],
  },
  {
    name: "Ls",
    repo: " https://github.com/biggymarley/ls_1337",
    live: "https://www.docdroid.net/ippDtnv/ft-lsen-pdf",
    img: ls,
    lang: [c, terminal],
  },
];

const proProjects = [
  {
    name: "slanding",
    // repo: "https://github.com/biggymarley/LoginFrom",
    live: "https://biggymarley.github.io/StartIncub.min/",
    img: slanding,
    lang: [html, css, js],
  },
  {
    name: "startincuib",
    // repo: "https://github.com/biggymarley/Project",
    live: "https://biggymarley.github.io/Project/#/",
    img: startincuib,
    lang: [react, css],
  },
  {
    name: "kyceed",
    // repo: "https://github.com/biggymarley/ContactUs",
    live: "https://kyceed.io/",
    img: kyceed,
    lang: [react, css],
  },
  {
    name: "velcom",
    lang: [react, css],
    // repo: "https://github.com/biggymarley/42SH",
    live: "https://velcom.io/",
    img: velcom,
  },
  {
    name: "freelance",
    // repo: " https://github.com/biggymarley/libft",
    live: "https://www.docdroid.net/EN8FncN/screenshot-2022-07-16-182511-pdf",
    img: ocp,
    lang: [react, css],
  },
  // {
  //   name: "Ls",
  //   repo: " https://github.com/biggymarley/ls_1337",
  //   live: "https://www.docdroid.net/ippDtnv/ft-lsen-pdf",
  //   img: ls,
  //   lang: [c, terminal],
  // },
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
    section: <Eprojects content={content} title={"Educational Projects"} />,
  },
  {
    title: "Pro Projects",
    section: <Eprojects content={proProjects} title={"Pro Projects"} />,
  },
];
