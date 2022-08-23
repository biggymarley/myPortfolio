import UseStyles, { primary } from "./contactStyle";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Social } from "./social";
import { Contactinfo } from "./contactinfo";
import Scene3d from "../../3dContent/Scene";
// import round from "../../../imgs/circle.svg";
// import round2 from "./imgs/circle2.svg";

export const LeftSide = () => {
  // const classes = UseStyles();
  return (
    <Grid item xs={12} md={4} sx={classes.col1}>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          left:{xs: "none", md:"0"},
          right:0,
          cursor: "pointer",
          display:{xs: "none", sm:"flex"},
          height:{xs: "100%", md:"70%"},
          width:{xs: "50%", md:"100%"}
          // left: "-55%",
        }}
      >
        <Scene3d />
      </Box>
      <Box sx={classes.divn}>
        {/* <img src={round} className={classes.circle}  alt="img"/> */}
        {/* <img src={round2} className={classes.circle2}  alt="img"/> */}
        <Typography variant="h5" align="left" sx={classes.typo}>
          Contact information
        </Typography>
        <Typography variant="h6" align="left" sx={classes.typo2}>
          Fill up the form and our Team will get back to you within 24 hours
        </Typography>
        <Contactinfo />
      </Box>
 
      {/* <Social /> */}
    </Grid>
  );
};

const classes = {
  col1: {
    backgroundColor: "#1d37388a",
    // background: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    minHeight: "60vh",
    // boxShadow: "inset 0px 0px 20px 0px #0000003d",

    // [theme.breakpoints.up("sm")]: {
    //   minHeight: "80vh",
    //   padding: theme.spacing(8),
    // },
    padding: 4,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    // [theme.breakpoints.up("md")]: {
    //   borderRadius: "1rem 0 0 1rem",
    // },
    borderRadius: { xs: "1rem 1rem 0 0", md: "1rem 0 0 1rem" },
  },
  divn: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    zIndex: 2,
  },
  typo: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold !important",
    textTransform: "uppercase !important",
    color: primary,
    zIndex: 2,
    fontSize: "1rem !important",
  },
  typo2: {
    fontFamily: "Montserrat, sans-serif",
    opacity: 0.7,
    textTransform: "uppercase !important",
    color: primary,

    paddingTop: 2,
    zIndex: 2,
    fontWeight: "bold !important",
    fontSize: "0.7rem !important",
    // [theme.breakpoints.up("sm")]: {
    //   fontSize: "0.8rem !important",
    // },
  },
};
