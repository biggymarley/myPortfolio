import { makeStyles } from "@mui/styles";

export const primary = "#fff !important";
const UseStyles =  makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3),
      overflow: "hidden",
      minHeight: "80vh",
      paddingTop: "7rem",
      backgroundColor: "rgb(247, 249, 252)",
    },
    col1: {
      backgroundColor: theme.palette.error.main,
      minHeight: "60vh",
      boxShadow: "inset 0px 0px 20px 0px #0000003d",

      [theme.breakpoints.up("sm")]: {
        minHeight: "80vh",
        padding: theme.spacing(8),
      },
      padding: theme.spacing(4),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      [theme.breakpoints.up("md")]: {
        borderRadius: "1rem 0 0 1rem",
      },
      borderRadius: "1rem 1rem 0 0",
    },
    col2: {
      backgroundColor: "#fff",
      minHeight: "80vh",
      position: "relative",
      overflow: "hidden",
      [theme.breakpoints.up("md")]: {
        borderRadius: "0 1rem 1rem 0rem",
      },
      borderRadius: "0 0 1rem 1rem",
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(8),
      },
      padding: theme.spacing(4),
    },
    txtf: {
      width: "100%",
    },
    txtf2: {
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "90%",
      },
    },
    divn: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      zIndex: 2,
    },
    pap: {
      borderRadius: "1rem !important",
      backgroundColor: "#f5f5f5",
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

      paddingTop: theme.spacing(2),
      zIndex: 2,
      fontWeight: "bold !important",
      fontSize: "0.7rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.8rem !important",
      },
    },
    typo3: {
      fontFamily: "Montserrat, sans-serif",
      opacity: 0.9,
      color: primary,
      zIndex: 2,
      fontWeight: "bold !important",
      fontSize: "0.8rem !important",
    },
    circle: {
      position: "absolute",
      bottom: 0,
      opacity: 0.4,
      transform: "translate(-50%, 50%)",
      pointerEvents: "none",
    },
    circle3: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "15em !important",
      transform: "translate(50%, -50%)",
      pointerEvents: "none",
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
    circle4: {
      position: "absolute",
      bottom: 200,
      right: 150,

      transform: "translate(50%, 50%)",
      pointerEvents: "none",
    },
    circle2: {
      position: "absolute",
      right: 0,
      transform: "translate(0%, 50%)",
      pointerEvents: "none",
    },
    item: {},
    conitem: {
      zIndex: 2,
      paddingTop: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(8),
      },
    },
    consocial: {
      bottom: 0,
      left: 0,
      zIndex: 2,
    },
    icon: {
      color: primary,
      fontSize: "1.5rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px !important",
      },
    },
    icon2: {
      color: primary,

      fontSize: "1.5rem !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px !important",
      },
    },
    iconb: {
      backgroundColor: "transparant",
      "&:hover, &:active": {
        backgroundColor: "#FF8A007d !important",
      },
    },
    boxbut: {
      alignSelf: "right",
    },
  }));


export default UseStyles;
