import { Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import Scene3d from "../3dContent/Scene";
import Ball3d from "../Ball3d";

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export default function Skills() {

  return (
    <Container
      disableGutters={true}
      sx={{
        // height: "700vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        // backgroundColor: "#485461",
        // backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
        // userSelect: "none",
      }}
      maxWidth="xl"
    >
      <Toolbar />

    
        {/* <Ball3d /> */}
    </Container>
  );
}

const classes = {
  title: {
    fontFamily: "'Signika', sans-serif",
    fontSize: "3vh",
    fontWeight: 400,
    color: "secondary.main",
    letterSpacing: 2,
    textTransform: "uppercase",
    mb: 5,
  },
};
