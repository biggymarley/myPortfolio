import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { createContext, useState, Suspense, lazy } from "react";
import Lottie from "react-lottie";
import * as animation from "../assets/animations/loading.json";
export const AppContext = createContext();
const InnerMain = lazy(() => import("./InnerMain"));
export default function Main() {
  const [loading, setloading] = useState(false);
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

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ loading, setloading }}>
          <InnerMain />
        </AppContext.Provider>
      </ThemeProvider>
    </Suspense>
  );
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <Box height={"100vh"}>
      <Lottie options={defaultOptions} width="60vw" height={"100%"} />
    </Box>
  );
};
