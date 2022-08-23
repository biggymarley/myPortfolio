import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import * as React from "react";
import logo from "../assets/imgs/logo.png";
const pages = [{label: "Home", id:'#Home'}, {label: "Education", id:'#Education'}, {label: "Work", id:'#Work'}];
export const Img = styled("img")("");

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 50,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }} elevation={0}>
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
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.label}</Typography>
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
                <a href={page.id} style={{ textDecoration: "none" }}>
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
                    {page.label}
                  </Button>
                </a>
              ))}
            </Box>
            <a href="#contactMe" style={{ textDecoration: "none" }}>
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
            </a>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};
export default Header;
