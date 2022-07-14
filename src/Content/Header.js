import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import * as React from "react";
import logo from "../assets/imgs/logo.png";

const pages = ["Home", "About", "Portfolio"];
export const Img = styled("img")("");

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="absolute" sx={{ backgroundColor: "#fff" }} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Img
            src={logo}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              width: "50px",
              borderRadius: "50%",
              objectFit: "contain",
            }}
            alt="logo"
          />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Img
            src={logo}
            sx={{
              display: { xs: "flex", md: "none" },

              mr: "auto",
              ml: "auto",
              width: "50px",
              borderRadius: "50%",
              objectFit: "contain",
            }}
            alt="logo"
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 5,
                  my: 2,
                  color: "secondary.main",
                  display: "block",
                  fontFamily: "'Signika', sans-serif",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "12em",
              fontFamily: "'Signika', sans-serif",
              fontWeight: 600,
            }}
          >
            Contact me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
