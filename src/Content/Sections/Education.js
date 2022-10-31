import { Container, Stack, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo1337 from "../../assets/imgs/1337.png";
import education from "../../assets/imgs/education.png";
import ofppt from "../../assets/imgs/ofppt.png";
import { Img } from "../Header";

const Line = styled("div")(
  "height: auto; width: 2px; background:#7FBB5C; border-radius:12em;"
);

export default function Education() {
  return (
    <Container
      id="Education"
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

      <Stack
        direction={"column"}
        spacing={1}
        sx={{ zIndex: 99, position: "relative" }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ mb: 3,
           }}
          alignItems="center"
          justifyContent={"center"}
          data-aos="fade-up"
        >
          <Typography sx={classes.title}>Education</Typography>
        </Stack>
        <Img
          src={education}
          data-aos="fade-left"
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
          <RoadMaker content={content} key={index} index={index} />
        ))}
      </Stack>
      {/* <Ball3d /> */}
    </Container>
  );
}

const RoadMaker = ({ content, index }) => {
  return (
    <Stack
      data-aos-duration={index * 1000}
      data-aos="fade-up"
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{
        p: 2,
        mt: "2rem !important",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        
      }}
    >
      <Stack
        justifyContent={"space-between"}
        direction={{ xs: "row", md: "column" }}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Typography sx={{ ...classes.date ,fontWeight: 300, }}>{content.date}</Typography>
        {content.present ? (
          <Typography
            sx={{ ...classes.date, ...(!content.isPresent && { opacity: 0 }) ,fontWeight: 300, }}
          >
            {content.present}
          </Typography>
        ) : null}
      </Stack>
      <Line />
      
      <Stack maxWidth={"md"}>
        <Typography sx={{ ...classes.date }}>{content.name}</Typography>
        <Stack
        justifyContent={"space-between"}
        direction={{ xs: "row", md: "column" }}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Typography sx={{ ...classes.date, fontWeight: 300,}}>{content.date}</Typography>
        {content.present ? (
          <Typography
            sx={{ ...classes.date, ...(!content.isPresent && { opacity: 0 }) , fontWeight: 300,}}
          >
            {content.present}
          </Typography>
        ) : null}
      </Stack>
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
