import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import { Grid, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import startincuib from "../../assets/imgs/startincuib.png";
import { Img } from "../Header";
import EpFrame from "./EpFrame";
export default function Eprojects() {
  return (
    <Container
      sx={{
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        // userSelect: "none",
      }}
      maxWidth="lg"
    >
      <Toolbar />
      <Typography sx={classes.title}>Educational Projects</Typography>
      {/* <Img src={eprojects} className="moveit" sx={classes.eprojects} /> */}
      <GridFactory />
    </Container>
  );
}

const GridFactory = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Pcard />
        {/* <iframe
          src="https://biggymarley.github.io/Project/"
          style={{ width: "100%", height: "30vh" }}
          title="StartIncub"
        ></iframe> */}
      </Grid>
    </Grid>
  );
};

const Pcard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const githubLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        mb: "50px",
        m: 2,
        // pointerEvents:'none'
      }}
    >
      <Img src={content.img} sx={classes.card} />
      <Box sx={classes.outer}>
        <Box sx={classes.inner} onClick={() => githubLink(content.repo)}>
          <GitHubIcon sx={{ fontSize: "5em", color: "#fff" }} />
        </Box>
      </Box>
      <Box sx={{ ...classes.outer, right: 0 }}>
        <Box sx={classes.inner} onClick={handleOpen}>
          <InsertLinkRoundedIcon sx={{ fontSize: "5em", color: "#fff" }} />
        </Box>
      </Box>

      <EpFrame open={open} handleClose={handleClose} link={content.live} />
    </Box>
  );
};

const content = {
  name: "Startincub",
  repo: "https://github.com/biggymarley/Project",
  live:'https://biggymarley.github.io/Project/#/',
  img: startincuib,
};

const classes = {
  card: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    // borderRadius: "12px",
    mb: "2px",
    cursor: "pointer",
  },
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    position: "absolute",
    height: "100%",
    top: 0,
  },
  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#0000004f",
    opacity: 0,
    cursor: "pointer",
    transition: "all 300ms ease",
    "&:hover": {
      backgroundColor: "blue",
      opacity: 1,
    },
  },
  date: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: "2vh",
    fontWeight: 700,
    color: "secondary.main",
  },
  desc: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: "2vh",
    fontWeight: 600,
    mt: 1,
  },
  title: {
    fontFamily: "'Signika', sans-serif",
    fontSize: "3vh",
    fontWeight: 400,
    color: "secondary.main",
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
    mb: 5,
  },
  logo: {
    width: "80px",
    height: "auto",
    objectFit: "contain",
    alignSelf: "center",
  },
  eprojects: {
    position: "absolute",
    width: "40vh",
    left: "5%",
    // zIndex: -1,
    display: { xs: "none", md: "flex" },
  },
};
