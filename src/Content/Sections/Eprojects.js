import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import { Grid, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import eprojects from "../../assets/imgs/eprojects.png";
import ImageHandler from "../3dContent/ImageHandler";
import Ball3d from "../Ball3d";
import { Img } from "../Header";
import EpFrame from "./EpFrame";
export default function Eprojects({ content, title, with3d, withImg, id }) {
  return (
    <Container
      id={id}
      sx={{
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        // userSelect: "none",
        position: "relative",
      }}
      maxWidth="lg"
    >
      <Toolbar />
      <Typography data-aos="fade-up" sx={classes.title}>
        {title}
      </Typography>
      {with3d ? (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            left: {xs: "30%", md: "40%"},
            bottom: {xs: 0 , md: "-20%"},
            top: {xs: "-3%" , md: "auto"},
            // right: {xs: "50%" , md: "auto"},

            height: "80vh",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <Ball3d />
        </Box>
      ) : null}
      {withImg ? (
        <Img
          src={eprojects}
          className="moveit"
          sx={classes.eprojects}
          data-aos="zoom-in"
        />
      ) : null}

      <Box
        data-aos="zoom-in"
        sx={{
          display: "flex",
          p: 4,
          pb: 6,
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <GridFactory content={content} />
      </Box>
      <Toolbar />
    </Container>
  );
}

const GridFactory = ({ content }) => {
  return (
    <Grid container spacing={4} rowSpacing={8}>
      {content.map((e, index) => (
        <Grid item xs={12} md={6} lg={4} key={index} data-aos="zoom-in-right">
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
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={classes.pTitle}>{content.name}</Typography>
      <Box sx={classes.cardRoot}>
        <Img src={content.img} sx={classes.card} />
        {!content.repo ? (
          <Box sx={{ ...classes.outer, width: "100%" }}>
            <Box sx={classes.inner} onClick={handleOpen}>
              <InsertLinkRoundedIcon sx={{ fontSize: "5em", color: "#fff" }} />
            </Box>
          </Box>
        ) : (
          <>
            <Box sx={classes.outer}>
              <Box sx={classes.inner} onClick={() => githubLink(content.repo)}>
                <GitHubIcon sx={{ fontSize: "5em", color: "#fff" }} />
              </Box>
            </Box>
            <Box sx={{ ...classes.outer, right: 0 }}>
              <Box sx={classes.inner} onClick={handleOpen}>
                <InsertLinkRoundedIcon
                  sx={{ fontSize: "5em", color: "#fff" }}
                />
              </Box>
            </Box>
          </>
        )}
        {content.imgs ? (
          <ImageHandler
            open={open}
            handleClose={handleClose}
            cards={content.imgs}
            isMobile={content?.isMobile ?? false}
          />
        ) : (
          <EpFrame open={open} handleClose={handleClose} link={content.live} />
        )}
      </Box>
      {/* <Stack
        direction={"row"}
        sx={{ position: "absolute", top: -10, left: 10 }}
        spacing={1}
      >
        {content?.lang?.map((e, index) => (
          <Img src={e} key={index} sx={classes.lang} />
        ))}
      </Stack> */}
    </Box>
  );
};

const classes = {
  lang: {
    objectFit: "contain",
    width: "30px",
    height: "auto",
  },
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
  pTitle: {
    fontFamily: "'Signika', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "secondary.main",
    letterSpacing: 2,
    textTransform: "capitalize",
    textAlign: "center",
    mb: 2,
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
    left: 0,
    top: -120,
    // zIndex: -1,
    display: { xs: "none", md: "flex" },
  },
  cardRoot: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    // mb: "50px",
    // m: 2,
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    // boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    // boxShadow:
    //   "rgba(255, 78, 0, 0.4) -5px 5px, rgba(255, 78, 0, 0.3) -10px 10px, rgba(255, 78, 0, 0.2) -15px 15px, rgba(255, 78, 0, 0.1) -20px 20px, rgba(255, 78, 0, 0.05) -25px 25px",
    // pointerEvents:'none'
  },
};
