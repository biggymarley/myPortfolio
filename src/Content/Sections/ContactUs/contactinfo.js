import { GitHub, LinkedIn } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Grid, Typography } from "@mui/material";
import { primary } from "./contactStyle";

export const Contactinfo = () => {
  // const classes = UseStyles();
  const infos = [
    {
      icon: <CallIcon sx={classes.icon} />,
      typo: "+212 63557 5600",
    },
    {
      icon: <EmailIcon sx={classes.icon} />,
      typo: "faragiayoubdev@gmail.com",
    },
    {
      icon: <GitHub sx={classes.icon} />,
      typo: "github.com/biggymarley",
    },
    {
      icon: <LinkedIn sx={classes.icon} />,
      typo: "linkedin.com/in/afaragi",
    },
  ];
  return infos.map((elem, index) => (
    <Grid
      key={index}
      container
      sx={classes.conitem}
      align="left"
      alignItems="center"
      justify="center"
    >
      <Grid xs={4} item>
        {elem.icon}
      </Grid>
      <Grid xs={8} item>
        <Typography sx={classes.typo3}>{elem.typo}</Typography>
      </Grid>
    </Grid>
  ));
};

const classes = {
  typo3: {
    fontFamily: "Montserrat, sans-serif",
    opacity: 0.9,
    color: primary,
    zIndex: 2,
    fontWeight: "bold !important",
    fontSize: "0.8rem !important",
  },
  conitem: {
    zIndex: 2,
    paddingTop: 4,
    // [theme.breakpoints.up("sm")]: {
    //   paddingTop: theme.spacing(8),
    // },
  },
  icon: {
    color: primary,
      fontSize: "1.5rem !important",
      // [theme.breakpoints.up("sm")]: {
      //   fontSize: "30px !important",
      // },
  },
};
