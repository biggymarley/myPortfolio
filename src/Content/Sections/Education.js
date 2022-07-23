import { Container, Stack, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo1337 from "../../assets/imgs/1337.png";
import education from "../../assets/imgs/education.png";
import ofppt from "../../assets/imgs/ofppt.png";
import Ball3d from "../Ball3d";
import { Img } from "../Header";

const Line = styled("div")(
  "height: 100px; width: 2px; background:#FF4E00; border-radius:12em;"
);

export default function Education() {
  return (
    <Container
      sx={{
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        // userSelect: "none",
      }}
      maxWidth="lg"
    >
      <Toolbar />

      <Stack direction={"column"} spacing={1} sx={{zIndex:99, userSelect:"none"}}>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ mb: 3 }}
          alignItems="center"
          justifyContent={"center"}
        >
          {/* <SchoolOutlinedIcon color="primary" sx={{ fontSize: "4vh" }} /> */}
          <Typography sx={classes.title}>Education</Typography>
        </Stack>
        <Img
          src={education}
          className="moveit"
          sx={{
            position: "absolute",
            width: "30vh",
            right: "5%",
            zIndex: -1,
            display: { xs: "none", md: "flex" },
          }}
        />
        {contents.map((content, index) => (
          <RoadMaker content={content} key={index} />
        ))}
      </Stack>
      {/* <Ball3d /> */}

    </Container>
  );
}

const RoadMaker = ({ content }) => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Stack justifyContent={"space-between"}>
        <Typography sx={{ ...classes.date }}>{content.date}</Typography>
        {content.present ? (
          <Typography
            sx={{ ...classes.date, ...(!content.isPresent && { opacity: 0 }) }}
          >
            {content.present}
          </Typography>
        ) : null}
      </Stack>
      <Line />
      <Stack maxWidth={"md"}>
        <Typography sx={{ ...classes.date }}>{content.name}</Typography>
        <Typography sx={classes.desc}>{content.desc}</Typography>
      </Stack>
      {content.logo ? (
        <a
          href={content.link}
          target="_blank"
          style={{ alignSelf: "center" }}
          rel="noreferrer"
        >
          <Img src={content.logo} sx={classes.logo} rel="noreferrer" />
        </a>
      ) : null}
    </Stack>
  );
};

const contents = [
  {
    name: "Baccalaureate",
    date: "2016",
    desc: "The baccalaureate completes high school and allows baccalaureate holders to access universities, faculties and grandes écoles to continue their higher education",
    logo: null,
    present: "PRESENT",
  },
  {
    name: "INSTITUT SPÉCIALISÉ DE GESTION ET D`INFORMATIQUE (ISGI)",
    date: "2017",
    desc: "Technician Specialized in IT Development Techniques OFPPT: is a professional in charge of the development and maintenance of IT applications",
    logo: ofppt,
    link: "https://www.ofppt.ma/",
    present: "PRESENT",
  },
  {
    name: "1337 Coding School",
    date: "2019",
    desc: "1337 is the first to provide IT training in Morocco, completely free of charge, open and accessible to anyone between the ages of 18 and 30. No need for an IT degree, or of having undergone extensive IT training.",
    logo: logo1337,
    link: "https://1337.ma/en/",
    present: "PRESENT",
    isPresent: true,
  },
];

const classes = {
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
    mb: 5,
  },
  logo: {
    width: "80px",
    height: "auto",
    objectFit: "contain",
    alignSelf: "center",
  },
};
