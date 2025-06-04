// src/components/shared/navbar.js

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "דף הבית", path: "/" },
  { label: "אודות", path: "/about" },
  { label: "שירותים", path: "/services" },
  { label: "צור קשר", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  // מאזין לגלילה כדי לשנות רקע + blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // תוכן ה-Drawer במובייל (שקוף + blur)
  const drawer = (
    <Box
      sx={{
        width: 240,
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)",
        height: "100vh",
      }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.path}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton selected={location.pathname === link.path}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      color:
                        location.pathname === link.path ? "#fff" : "#E5E5E5",
                      fontWeight:
                        location.pathname === link.path ? "bold" : 400,
                      fontFamily: "Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      textAlign: "right", // RTL alignment
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          boxShadow: "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
          top: 0,
          left: 0,
          width: "100%",
          px: { xs: 2, md: "58px" },
          zIndex: 1300,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: "68px",
            display: "flex",
            justifyContent: "flex-end", // כל התוכן לצד ימין
            alignItems: "center",
          }}
        >
          {/* 1) הלוגו – בצד הימני הכי */}
          <Box
            component="img"
            src="/HaloLogo.jpg"
            alt="לוגו"
            sx={{
              height: 40,
              cursor: "pointer",
              mr: isMobile ? 0 : 2, // רווח בין הלוגו לקישורים
            }}
            onClick={() => navigate("/")}
          />

          {/* 2) בחלון רחב (לא מובייל) – הקישורים ליד הלוגו (לפי RTL) */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                direction: "rtl", // כדי שהקישורים יתחילו מימין לשמאל
              }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        cursor: "pointer",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "17px",
                        color: isActive ? "#fff" : "#E5E5E5",
                        opacity: isActive ? 1 : 0.8,
                        transition: "opacity 0.3s ease",
                        "&:hover": { opacity: 1 },
                        textAlign: "right",
                      }}
                    >
                      {link.label}
                    </Typography>
                  </NavLink>
                );
              })}
            </Box>
          )}

          {/* 3) אייקון התפריט למובייל */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer במובייל */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              overflowX: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
