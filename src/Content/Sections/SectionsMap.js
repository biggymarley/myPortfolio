import React from "react";
import Home from "./Home";

export default function SectionsMap() {
  return sections.map((page, index) => <div key={index}>{page.section}</div>);
}

const sections = [
  {
    title: "home",
    section: <Home />,
  },
];
