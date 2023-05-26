import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import style from "./index.module.css";

const pages = [
  "We Offer",
  "Top course",
  "Schedule",
  "trainer",
  "plan",
  "pages",
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      let scrolly = window.scrollY;
      if (scrolly > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar
        className={scroll ? "scrolled" : ""}
        position="fixed"
        style={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", justifyContent: "center" },
          }}
        >
          <div className="container d-flex align-items-center justify-content-between mt-3">
            <span className={style.span}>
              We believe we helps people
              <br /> for happier lives
            </span>
            <a href="/">
              {" "}
              <img
                src="https://preview.colorlib.com/theme/gym/img/logo.png"
                alt="logo"
              />
            </a>
            <div className="contact">
              <a className={style.tel} href="tel:+880 123 12 658 439">
                +880 123 12 658 439
              </a>
              <a className={style.telIcon} href="tel:+880 123 12 658 439">
                <LocalPhoneIcon />
              </a>
            </div>
          </div>
        </Box>
          <hr   style={{ color: "rgb(0 0 0 / 20%)", marginBottom: "0" }} />

        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", justifyContent:"space-between " } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "#f6214b" }} />
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
                <Link style={{ textDecoration: "none" }} to="/">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <Link style={{ textDecoration: "none" }} to="/add-about">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Add About</Typography>
                  </MenuItem>
                </Link>
              </Menu>
              <a href="/">
                {" "}
                <img
                  src="https://preview.colorlib.com/theme/gym/img/logo.png"
                  alt="logo"
                />
              </a>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/">
                {" "}
                <Button
                  className={style.navLink}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Home
                </Button>
              </Link>
              {pages.map((page) => (
                <Button
                  className={style.navLink}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
              <Link style={{ textDecoration: "none" }} to="/add-about">
                {" "}
                <Button
                  className={style.navLink}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Add About
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
