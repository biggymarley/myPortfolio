import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import css from "../../assets/imgs/css.png";
import html from "../../assets/imgs/html.png";
import js from "../../assets/imgs/js.png";
import realMe from "../../assets/imgs/me.png";
import me from "../../assets/imgs/megif.gif";
import { Img } from "../Header";
export default function Home() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
      maxWidth="lg"
    >
      <Toolbar />
      <Grid container sx={{ flexGrow: 1 }} spacing={4}>
        <Grid
          item
          xs={6}
          sx={{
            position: "relative",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={classes.text}>Hi, I Am</Typography>
          <Typography sx={{ ...classes.text, color: "primary.main", mb: 3 }}>
            Ayoub Faragi
          </Typography>
          <Typography sx={classes.desc}>
            Front-end developer with 3+ years of experience designing and
            building responsive web design and mobile apps in the financial
            industry. Proficient with CSS and JS Frameworks, with extensive
            knowledge of UX and user psychology.
          </Typography>
          <Stack direction={"row"} sx={{ mt: 4 }} spacing={5}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "2vh",
                fontWeight: 700,

                px: 3,
              }}
            >
              Hire Me
            </Button>
            <Button
              href={"https://github.com/biggymarley"}
              target="_blank"
              sx={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "2vh",
                fontWeight: 700,
                px: 3,
              }}
              startIcon={<GitHubIcon />}
            >
              Projects
            </Button>
          </Stack>
          {/* <Box sx={classes.ball} /> */}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            position: "relative",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "relative",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Img src={realMe} sx={classes.realMe} />
            <Img src={me} sx={classes.me} className="load" />
            <Img
              src={css}
              sx={{ ...classes.langue, ...classes.topRight }}
              className="moveit"
            />
            <Img
              src={html}
              sx={{ ...classes.langue, ...classes.topleftMid }}
              className="moveit"
            />
            <Img
              src={js}
              sx={{ ...classes.langue, ...classes.bottomMid }}
              className="moveit"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const classes = {
  text: {
    fontFamily: "'Baloo 2', cursive",
    fontWeight: 700,
    fontSize: "10vh",
    // color: "blue.main",
    whiteSpace: "pre",
    lineHeight: 1,
    // mb: 3,
  },
  desc: {
    fontFamily: "'Baloo 2', cursive",
    fontWeight: 500,
    fontSize: "2.2vh",
    // color: "secondary.main",
  },
  ball: {
    display: { xs: "none", lg: "flex" },
    width: "20vh",
    height: "20vh",
    borderRadius: "50%",
    backgroundColor: "#ff4e00",
    backgroundImage: "linear-gradient(315deg, #ec9f05 0%, #ff4e00 74%)",
    position: "absolute",
    right: "20%",
    top: "30%",
    zIndex: -1,
  },
  me: {
    width: "90%",
    height: "auto",
    borderRadius: "50%",
    objectFit: "contain",
    mt: 1,
  },
  realMe: {
    width: "90%",
    height: "auto",
    borderRadius: "50%",
    objectFit: "contain",
    mt: 1,
    position: "absolute",
  },
  langue: {
    width: "50px",
    height: "auto",
    objectFit: "contain",
    position: "absolute",
  },
  topRight: {
    top: "3%",
    right: "22%",
  },
  bottomMid: {
    bottom: "17%",
    right: "9%",
  },
  topleftMid: {
    top: "25%",
    left: "3%",
  },
};
