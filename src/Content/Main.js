import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import Header from "./Header";
import SectionsMap from "./Sections/SectionsMap";
export default function Main() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF4E00",
      },
      blue:{
        main:"#0097FE"
      },
      secondary: {
        main: "#1D3738",
      },
      bg: {
        main: "#DFEBF2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <SectionsMap/>
    </ThemeProvider>
  );
}
