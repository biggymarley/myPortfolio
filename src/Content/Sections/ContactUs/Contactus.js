import { Box, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Goo from "./Blob";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
export const Contactus = (props) => {
  // let history = useHistory();
  // const redirect = () => {
  //   if (props.token) history.push("/account");
  // };
  useEffect(() => {
    AOS.init({ once: false });
    // redirect();
    // window.scroll(0, 0);
  }, []);
  return (
    <Container sx={classes.root} maxWidth="lg"  id="contactMe" data-aos="zoom-in">
      <Toolbar/>
      <Typography sx={classes.title}>Contact Me</Typography>
      <Paper elevation={3} sx={classes.pap}>
      <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Goo />
      </Box>
        <Grid
          data-aos="zoom-in-up"
          container
          justify="space-between"
          align="center"
          sx={{ position: "relative" }}
        >
          <LeftSide />
          <RightSide />
        </Grid>
      </Paper>
    </Container>
  );
};

const classes = {
  root: {
    padding: 3,
    overflow: "hidden",
    minHeight: "80vh",
    // paddingTop: "7rem",
    // backgroundColor: "rgb(247, 249, 252)",
  },
  pap: {
    borderRadius: "1rem !important",
    backgroundColor: "#f5f5f5",
    position: "relative",

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
};
