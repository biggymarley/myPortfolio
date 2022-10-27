import { Grid, TextField } from "@mui/material";
// import round from "../../../imgs/circle3.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4E00",
    },
    blue: {
      main: "#0097FE",
    },
    secondary: {
      main: "#1D3738",
    },
    bg: {
      main: "#DFEBF2",
    },
  },
});

const inputs = [
  {
    label: "First Name",
    width: "90",
    helper: "",
  },
  {
    label: "Last Name",
    helper: "",
  },
  {
    label: "Phone Number",
    width: "90",
    helper: "+212600000000",
  },
  {
    label: "Mail",
    helper: "exemple@mail.com",
  },
  {
    label: "Message",
    placeholder: "Write your Message",
    type: "multiline",
    helper: "50 - 100 Words",
    row: 5,
  },
];

export const RightSide = () => {
  // const classes = UseStyles();
  return (
    <Grid container item xs={12} md={8} sx={classes.col2} align="left">
      <ThemeProvider theme={theme}>
        {inputs.map((elem, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={elem.type === "multiline" ? 12 : 6}
          >
            <TextField
              label={elem.label}
              multiline={elem.type === "multiline" ? true : false}
              rows={elem.row}
              helperText={elem.helper}
              sx={elem.width === "90" ? classes.txtf2 : classes.txtf}
              placeholder={elem.placeholder ? elem.placeholder : ""}
              color="secondary"
            />
          </Grid>
        ))}
      </ThemeProvider>
      <Grid container item justify="flex-end">
        <Box alignItems="flex-end" display="flex">
          <Button variant="outlined" color="secondary">
            Send Message
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const classes = {
  col2: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    minHeight: "80vh",
    position: "relative",
    // overflow: "hidden",
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
};
