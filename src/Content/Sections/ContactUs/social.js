import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import UseStyles, { primary } from "./contactStyle";
import { Grid } from "@mui/material";

export const Social = () => {
  // const classes = UseStyles();
  const socialinfo = [
    {
      icon: <LinkedInIcon sx={classes.icon2} />,
    },
    {
      icon: <FacebookIcon sx={classes.icon2} />,
    },
    {
      icon: <TwitterIcon sx={classes.icon2} />,
    },
    {
      icon: <InstagramIcon sx={classes.icon2} />,
    },
  ];

  return (
    <Grid
      container
      sx={classes.consocial}
      align="center"
      justify="center"
    >
      {socialinfo.map((elem, index) => (
        <Grid xs={3} item  key={index}>
          <IconButton sx={classes.iconb}>{elem.icon}</IconButton>
        </Grid>
      ))}
    </Grid>
  );
};

const classes = {
  iconb: {
    backgroundColor: "transparant",
    "&:hover, &:active": {
      backgroundColor: "#FF8A007d !important",
    },
  },
  consocial: {
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
  icon2: {
    color: primary,

    fontSize: "1.5rem !important",
    // [theme.breakpoints.up("sm")]: {
    //   fontSize: "30px !important",
    // },
  },
}