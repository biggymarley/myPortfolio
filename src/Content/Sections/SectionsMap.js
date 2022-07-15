import React from "react";
import Home from "./Home";
import Education from "./Education";
import Eprojects from "./Eprojects";

export default function SectionsMap() {
  return sections.map((page, index) => <div key={index}>{page.section}</div>);
}

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
    title: "educational Projects",
    section: <Eprojects />,
  },
];
