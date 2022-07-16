import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import { Grid, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import startincuib from "../../assets/imgs/startincuib.png";
import loginForm from "../../assets/imgs/loginForm.png";
import libft from "../../assets/imgs/libft.png";
// import eprojects from "../../assets/imgs/eprojects.png";
import ls from "../../assets/imgs/ls.jpg";
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
      <Toolbar />

    </Container>
  );
}

const GridFactory = () => {
  return (
    <Grid container spacing={4}>
      {content.map((e, index) => (
        <Grid item xs={4} key={index} >
          <Pcard content={e} />
        </Grid>
      ))}
    </Grid>
  );
};

const Pcard = ({ content }) => {
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
        height:'100%',
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        mb: "50px",
        m: 2,
        boxShadow:
          "rgba(255, 78, 0, 0.4) -5px 5px, rgba(255, 78, 0, 0.3) -10px 10px, rgba(255, 78, 0, 0.2) -15px 15px, rgba(255, 78, 0, 0.1) -20px 20px, rgba(255, 78, 0, 0.05) -25px 25px",
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

const content = [
  {
    name: "Startincub",
    repo: "https://github.com/biggymarley/Project",
    live: "https://biggymarley.github.io/Project/#/",
    img: startincuib,
  },
  {
    name: "LoginForm",
    repo: "https://github.com/biggymarley/LoginFrom",
    live: "https://biggymarley.github.io/loginFormPreview/",
    img: loginForm,
  },
  {
    name: "ContactUs",
    repo: "https://github.com/biggymarley/ContactUs",
    live: "https://biggymarley.github.io/ContactUs/",
    img: "https://user-images.githubusercontent.com/58108317/123551064-168f6900-d768-11eb-9552-7a95b721c19e.png",
  },
  {
    name: "42Shell",
    repo: "https://github.com/biggymarley/42SH",
    // live: "",
    img: "https://camo.githubusercontent.com/15b3a2eb6dc6289cae2f384ca583da35ada34b8b2bf132d9cfb6fd97edbaf7f1/68747470733a2f2f626173686c6f676f2e636f6d2f696d672f73796d626f6c2f6a70672f66756c6c5f636f6c6f7265645f6c696768742e6a7067",
  },
  {
    name: "libft",
    repo: " https://github.com/biggymarley/libft",
    // live: "",
    img: libft,
  },
  {
    name: "Ls",
    repo: " https://github.com/biggymarley/ls_1337",
    // live: "",
    img: ls,
  },
 
];

const classes = {
  card: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // borderRadius: "12px",
    // mb: "2px",
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
    right: "5%",
    // zIndex: -1,
    display: { xs: "none", md: "flex" },
  },
};
