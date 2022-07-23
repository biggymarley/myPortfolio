import { Container, Stack, Toolbar, Typography } from "@mui/material";
import Ball3d from "../Ball3d";
export default function Skills() {
  return (
    <Container
    disableGutters={true}
      sx={{
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        // userSelect: "none",
      }}
      maxWidth="xl"
    >
      <Toolbar />

      <Stack
        direction={"column"}
        spacing={1}
        sx={{ zIndex: 99, userSelect: "none" }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ mb: 3 }}
          alignItems="center"
          justifyContent={"center"}
        >
          {/* <SchoolOutlinedIcon color="primary" sx={{ fontSize: "4vh" }} /> */}
          <Typography sx={classes.title}>Skills</Typography>
        </Stack>
        <Ball3d />
      </Stack>
    </Container>
  );
}


const classes = {
    title: {
      fontFamily: "'Signika', sans-serif",
      fontSize: "3vh",
      fontWeight: 400,
      color: "secondary.main",
      letterSpacing: 2,
      textTransform: "uppercase",
      mb: 5,
    },
  };
  
