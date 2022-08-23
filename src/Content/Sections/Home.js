import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Button,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import realMe from "../../assets/imgs/me.png";
import BiggyImage from "../3dContent/ImagePartical";
import { Img } from "../Header";
import BlurOffIcon from "@mui/icons-material/BlurOff";
import BlurOnIcon from "@mui/icons-material/BlurOn";
export default function Home() {
  const [show, setshow] = useState(true);
  return (
    <Container
      id="Home"
      sx={{
        height: "99vh",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        // userSelect: "none",
      }}
      maxWidth="lg"
    >
      <Toolbar />
      <Toolbar />
      {/* <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          // top: 0,
          cursor: "pointer",
          bottom: "-40%",
          left: "-55%",
        }}
      >
        <Scene3d />
      </Box> */}

      <Grid container sx={{ flexGrow: 1 }} spacing={4}>
        <Grid
        data-aos="fade-right"
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Box>
            <Typography sx={classes.text}>Hi, I Am</Typography>
            <Typography sx={{ ...classes.text, color: "primary.main", mb: 3 }}>
              Ayoub Faragi
            </Typography>
            <Typography sx={classes.desc}>
              Front-end developer with 5+ years of experience designing and
              building responsive web design and mobile apps in the financial
              industry. Proficient with CSS and JS Frameworks, with extensive
              knowledge of UX and user psychology.
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              sx={{ mt: 4 }}
              spacing={{ xs: 2, md: 5 }}
            >
              <Button
                href={"https://www.linkedin.com/in/afaragi/"}
                target="_blank"
                variant="contained"
                disableElevation
                sx={{
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: "2vh",
                  fontWeight: 700,
                  position: "relative",
                  px: 3,
                }}
              >
                Hire Me
              </Button>
              <Button
                variant="outlined"
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
          </Box>
          {/* <Box sx={classes.ball} /> */}
        </Grid>
        <Grid
          item
          xs={false}
          md={6}
          sx={{
            position: "relative",
            justifyContent: "center",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
          }}
        >
          <IconButton
            onClick={() => setshow(!show)}
            color='primary'
            sx={{ position: "absolute", zIndex: 999, top: 0, right: 0 }}
          >
          {show ? (
            <BlurOffIcon  sx={{ fontSize: "2rem" }} />
          ) : (
            <BlurOnIcon  sx={{ fontSize: "2rem" }} />
          )}
            
          </IconButton>
          <Box
            sx={{
              position: "relative",
              justifyContent: "center",
              display: "flex",
              borderRadius: "50%",
              overflow: "hidden",
              width: "500",
              height: "500",

              // p: 10
            }}
          >
            {show ? (
              <BiggyImage />
            ) : (
              <Img src={realMe} sx={classes.realMe} data-aos="fade-up" />
            )}
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
    fontSize: "clamp(2rem,6vw, 6rem)",
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
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    objectFit: "contain",
    // position: "absolute",
    // zIndex: -1,
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
